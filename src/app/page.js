import Image from "next/image";
import './main.scss'
import Hero from "../../components/Home/Hero/Hero";
import Poster from "../../components/Home/Poster/Poster";
import Preview from "../../components/Home/Preview/Preview";
import About from "../../components/Home/About/About";
import New from "../../components/Home/New/New";  
import Exclusive from "../../components/Home/Exclusive/Exclusive";  
import Reviews from "../../components/Home/Reviews/Reviews";
import ModalManager from "../../components/ModalManager/ModalManager";

export const metadata = {
  title: "IQOS Iluma и стики Terea — купить в Москве с доставкой",
  description: "Оригинальные IQOS Iluma, стики Terea, вейпы и табак в Москве. Доставка за 1 час. Лучшие цены и акции.",
  keywords: "iqos iluma купить, iqos iluma цена, iqos iluma москва, айкос илума купить, айкос илума цена, айкос илума москва, iqos iluma prime купить, iqos iluma prime цена, iqos iluma one купить, iqos iluma one цена, iqos iluma доставка, iqos iluma оригинал, купить iqos iluma в москве, iqos iluma официальный магазин, iqos iluma акции, iqos iluma скидки, iqos iluma дешево, iqos iluma интернет магазин, iqos iluma премиум, iqos iluma limited edition, iqos iluma limited купить, iqos iluma распродажа, iqos iluma новый, iqos iluma новинка, iqos iluma каталог, iqos iluma отзывы, iqos iluma выгодно, iqos iluma официальный сайт, iqos iluma официальный дилер, iqos iluma купить срочно, айкос илума срочно, айкос илума доставка день в день, айкос илума с гарантией, айкос илума акции, айкос илума скидка, айкос илума премиум, айкос илума limited, айкос илума limited купить, айкос илума новый, айкос илума новинка, айкос илума официальный магазин, айкос илума официальный сайт, айкос илума интернет магазин, iqos купить, айкос купить, iqos москва, айкос москва, iqos цена, айкос цена, iqos оригинал, айкос оригинал, iqos официально, айкос официально, iqos в москве, айкос в москве, iqos недорого, айкос недорого, iqos акции, айкос акции, iqos скидки, айкос скидки, iqos премиум, айкос премиум, iqos limited, айкос limited, iqos новый, айкос новый, iqos новинка, айкос новинка, iqos официальный сайт, айкос официальный сайт, iqos официальный дилер, айкос официальный дилер, купить iqos срочно, купить айкос срочно, доставка iqos день в день, доставка айкос день в день, iqos с гарантией, айкос с гарантией, iqos интернет магазин, айкос интернет магазин, iqos купить онлайн, айкос купить онлайн, iqos заказ онлайн, айкос заказ онлайн, iqos недорого москва, айкос недорого москва, iqos дешево москва, айкос дешево москва, iqos в наличии, айкос в наличии, iqos доставка, айкос доставка, iqos доставка москва, айкос доставка москва, iqos купить москва дешево, айкос купить москва дешево, iqos купить москва срочно, айкос купить москва срочно, iqos продажа, айкос продажа, iqos продажа москва, айкос продажа москва, iqos распродажа, айкос распродажа, iqos limited edition, айкос limited edition, iqos limited edition купить, айкос limited edition купить, iqos эксклюзив, айкос эксклюзив, iqos эксклюзив купить, айкос эксклюзив купить, iqos спецпредложение, айкос спецпредложение, iqos спецпредложение москва, айкос спецпредложение москва, iqos с доставкой, айкос с доставкой, iqos оригинал купить, айкоc",
  alternates: {
    canonical: `https://iqosiluma.moscow`
  },

  openGraph: {
      title: `IQOS Iluma и стики Terea — купить в Москве с доставкой`,
      description: `Оригинальные IQOS Iluma, стики Terea, вейпы и табак в Москве. Доставка за 1 час. Лучшие цены и акции.`,
      url: `https://iqosiluma.moscow`,
      images: [
          {
              url: `/favicon/web-app-manifest-512x512`,
              alt: `IqosIluma`,
          },
      ],
  },
};

export default function Home() {
  return (
    <>
      <h1 className="hidden-h1">IQOS Iluma и стики Terea недорого и с доставкой по всей России</h1>
      <Hero />
      <Poster />
      <Preview />
      <Exclusive/>  
      <New/>
      <About />
      <Reviews />
      <ModalManager/>
    </>
  );
}
