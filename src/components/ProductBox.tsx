"use client";
import {
  Box,
  Image,
  Heading,
  Button,
  ButtonGroup,
  Flex,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
// import { AiOutlineEye } from "react-icons/ai";
// import currencyFormat from "@/utils/current-format";
import ModalProductDetails from "@/components/modals/ModalProductDetails";
import { CurrentOrderContext } from "@/contexts/current-order";

interface ProductType {
  id: string;
  name: string;
  image: string;
  price: string;
  product: any;
}

export default function ProductBox({ id, name, image, product }: ProductType) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { addItem } = useContext(CurrentOrderContext);

  return (
    <Flex
      borderRadius={6}
      direction={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      w={{ base: "183px", sm: "14.5625rem", md: "17.5rem" }}
    >
      <Box
        maxW={{ sm: "11.4375rem", md: "250px" }}
        maxH={{ sm: "14.25rem", md: "19.5625rem" }}
      >
        <Image
          src={image}
          w={{ base: "11.4375rem", sm: "11.4375rem", md: "15.625rem" }}
          h={{ base: "14.25rem", sm: "14.25rem", md: "19.5625rem" }}
          objectFit="cover"
          objectPosition="center"
          borderRadius={6}
          alt={name}
        />
      </Box>
      <Flex
        direction="column"
        alignItems="flex-start"
        w="full"
        px={{ base: "1", md: "4" }}
        py="2"
      >
        <Heading size={{ base: "sm", md: "md" }} fontWeight="bold">
          {name}
        </Heading>
        {/* <Text fontSize="sm" mb="3">
          {currencyFormat(parseInt(price))}
        </Text> */}
      </Flex>
      <ButtonGroup
        w="full"
        // px="4"
        alignItems="center"
        justifyContent="flex-start"
      >
        {/* <IconButton
          aria-label="olho"
          variant="outline"
          bgColor="gray.900"
          borderColor="yellow.300"
          fontSize="30px"
          color="yellow.300"
          icon={<AiOutlineEye />}
          _hover={{
            bgColor: "gray.900",
            color: "yellow.400",
          }}
          onClick={() => setIsOpenModal(true)}
        /> */}
        <Button
          variant="solid"
          _hover={{
            bgColor: "yellow.400",
          }}
          // w={{ sm: "100%", md: "70%" }}
          w="100%"
          ml={{ sm: "3", md: "" }}
          h="8"
          backgroundColor="yellow.300"
          fontSize={{ base: "14px" }}
          onClick={() => addItem(product, 1)}
        >
          Adicionar ao carrinho
        </Button>
      </ButtonGroup>
      <ModalProductDetails
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
      />
    </Flex>
  );
}
