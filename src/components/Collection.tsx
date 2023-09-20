"use client";
import { Flex, Wrap, WrapItem } from "@chakra-ui/react";
import ProductBox from "@/components/ProductBox";

interface ProductType {
  data: {
    id: string;
    name: string;
    image: string;
    price: string;
  }[];
}

export default function Collection(data: any) {
  return (
    <Flex direction="column" my="4" alignItems="center">
      <Flex
        h="10"
        w="full"
        maxWidth="64rem"
        alignItems="center"
        justifyContent="space-between"
        bgColor="gray.800"
        px="28"
      >
        <p>Filtrar</p>
        <p>Ordenar</p>
      </Flex>
      <Wrap
        spacing={{ base: "8px", sm: "30px" }}
        px={{ base: "2" }}
        justify={{ base: "flex-start", sm: "center" }}
      >
        {data.data.products.map((item: any) => {
          return (
            <WrapItem key={item.id}>
              <ProductBox
                key={item.id}
                name={item.name}
                image={item.media.normal.url}
                price={item.price}
              />
            </WrapItem>
          );
        })}
      </Wrap>
    </Flex>
  );
}
