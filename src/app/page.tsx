import BannerHome from "@/components/BannerHome";
import Collection from "@/components/Collection";

interface ProductType {
  id: string;
  name: string;
  image: string;
  price: string;
}

export default async function Home() {
  // const res = await fetch(
  //   "https://apivesti.vesti.mobi/appmarca/v2/catalogue/company/luckyjeans?page=1&perpage=60",
  // );

  // const data = await res.json();

  return (
    <main className="flex flex-col">
      {/* <BannerHome /> */}

      <Collection />
    </main>
  );
}
