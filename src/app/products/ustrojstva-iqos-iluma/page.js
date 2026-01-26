export const dynamic = "force-dynamic";
import ClientFilters from "./client";

async function fetchItems() {
  const res = await fetch("https://iluma-store.ru/api/products/getiqos", {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Ошибка загрузки товаров");
  return res.json();
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
          url: `/favicon/web-app-manifest-512x512`,
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
    console.error(error);
    return <p>Ошибка загрузки данных</p>;
  }

  return (
    <div className="products-container">
      <h1 className="page-title">Купить IQOS ILUMA в Москве</h1>
      <ClientFilters items={items} />
    </div>
  );
}
