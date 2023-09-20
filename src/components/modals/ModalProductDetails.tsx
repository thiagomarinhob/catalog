import {
  Modal,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Image,
} from "@chakra-ui/react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  // product: string;
}

type ProductType = {};

export default function ModalProductDetails({ isOpen, onClose }: ModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent w="800px">
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody w="800px">
          <Image src="" alt="" />
        </ModalBody>

        <ModalFooter>
          <Button
            variant="solid"
            _hover={{
              bgColor: "yellow.400",
            }}
            w="40%"
            ml="3"
            backgroundColor="yellow.300"
            onClick={onClose}
          >
            Fechar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
