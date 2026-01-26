export const dynamic = "force-dynamic";
import ClientFilters from "./client";

async function fetchItems() {
  const res = await fetch("https://iluma-store.ru/api/products/getterea", {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Ошибка загрузки товаров");
  return res.json();
}

export async function generateMetadata() {
  const title = "Стики IQOS ILUMA в Москве";
  return {
    title,
    description:
      "Стики TEREA для IQOS ILUMA в Москве. Оригинал, быстрая доставка.",
    alternates: {
      canonical: `https://iqosiluma.moscow/products/stiki-terea-dlya-iqos-iluma`,
    },
    openGraph: {
      title: `Стики IQOS ILUMA в Москве`,
      description: `Стики TEREA для IQOS ILUMA в Москве. Оригинал, быстрая доставка.`,
      url: `https://iqosiluma.moscow/products/stiki-terea-dlya-iqos-iluma`,
      images: [
        {
          url: `/favicon/web-app-manifest-512x512`,
          alt: `IqosILuma`,
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
    console.error(error);
    return <p>Ошибка загрузки данных</p>;
  }

  return (
    <div className="products-container">
      <h1 className="page-title">Купить стики Terea в Москве</h1>
      <ClientFilters items={items} />
    </div>
  );
}
