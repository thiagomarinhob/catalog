"use client";
import {
  Box,
  Image,
  Heading,
  Text,
  Button,
  ButtonGroup,
  Flex,
  IconButton,
} from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import currencyFormat from "@/utils/current-format";
import ModalProductDetails from "@/components/modals/ModalProductDetails";

interface ProductType {
  name: string;
  image: string;
  price: string;
}

export default function ProductBox({ name, image, price }: ProductType) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <Flex
      borderRadius={6}
      direction={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      w={{ base: "183px", sm: "14.5625rem", md: "17.5rem" }}
      // bg="yellow"
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
        px={{ base: "2", md: "4" }}
        py="2"
      >
        <Heading size="md" fontWeight="bold">
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
          w="80%"
          ml="3"
          backgroundColor="yellow.300"
          fontSize={{ base: "14px" }}
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
