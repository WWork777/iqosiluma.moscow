export const dynamic = "force-dynamic";
import ClientFilters from "./client";

async function safeFetch(url, options = {}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });
    clearTimeout(timeout);

    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  } catch (error) {
    clearTimeout(timeout);
    throw error;
  }
}

async function fetchItems() {
  // Используем localhost:3003 для внутреннего API
  const baseUrl =
    process.env.NODE_ENV === "production" && typeof window === "undefined"
      ? "http://localhost:3003" // порт 3003 для серверного рендеринга
      : ""; // для клиентской стороны

  try {
    // Для серверного рендеринга используем полный URL с портом 3003
    // Для клиентской стороны используем relative URL
    const apiUrl =
      typeof window === "undefined"
        ? `${baseUrl}/api/products/getiqos`
        : `/api/products/getiqos`;

    return await safeFetch(apiUrl, {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Fetch error:", error);
    throw new Error("Ошибка загрузки товаров");
  }
}

export async function generateMetadata() {
  const title = "IQOS ILUMA купить в Москве";
  return {
    title,
    description:
      "Купить IQOS ILUMA в Москве. Все модели в наличии, гарантия, удобное получение.",
    alternates: {
      canonical: `https://iqosiluma.moscow/products/ustrojstva-iqos-iluma`,
    },
    openGraph: {
      title: `IQOS ILUMA купить в Москве`,
      description: `Купить IQOS ILUMA в Москве. Все модели в наличии, гарантия, удобное получение.`,
      url: `https://iqosiluma.moscow/products/ustrojstva-iqos-iluma`,
      images: [
        {
          url: `/favicon/web-app-manifest-512x512.png`,
          alt: `IqosIluma`,
        },
      ],
    },
  };
}

export default async function Page() {
  let items = [];

  try {
    items = await fetchItems();
  } catch (error) {
    console.error("Page error:", error);
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h1>Ошибка загрузки данных</h1>
        <p>Не удалось загрузить информацию об устройствах IQOS ILUMA.</p>
        <a href="/products" style={{ color: "blue" }}>
          Вернуться в каталог
        </a>
      </div>
    );
  }

  return (
    <div className="products-container">
      <h1 className="page-title">Купить IQOS ILUMA в Москве</h1>
      <ClientFilters items={items} />
    </div>
  );
}
