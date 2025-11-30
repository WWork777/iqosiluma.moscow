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
  const title = "Купить IQOS Iluma в Москве — оригинальные устройства";
  return {
    title,
    description:
      "Официальные IQOS Iluma в Москве. Гарантия, доставка. Выгодные цены.",
    alternates: {
      canonical: `https://iqosiluma.moscow/products/devices`,
    },
    openGraph: {
      title: `Купить IQOS Iluma в Москве — оригинальные устройства`,
      description: `Официальные IQOS Iluma в Москве. Гарантия, доставка. Выгодные цены.`,
      url: `https://iqosiluma.moscow/products/devices`,
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
      <h1 style={{ position: "absolute", zIndex: "-9999" }}>
        Аксессуары Iluma
      </h1>
      <ClientFilters items={items} />
    </div>
  );
}
