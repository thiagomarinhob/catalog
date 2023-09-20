"use client";
import { IconButton, Flex, Wrap, WrapItem, Text } from "@chakra-ui/react";
import ProductBox from "@/components/ProductBox";
import { ProductsContext } from "@/contexts/ProductsContext";
import { useContext } from "react";
import { GiPreviousButton, GiNextButton } from "react-icons/gi";

export default function Collection() {
  const { getProducts, loadProducts, prevPage, nextPage } =
    useContext(ProductsContext);

  const data = getProducts();

  return (
    <Flex direction="column" my="4" alignItems="center">
      <Flex
        h="10"
        w="full"
        alignItems="center"
        justifyContent={{ base: "space-around" }}
        bgColor="gray.800"
        mb="10"
      >
        <Flex
          alignItems="center"
          bgColor={prevPage ? "yellow.300" : "gray.800"}
          onClick={() => loadProducts(prevPage)}
          cursor={prevPage ? "pointer" : "not-allowed"}
          p="0.5"
          borderRadius="4px"
          _hover={{
            bgColor: "yellow.400",
          }}
        >
          <IconButton
            icon={<GiPreviousButton />}
            aria-label="prev"
            fontSize="30px"
            variant="link"
            cursor={prevPage ? "pointer" : "not-allowed"}
          />
          <Text fontWeight="bold" color={prevPage ? "gray.800" : "gray.300"}>
            Voltar
          </Text>
        </Flex>

        <Flex
          alignItems="center"
          bgColor={nextPage ? "yellow.300" : "gray.800"}
          onClick={() => loadProducts(nextPage)}
          cursor={nextPage ? "pointer" : "not-allowed"}
          p="0.5"
          borderRadius="4px"
          _hover={{
            bgColor: "yellow.400",
          }}
        >
          <Text fontWeight="bold" color={nextPage ? "gray.800" : "gray.300"}>
            Próximo
          </Text>
          <IconButton
            icon={<GiNextButton />}
            aria-label="next"
            variant="link"
            fontSize="30px"
            w="40px"
            cursor={nextPage ? "pointer" : "not-allowed"}
          />
        </Flex>
      </Flex>

      <Wrap
        spacing={{ base: "8px", sm: "30px" }}
        px={{ base: "2" }}
        justify={{ base: "flex-start", sm: "center" }}
      >
        {data.map((item: any) => {
          if (item.stockout) {
            return;
          }
          return (
            <WrapItem key={item.id}>
              <ProductBox product={item} />
            </WrapItem>
          );
        })}
      </Wrap>
    </Flex>
  );
}
