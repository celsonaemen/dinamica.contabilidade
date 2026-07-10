import { XMLParser } from "fast-xml-parser";

export type NewsItem = {
  title: string;
  excerpt: string;
  url: string;
  source: string;
  theme: string;
  publishedAt?: string;
};

const feeds = [
  {
    source: "Portal Contábeis",
    url: "https://www.contabeis.com.br/rss/conteudo/",
  },
  {
    source: "Portal Contábeis",
    url: "https://www.contabeis.com.br/rss/noticias/",
  },
  {
    source: "Portal Contábeis",
    url: "https://www.contabeis.com.br/rss/legislacao/",
  },
];

const parser = new XMLParser({
  cdataPropName: "cdata",
  htmlEntities: true,
  ignoreAttributes: false,
  processEntities: true,
  trimValues: true,
  attributeNamePrefix: "",
  textNodeName: "text",
});

function toArray<T>(value: T | T[] | null | undefined): T[] {
  if (!value) {
    return [];
  }

  return Array.isArray(value) ? value : [value];
}

function getObject(value: unknown): Record<string, unknown> {
  return value && typeof value === "object" && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : {};
}

function textFrom(value: unknown): string {
  if (typeof value === "string" || typeof value === "number") {
    return String(value);
  }

  if (Array.isArray(value)) {
    return value.map(textFrom).filter(Boolean).join(" ");
  }

  const object = getObject(value);

  return textFrom(object.cdata || object.text || object["#text"] || "");
}

function stripHtml(value: string) {
  return value
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
}

function limitText(value: string, maxLength = 190) {
  const text = stripHtml(value);

  if (text.length <= maxLength) {
    return text;
  }

  return `${text.slice(0, maxLength).trim()}...`;
}

function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function inferTheme(title: string, excerpt: string) {
  const text = normalize(`${title} ${excerpt}`);

  const themes = [
    {
      label: "Reforma Tributária",
      keywords: [
        "reforma tributaria",
        "ibs",
        "cbs",
        "imposto seletivo",
        "iva",
        "plp 68",
        "plp 108",
        "comite gestor",
        "split payment",
        "tributacao da reforma",
        "regulamentacao da reforma",
      ],
    },
    {
      label: "Contábil",
      keywords: [
        "contabil",
        "contador",
        "contabilidade",
        "obrigacoes acessorias",
        "escrituracao",
        "sped",
        "simples nacional",
        "mei",
        "cnpj",
        "lucro presumido",
        "lucro real",
        "conselho federal de contabilidade",
        "cfc",
        "crc",
      ],
    },
  ];

  return themes.find((theme) => theme.keywords.some((keyword) => text.includes(keyword)))?.label;
}

function isBlockedTopic(title: string, excerpt: string) {
  const text = normalize(`${title} ${excerpt}`);
  const blockedKeywords = [
    "arma",
    "armas",
    "posse de arma",
    "porte de arma",
    "municao",
    "seguranca publica",
    "policia",
    "criminal",
    "homicidio",
    "violencia",
    "eleicao",
    "campanha eleitoral",
  ];

  return blockedKeywords.some((keyword) => text.includes(keyword));
}

function formatDate(value: string) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return undefined;
  }

  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
}

function extractLink(item: Record<string, unknown>) {
  const link = item.link;

  if (typeof link === "string") {
    return link;
  }

  const linkObject = getObject(link);

  if (typeof linkObject.href === "string") {
    return linkObject.href;
  }

  const linkArray = toArray(link as Record<string, unknown>[] | Record<string, unknown>);
  const alternate = linkArray.map(getObject).find((entry) => entry.rel === "alternate" || entry.href);

  return typeof alternate?.href === "string" ? alternate.href : "";
}

function extractSource(feedSource: string, item: Record<string, unknown>) {
  const source = item.source;

  if (typeof source === "string") {
    return source;
  }

  const sourceObject = getObject(source);
  const sourceText = textFrom(sourceObject);

  return sourceText || feedSource;
}

function parseFeed(xml: string, feedSource: string) {
  const parsed = parser.parse(xml);
  const root = getObject(parsed);
  const rss = getObject(root.rss);
  const channel = getObject(rss.channel);
  const atomFeed = getObject(root.feed);
  const rdf = getObject(root["rdf:RDF"] || root.RDF);

  const rawItems = [
    ...toArray(channel.item as Record<string, unknown> | Record<string, unknown>[]),
    ...toArray(atomFeed.entry as Record<string, unknown> | Record<string, unknown>[]),
    ...toArray(rdf.item as Record<string, unknown> | Record<string, unknown>[]),
  ];

  return rawItems
    .map((rawItem) => {
      const item = getObject(rawItem);
      const title = stripHtml(textFrom(item.title));
      const excerpt = limitText(
        textFrom(item.description || item.summary || item.content || item["content:encoded"]),
      );
      const url = extractLink(item);
      const theme = inferTheme(title, excerpt);

      if (!title || !url || !excerpt || !theme || isBlockedTopic(title, excerpt)) {
        return null;
      }

      const newsItem: NewsItem = {
        title,
        excerpt,
        url,
        source: extractSource(feedSource, item),
        theme,
      };

      const publishedAt = formatDate(textFrom(item.pubDate || item.published || item.updated || item["dc:date"]));

      if (publishedAt) {
        newsItem.publishedAt = publishedAt;
      }

      return newsItem;
    })
    .filter((item): item is NewsItem => Boolean(item));
}

function uniqueItems(items: NewsItem[]) {
  const seen = new Set<string>();

  return items.filter((item) => {
    const key = normalize(`${item.title}-${item.url}`);

    if (seen.has(key)) {
      return false;
    }

    seen.add(key);
    return true;
  });
}

function balanceSources(groups: NewsItem[][], limit: number) {
  const balanced: NewsItem[] = [];
  const largestGroupSize = Math.max(...groups.map((group) => group.length), 0);

  for (let index = 0; index < largestGroupSize && balanced.length < limit; index += 1) {
    for (const group of groups) {
      const item = group[index];

      if (item) {
        balanced.push(item);
      }

      if (balanced.length >= limit) {
        break;
      }
    }
  }

  return uniqueItems(balanced).slice(0, limit);
}

function fallbackItems(): NewsItem[] {
  return [];
}

export async function getNewsItems() {
  const results = await Promise.allSettled(
    feeds.map(async (feed) => {
      const response = await fetch(feed.url, {
        headers: {
          "User-Agent": "DinamicaContabilidadeSite/1.0",
        },
        next: {
          revalidate: 60 * 60,
        },
      });

      if (!response.ok) {
        throw new Error(`Feed ${feed.source} retornou ${response.status}`);
      }

      return parseFeed(await response.text(), feed.source);
    }),
  );

  const groups = results.map((result) => (result.status === "fulfilled" ? result.value : []));
  const items = balanceSources(groups, 9);

  return items.length ? items.slice(0, 9) : fallbackItems();
}
