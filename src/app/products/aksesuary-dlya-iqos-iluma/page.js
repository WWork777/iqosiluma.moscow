export const dynamic = "force-dynamic";
import ClientFilters from "./client";

async function fetchItems() {
  const res = await fetch("https://iluma-store.ru/api/products/getdevices", {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Ошибка загрузки товаров");
  return res.json();
}

export async function generateMetadata() {
  const title = "Аксессуары IQOS ILUMA Москва";
  return {
    title,
    description:
      "Аксессуары для IQOS ILUMA в Москве. Чехлы, зарядки, оригинал.",
    alternates: {
      canonical: `https://iqosiluma.moscow/products/aksesuary-dlya-iqos-iluma`,
    },
    openGraph: {
      title: `Аксессуары IQOS ILUMA Москва`,
      description: `Аксессуары для IQOS ILUMA в Москве. Чехлы, зарядки, оригинал.`,
      url: `https://iqosiluma.moscow/products/aksesuary-dlya-iqos-iluma`,
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
      <h1 className="page-title">Купить аксессуары для IQOS ILUMA в Москве</h1>
      <ClientFilters items={items} />
    </div>
  );
}
