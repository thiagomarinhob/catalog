"use client";
import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

import { Zoom, FreeMode, Thumbs, Navigation } from "swiper/modules";
import { useState } from "react";

interface ProductProps {
  params: {
    slug: string;
  };
}

{
  /* <h1>Product: {params.slug}</h1> */
}

export default function Products({ params }: ProductProps) {
  const [imageSelect, setImageSelect] = useState("");

  const data = [
    "https://swiperjs.com/demos/images/nature-1.jpg",
    "https://swiperjs.com/demos/images/nature-1.jpg",
    "https://swiperjs.com/demos/images/nature-1.jpg",
    "https://swiperjs.com/demos/images/nature-1.jpg",
    "https://swiperjs.com/demos/images/nature-1.jpg",
    "https://swiperjs.com/demos/images/nature-1.jpg",
    "https://swiperjs.com/demos/images/nature-1.jpg",
    "https://swiperjs.com/demos/images/nature-1.jpg",
    "https://swiperjs.com/demos/images/nature-1.jpg",
  ];

  return (
    <Flex w="100%">
      <Flex
        direction="column"
        w="100%"
        maxWidth="50%"
        p="4"
        alignItems="center"
      >
        <Image w="600px" src={imageSelect} alt="image" />
        <Flex w="100%" py="4" position="relative" alignItems="center">
          <Swiper
            spaceBetween={10}
            slidesPerView={5}
            direction="horizontal"
            height={80}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2 w-[480px]"
          >
            {data.map((item) => {
              return (
                <SwiperSlide key={item} onClick={() => setImageSelect(item)}>
                  <Image w="80px" src={item} alt="img" />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <Box
            className="swiper-button-prev swiper-button-next.swiper-button-disabled"
            left="10%"
            color="yellow.300"
          ></Box>
          <Box
            className="swiper-button-next swiper-button-prev.swiper-button-disabled"
            right="10%"
            color="yellow.300"
          ></Box>
        </Flex>
      </Flex>

      <Flex direction="column" w="100%" maxWidth="50%" bgColor="black">
        <Heading>Title Product</Heading>
        <Text>Description Product</Text>
        <Text>R$ 120.00</Text>
      </Flex>
    </Flex>
  );
}
