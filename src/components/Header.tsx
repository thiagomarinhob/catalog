import {
  Text,
  Flex,
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  Button,
} from "@chakra-ui/react";
import Image from "next/image";
import Logo from "@/assets/6.png";
import { BsCart } from "react-icons/bs";
import { CurrentOrderContext } from "@/contexts/current-order";
import { useContext } from "react";
import ReactWhatsapp from "react-whatsapp";

export function Header() {
  const { items } = useContext(CurrentOrderContext);

  function convertProductsToText(products: any) {
    let text = "";

    for (const product of products) {
      text += `* nome: ${product.product.name} - id: ${product.product.id} \n
      `;
    }

    return text;
  }

  const message = convertProductsToText(items);

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
            fontSize="20px"
            icon={<BsCart />}
            colorScheme="yellow"
          />
        </PopoverTrigger>
        <PopoverContent h="350" bgColor="gray.900">
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>Carrinho</PopoverHeader>
          <PopoverBody overflowY="auto">
            {items.map((item: any) => {
              return (
                <Flex key={item.product.id} borderBottom={"1px"} py="3">
                  <Image
                    width={50}
                    height={40}
                    src={item.product.media.thumb.url}
                    alt="img"
                  />
                  <Flex
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    px="4"
                  >
                    <Text>{item.product.name}</Text>
                    {/* <Text>Tamanho M</Text> */}
                  </Flex>
                </Flex>
              );
            })}
          </PopoverBody>
          <PopoverFooter>
            <Button>
              <ReactWhatsapp
                number="5585992004669"
                message={message}
                element="a"
              >
                Concluir
              </ReactWhatsapp>
            </Button>
          </PopoverFooter>
        </PopoverContent>
      </Popover>
    </Flex>
  );
}
