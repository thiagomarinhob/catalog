import BannerHome from "@/components/BannerHome";
import Collection from "@/components/Collection";
import client from "@/lib/commerce";

interface ProductType {
  id: string;
  name: string;
  image: string;
  price: string;
}

export default async function Home() {
  // const res = await fetch(
  //   "https://apivesti.vesti.mobi/appmarca/v2/catalogue/6f64e9e1e4f1d7e/company/luckyjeans/?page=1&perpage=60",
  // );

  // const data = await res.json();
  // console.log(data.products.map((item) => item));
  // const data: any = [
  //   {
  //     id: "5a9888e3-a6f7-4e26-91a8-0f550a3c5020",
  //     name: "SHOULDERBAG",
  //     code: "L01",
  //     price: 40,
  //     promotion: false,
  //     price_promotional: 0,
  //     stockout: false,
  //     media: {
  //       id: "1b3f8704-502c-4cf1-9eca-682c259d9423",
  //       type: "pic",
  //       filename: "98576-xl.png",
  //       zoom: {
  //         url: "https://cdn-op.vesti.mobi/958522/5a9888e3-a6f7-4e26-91a8-0f550a3c5020/98576-xl.webp",
  //         fallback:
  //           "https://cdn-op.vesti.mobi/958522/5a9888e3-a6f7-4e26-91a8-0f550a3c5020/98576-xl.png",
  //         width: 1119,
  //         height: 1400,
  //       },
  //       normal: {
  //         url: "https://cdn-op.vesti.mobi/958522/5a9888e3-a6f7-4e26-91a8-0f550a3c5020/98576-lg.webp",
  //         fallback:
  //           "https://cdn-op.vesti.mobi/958522/5a9888e3-a6f7-4e26-91a8-0f550a3c5020/98576-lg.png",
  //         width: 800,
  //         height: 1000,
  //       },
  //       thumb: {
  //         url: "https://cdn-op.vesti.mobi/958522/5a9888e3-a6f7-4e26-91a8-0f550a3c5020/98576-xs.webp",
  //         fallback:
  //           "https://cdn-op.vesti.mobi/958522/5a9888e3-a6f7-4e26-91a8-0f550a3c5020/98576-xs.png",
  //         width: 56,
  //         height: 70,
  //       },
  //     },
  //   },
  //   {
  //     id: "06637670-b1a2-4a13-8f72-c85145c4805f",
  //     name: "Camisa Longline",
  //     code: "Lo51",
  //     price: 45,
  //     promotion: false,
  //     price_promotional: 0,
  //     stockout: false,
  //     media: {
  //       id: "c27f658f-f24a-46e7-8003-71d01bbc4902",
  //       type: "pic",
  //       filename: "72648-xl.png",
  //       zoom: {
  //         url: "https://cdn-op.vesti.mobi/958522/06637670-b1a2-4a13-8f72-c85145c4805f/72648-xl.webp",
  //         fallback:
  //           "https://cdn-op.vesti.mobi/958522/06637670-b1a2-4a13-8f72-c85145c4805f/72648-xl.png",
  //         width: 1119,
  //         height: 1400,
  //       },
  //       normal: {
  //         url: "https://cdn-op.vesti.mobi/958522/06637670-b1a2-4a13-8f72-c85145c4805f/72648-lg.webp",
  //         fallback:
  //           "https://cdn-op.vesti.mobi/958522/06637670-b1a2-4a13-8f72-c85145c4805f/72648-lg.png",
  //         width: 800,
  //         height: 1000,
  //       },
  //       thumb: {
  //         url: "https://cdn-op.vesti.mobi/958522/06637670-b1a2-4a13-8f72-c85145c4805f/72648-xs.webp",
  //         fallback:
  //           "https://cdn-op.vesti.mobi/958522/06637670-b1a2-4a13-8f72-c85145c4805f/72648-xs.png",
  //         width: 56,
  //         height: 70,
  //       },
  //     },
  //   },
  //   {
  //     id: "da6abcb6-59e8-492f-9275-cdbeae3c6ac1",
  //     name: "Camisas longline",
  //     code: "Lo50",
  //     price: 45,
  //     promotion: false,
  //     price_promotional: 0,
  //     stockout: false,
  //     media: {
  //       id: "96d26203-9e7b-44b9-8414-5c8161a57e37",
  //       type: "pic",
  //       filename: "91506-xl.png",
  //       zoom: {
  //         url: "https://cdn-op.vesti.mobi/958522/da6abcb6-59e8-492f-9275-cdbeae3c6ac1/91506-xl.webp",
  //         fallback:
  //           "https://cdn-op.vesti.mobi/958522/da6abcb6-59e8-492f-9275-cdbeae3c6ac1/91506-xl.png",
  //         width: 1120,
  //         height: 1400,
  //       },
  //       normal: {
  //         url: "https://cdn-op.vesti.mobi/958522/da6abcb6-59e8-492f-9275-cdbeae3c6ac1/91506-lg.webp",
  //         fallback:
  //           "https://cdn-op.vesti.mobi/958522/da6abcb6-59e8-492f-9275-cdbeae3c6ac1/91506-lg.png",
  //         width: 800,
  //         height: 1000,
  //       },
  //       thumb: {
  //         url: "https://cdn-op.vesti.mobi/958522/da6abcb6-59e8-492f-9275-cdbeae3c6ac1/91506-xs.webp",
  //         fallback:
  //           "https://cdn-op.vesti.mobi/958522/da6abcb6-59e8-492f-9275-cdbeae3c6ac1/91506-xs.png",
  //         width: 56,
  //         height: 70,
  //       },
  //     },
  //   },
  //   {
  //     id: "b336558c-ec66-41ce-a411-165c1c15f05a",
  //     name: "Camisa Longline",
  //     code: "Lo49",
  //     price: 45,
  //     promotion: false,
  //     price_promotional: 0,
  //     stockout: false,
  //     media: {
  //       id: "af526e60-fe9b-439c-830a-08a155f3330d",
  //       type: "pic",
  //       filename: "26539-xl.png",
  //       zoom: {
  //         url: "https://cdn-op.vesti.mobi/958522/b336558c-ec66-41ce-a411-165c1c15f05a/26539-xl.webp",
  //         fallback:
  //           "https://cdn-op.vesti.mobi/958522/b336558c-ec66-41ce-a411-165c1c15f05a/26539-xl.png",
  //         width: 934,
  //         height: 1400,
  //       },
  //       normal: {
  //         url: "https://cdn-op.vesti.mobi/958522/b336558c-ec66-41ce-a411-165c1c15f05a/26539-lg.webp",
  //         fallback:
  //           "https://cdn-op.vesti.mobi/958522/b336558c-ec66-41ce-a411-165c1c15f05a/26539-lg.png",
  //         width: 667,
  //         height: 1000,
  //       },
  //       thumb: {
  //         url: "https://cdn-op.vesti.mobi/958522/b336558c-ec66-41ce-a411-165c1c15f05a/26539-xs.webp",
  //         fallback:
  //           "https://cdn-op.vesti.mobi/958522/b336558c-ec66-41ce-a411-165c1c15f05a/26539-xs.png",
  //         width: 47,
  //         height: 70,
  //       },
  //     },
  //   },
  //   {
  //     id: "4aa60a66-27a4-451f-8414-2176dbb1bef4",
  //     name: "Camisa Longline",
  //     code: "Lo47",
  //     price: 45,
  //     promotion: false,
  //     price_promotional: 0,
  //     stockout: false,
  //     media: {
  //       id: "ee700c25-02fc-4bcc-b0b3-a60e7ae3c140",
  //       type: "pic",
  //       filename: "01813-xl.png",
  //       zoom: {
  //         url: "https://cdn-op.vesti.mobi/958522/4aa60a66-27a4-451f-8414-2176dbb1bef4/01813-xl.webp",
  //         fallback:
  //           "https://cdn-op.vesti.mobi/958522/4aa60a66-27a4-451f-8414-2176dbb1bef4/01813-xl.png",
  //         width: 1119,
  //         height: 1400,
  //       },
  //       normal: {
  //         url: "https://cdn-op.vesti.mobi/958522/4aa60a66-27a4-451f-8414-2176dbb1bef4/01813-lg.webp",
  //         fallback:
  //           "https://cdn-op.vesti.mobi/958522/4aa60a66-27a4-451f-8414-2176dbb1bef4/01813-lg.png",
  //         width: 800,
  //         height: 1000,
  //       },
  //       thumb: {
  //         url: "https://cdn-op.vesti.mobi/958522/4aa60a66-27a4-451f-8414-2176dbb1bef4/01813-xs.webp",
  //         fallback:
  //           "https://cdn-op.vesti.mobi/958522/4aa60a66-27a4-451f-8414-2176dbb1bef4/01813-xs.png",
  //         width: 56,
  //         height: 70,
  //       },
  //     },
  //   },
  //   {
  //     id: "5a9888e3-a6f7-4e26-91a8-0f550a3c5020",
  //     name: "SHOULDERBAG",
  //     code: "L01",
  //     price: 40,
  //     promotion: false,
  //     price_promotional: 0,
  //     stockout: false,
  //     media: {
  //       id: "1b3f8704-502c-4cf1-9eca-682c259d9423",
  //       type: "pic",
  //       filename: "98576-xl.png",
  //       zoom: {
  //         url: "https://cdn-op.vesti.mobi/958522/5a9888e3-a6f7-4e26-91a8-0f550a3c5020/98576-xl.webp",
  //         fallback:
  //           "https://cdn-op.vesti.mobi/958522/5a9888e3-a6f7-4e26-91a8-0f550a3c5020/98576-xl.png",
  //         width: 1119,
  //         height: 1400,
  //       },
  //       normal: {
  //         url: "https://cdn-op.vesti.mobi/958522/5a9888e3-a6f7-4e26-91a8-0f550a3c5020/98576-lg.webp",
  //         fallback:
  //           "https://cdn-op.vesti.mobi/958522/5a9888e3-a6f7-4e26-91a8-0f550a3c5020/98576-lg.png",
  //         width: 800,
  //         height: 1000,
  //       },
  //       thumb: {
  //         url: "https://cdn-op.vesti.mobi/958522/5a9888e3-a6f7-4e26-91a8-0f550a3c5020/98576-xs.webp",
  //         fallback:
  //           "https://cdn-op.vesti.mobi/958522/5a9888e3-a6f7-4e26-91a8-0f550a3c5020/98576-xs.png",
  //         width: 56,
  //         height: 70,
  //       },
  //     },
  //   },
  //   {
  //     id: "06637670-b1a2-4a13-8f72-c85145c4805f",
  //     name: "Camisa Longline",
  //     code: "Lo51",
  //     price: 45,
  //     promotion: false,
  //     price_promotional: 0,
  //     stockout: false,
  //     media: {
  //       id: "c27f658f-f24a-46e7-8003-71d01bbc4902",
  //       type: "pic",
  //       filename: "72648-xl.png",
  //       zoom: {
  //         url: "https://cdn-op.vesti.mobi/958522/06637670-b1a2-4a13-8f72-c85145c4805f/72648-xl.webp",
  //         fallback:
  //           "https://cdn-op.vesti.mobi/958522/06637670-b1a2-4a13-8f72-c85145c4805f/72648-xl.png",
  //         width: 1119,
  //         height: 1400,
  //       },
  //       normal: {
  //         url: "https://cdn-op.vesti.mobi/958522/06637670-b1a2-4a13-8f72-c85145c4805f/72648-lg.webp",
  //         fallback:
  //           "https://cdn-op.vesti.mobi/958522/06637670-b1a2-4a13-8f72-c85145c4805f/72648-lg.png",
  //         width: 800,
  //         height: 1000,
  //       },
  //       thumb: {
  //         url: "https://cdn-op.vesti.mobi/958522/06637670-b1a2-4a13-8f72-c85145c4805f/72648-xs.webp",
  //         fallback:
  //           "https://cdn-op.vesti.mobi/958522/06637670-b1a2-4a13-8f72-c85145c4805f/72648-xs.png",
  //         width: 56,
  //         height: 70,
  //       },
  //     },
  //   },
  //   {
  //     id: "da6abcb6-59e8-492f-9275-cdbeae3c6ac1",
  //     name: "Camisas longline",
  //     code: "Lo50",
  //     price: 45,
  //     promotion: false,
  //     price_promotional: 0,
  //     stockout: false,
  //     media: {
  //       id: "96d26203-9e7b-44b9-8414-5c8161a57e37",
  //       type: "pic",
  //       filename: "91506-xl.png",
  //       zoom: {
  //         url: "https://cdn-op.vesti.mobi/958522/da6abcb6-59e8-492f-9275-cdbeae3c6ac1/91506-xl.webp",
  //         fallback:
  //           "https://cdn-op.vesti.mobi/958522/da6abcb6-59e8-492f-9275-cdbeae3c6ac1/91506-xl.png",
  //         width: 1120,
  //         height: 1400,
  //       },
  //       normal: {
  //         url: "https://cdn-op.vesti.mobi/958522/da6abcb6-59e8-492f-9275-cdbeae3c6ac1/91506-lg.webp",
  //         fallback:
  //           "https://cdn-op.vesti.mobi/958522/da6abcb6-59e8-492f-9275-cdbeae3c6ac1/91506-lg.png",
  //         width: 800,
  //         height: 1000,
  //       },
  //       thumb: {
  //         url: "https://cdn-op.vesti.mobi/958522/da6abcb6-59e8-492f-9275-cdbeae3c6ac1/91506-xs.webp",
  //         fallback:
  //           "https://cdn-op.vesti.mobi/958522/da6abcb6-59e8-492f-9275-cdbeae3c6ac1/91506-xs.png",
  //         width: 56,
  //         height: 70,
  //       },
  //     },
  //   },
  //   {
  //     id: "b336558c-ec66-41ce-a411-165c1c15f05a",
  //     name: "Camisa Longline",
  //     code: "Lo49",
  //     price: 45,
  //     promotion: false,
  //     price_promotional: 0,
  //     stockout: false,
  //     media: {
  //       id: "af526e60-fe9b-439c-830a-08a155f3330d",
  //       type: "pic",
  //       filename: "26539-xl.png",
  //       zoom: {
  //         url: "https://cdn-op.vesti.mobi/958522/b336558c-ec66-41ce-a411-165c1c15f05a/26539-xl.webp",
  //         fallback:
  //           "https://cdn-op.vesti.mobi/958522/b336558c-ec66-41ce-a411-165c1c15f05a/26539-xl.png",
  //         width: 934,
  //         height: 1400,
  //       },
  //       normal: {
  //         url: "https://cdn-op.vesti.mobi/958522/b336558c-ec66-41ce-a411-165c1c15f05a/26539-lg.webp",
  //         fallback:
  //           "https://cdn-op.vesti.mobi/958522/b336558c-ec66-41ce-a411-165c1c15f05a/26539-lg.png",
  //         width: 667,
  //         height: 1000,
  //       },
  //       thumb: {
  //         url: "https://cdn-op.vesti.mobi/958522/b336558c-ec66-41ce-a411-165c1c15f05a/26539-xs.webp",
  //         fallback:
  //           "https://cdn-op.vesti.mobi/958522/b336558c-ec66-41ce-a411-165c1c15f05a/26539-xs.png",
  //         width: 47,
  //         height: 70,
  //       },
  //     },
  //   },
  //   {
  //     id: "4aa60a66-27a4-451f-8414-2176dbb1bef4",
  //     name: "Camisa Longline",
  //     code: "Lo47",
  //     price: 45,
  //     promotion: false,
  //     price_promotional: 0,
  //     stockout: false,
  //     media: {
  //       id: "ee700c25-02fc-4bcc-b0b3-a60e7ae3c140",
  //       type: "pic",
  //       filename: "01813-xl.png",
  //       zoom: {
  //         url: "https://cdn-op.vesti.mobi/958522/4aa60a66-27a4-451f-8414-2176dbb1bef4/01813-xl.webp",
  //         fallback:
  //           "https://cdn-op.vesti.mobi/958522/4aa60a66-27a4-451f-8414-2176dbb1bef4/01813-xl.png",
  //         width: 1119,
  //         height: 1400,
  //       },
  //       normal: {
  //         url: "https://cdn-op.vesti.mobi/958522/4aa60a66-27a4-451f-8414-2176dbb1bef4/01813-lg.webp",
  //         fallback:
  //           "https://cdn-op.vesti.mobi/958522/4aa60a66-27a4-451f-8414-2176dbb1bef4/01813-lg.png",
  //         width: 800,
  //         height: 1000,
  //       },
  //       thumb: {
  //         url: "https://cdn-op.vesti.mobi/958522/4aa60a66-27a4-451f-8414-2176dbb1bef4/01813-xs.webp",
  //         fallback:
  //           "https://cdn-op.vesti.mobi/958522/4aa60a66-27a4-451f-8414-2176dbb1bef4/01813-xs.png",
  //         width: 56,
  //         height: 70,
  //       },
  //     },
  //   },
  // ];

  const { data: products } = await client.products.list();

  console.log(products);

  return (
    <main className="flex flex-col">
      <BannerHome />

      <Collection data={products} />
    </main>
  );
}
