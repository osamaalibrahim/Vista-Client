import { Image, Box, Text } from "@chakra-ui/react";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import '@fontsource-variable/Tajawal';

import "swiper/css";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import works1 from "../assets/works1.jpg";
import works2 from "../assets/works2.jpeg";
import works3 from "../assets/works3.jpg";
import works4 from "../assets/works4.jpg";

export default function Works() {
  const worksList = [
    { src: works1, link: "https://vista.sa/p130/" },
    { src: works2, link: "https://vista.sa/p202/" },
    { src: works3, link: "https://vista.sa/p129/" },
    { src: works4, link: "https://vista.sa/p193/" },
  ];

  return (
    <Box
      bgGradient={"linear(to-b, blackAlpha.400, blackAlpha.200 ,transparent)"}
      py={16}
    >
      <Box maxW="8xl" mx={"auto"} p={16} px={{ base: 2, sm: 12, md: 17 }}>
        <Text
          fontSize={{ base: "4xl", sm: "5xl", lg: "6xl" }}
          textAlign={"center"}
          fontWeight={600}
          pt={10}
          fontFamily={"Tajawal"}
        >
          نماذج من أعمالنا
        </Text>
        <Swiper
          grabCursor={true}
          slidesPerView={"auto"}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
          style={{ width: "100%", padding: "50px" }}
          autoplay={{ delay: 2000 }}
        >
          {worksList.map((work, key) => (
            <SwiperSlide
              key={key}
              style={{
                backgroundPosition: "center",
                backgroundSize: "cover",
                width: "300px",
                height: "400px",
              }}
            >
              <Image
                rounded={"lg"}
                objectFit={"cover"}
                src={work.src}
                onClick={() => window.open(work.link, "_blank")}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}
