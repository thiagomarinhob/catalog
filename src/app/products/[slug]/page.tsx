"use client";
import { Box, Flex, Heading, Text, Image, Button } from "@chakra-ui/react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "dotenv/config";

import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

import { Zoom, FreeMode, Thumbs, Navigation, Pagination } from "swiper/modules";
import { useCallback, useContext, useEffect, useState } from "react";
import currencyFormat from "@/utils/current-format";
import useMobile from "@/hooks/use-mobile";
import { CurrentOrderContext } from "@/contexts/current-order";

interface ProductProps {
  params: {
    slug: string;
  };
}

{
  /* <h1>Product: {params.slug}</h1> */
}

export default function Products({ params }: ProductProps) {
  const [imageSelect, setImageSelect] = useState<SwiperClass>();
  const [product, setProduct] = useState<any>({});
  const isMobile = useMobile();
  const { addItem } = useContext(CurrentOrderContext);
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaXZlc3RpLnZlc3RpLm1vYmkvYXBwbWFyY2EvdjIvYXV0aC9jb21wYW55L2Y3YWY4MjUwLTdiMjEtNDU3MS05ZDYwLTA5OTU1MTlmNGI0NyIsImlhdCI6MTY5NTIwMDY2NSwibmJmIjoxNjk1MjAwNjY1LCJqdGkiOiJzYjZ2dlBSTW5EQVRZSVUyIiwic3ViIjoiZTI3ODJlMTktMjBkZi00YTI4LWJhZDItZWZmNjRlMzhlZGU3IiwicHJ2IjoiMzFhOWEzZmM2NjE0YWVmMDY0ZTczYjExYzhmYzk5ODJmMDA4ZjU5MyIsImFwcCI6eyJzY2hlbWVfdXJsIjoibHVja3lqZWFucyIsImRvbWFpbl9pZCI6OTU4NTIyfSwidXNlciI6eyJpZCI6ImUyNzgyZTE5LTIwZGYtNGEyOC1iYWQyLWVmZjY0ZTM4ZWRlNyIsImRvbWFpbl9pZCI6MTA4OTA2OH19.GHCngGLsSmcmxKz37kytO3F2q8yAYEr_xBBeaJReV7k";

  const loadDetailsProduct = useCallback(async () => {
    if (token) {
      const resul = await fetch(
        `https://apivesti.vesti.mobi/appmarca/v1/products/company/f7af8250-7b21-4571-9d60-0995519f4b47/product/${params.slug}/showcase?cid=null&reseller_id=null`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const data = await resul.json();
      setProduct(data.product_group);
    }
  }, [params.slug, token]);

  useEffect(() => {
    loadDetailsProduct();
  }, [loadDetailsProduct]);

  return (
    <Flex w="100%" direction={{ base: "column", md: "row" }}>
      <Flex
        direction="column"
        w="100%"
        maxWidth={{ base: "100%", md: "50%" }}
        p="4"
        alignItems="center"
      >
        <Flex w={{ base: "100%", md: "50%" }}>
          <Swiper
            zoom={true}
            pagination={{
              clickable: true,
              bulletActiveClass:
                "swiper-pagination-bullet-active bg-yellow-300 !important",
            }}
            thumbs={{ swiper: imageSelect }}
            modules={[Zoom, Pagination, Thumbs]}
            className="mySwipe"
          >
            {product.media &&
              product.media.map((item: any) => {
                return (
                  <SwiperSlide key={item.id}>
                    <div className="swiper-zoom-container">
                      <Image maxH="35rem" src={item.zoom.url} alt="img" />
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </Flex>
        <Flex w="100%" py="4" position="relative" alignItems="center">
          <Swiper
            onSwiper={setImageSelect}
            spaceBetween={10}
            slidesPerView={4}
            centerInsufficientSlides={true}
            direction="horizontal"
            height={80}
            navigation={
              isMobile
                ? false
                : {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  }
            }
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2 w-[450px]"
          >
            {product.media &&
              product.media.map((item: any) => {
                return (
                  <SwiperSlide key={item.id}>
                    <Image
                      w="80px"
                      cursor="pointer"
                      src={item.normal.url}
                      alt="img"
                      onClick={() => setImageSelect(item.zoom.url)}
                    />
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

      <Flex
        direction="column"
        w="100%"
        maxWidth={{ base: "100%", md: "50%" }}
        p="5"
      >
        <Heading>{product.name}</Heading>
        <Text minH="35px">{product.description}</Text>
        {/* <Text>{currencyFormat(product.price)}</Text> */}
        <Button
          onClick={() => addItem(product)}
          maxWidth={{ base: "100%", md: "50%" }}
          colorScheme="yellow"
        >
          Adicionar ao Carrinho
        </Button>
      </Flex>
    </Flex>
  );
}
