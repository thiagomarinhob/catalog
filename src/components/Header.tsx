import {
  Text,
  Flex,
  Input,
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
} from "@chakra-ui/react";
import Image from "next/image";
import Logo from "@/assets/6.png";
import { BsCart } from "react-icons/bs";

export function Header() {
  const img = "https://swiperjs.com/demos/images/nature-1.jpg";

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
      borderBottom="1px"
      justifyContent="space-between"
    >
      <Flex alignItems="center">
        <Image src={Logo} width={70} alt="logo" />
        <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
          Ripinna
        </Text>
      </Flex>

      <Popover>
        <PopoverTrigger>
          <IconButton
            aria-label="cart"
            icon={<BsCart />}
            colorScheme="yellow"
          />
        </PopoverTrigger>
        <PopoverContent bgColor="gray.900">
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>Carrinho</PopoverHeader>
          <PopoverBody>
            <Flex borderBottom={"1px"} py="3">
              <Image width={50} height={40} src={img} alt="img" />
              <Flex direction="column" alignItems="flex-start" px="4">
                <Text>Nome do Item</Text>
                <Text>Tamanho M</Text>
              </Flex>
            </Flex>
          </PopoverBody>
        </PopoverContent>
      </Popover>

      {/* Input de busca 
      <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxWidth={400}
        alignSelf="center"
        color="gray.200"
        position="relative"
        bg="gray.800"
        borderRadius="full"
      >
        <Input 
          color="gray.50"
          variant="unstyled"
          px="4"
          mr="4"
        />
      </Flex> */}
    </Flex>
  );
}
