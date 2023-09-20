'use client'
import Image, { StaticImageData } from 'next/image';
import Banner from '@/assets/Banner Site Black Friday moderno preto e rosa.png'
import { Flex } from "@chakra-ui/react";
import useMobile from "@/hooks/use-mobile";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css'
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation, Autoplay } from 'swiper/modules';

interface DataBannerType {
  id: number
  url: StaticImageData
}

export default function BannerHome() {
  const isMobile = useMobile()

  const data: DataBannerType[] = [
    {
      id: 1,
      url: Banner,
    },
    {
      id: 2,
      url: Banner,
    },
    {
      id: 3,
      url: Banner,
    },
    {
      id: 4,
      url: Banner,
    }
  ]

  return isMobile ? <></> : (
    <Flex>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper w-full max-w-[1024px] max-h-[800]"
      >
        {data.map(item => {
          return (
            <SwiperSlide
              key={item.id}
              className=''
            >
              <Image src={item.url} width={1024} alt="img" />
            </SwiperSlide>
          )
        })}
       
      </Swiper>
    </Flex>
  )
}