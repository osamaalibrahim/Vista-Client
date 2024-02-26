import { Image, Box, Text } from "@chakra-ui/react";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import '@fontsource-variable/Tajawal';

import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import partner1 from "../assets/partner1.png";
import partner2 from "../assets/partner2.png";
import partner3 from "../assets/partner3.png";
import partner4 from "../assets/partner4.png";

function Partners() {
  const partnerList = [
    { src: partner1 },
    { src: partner2 },
    { src: partner3 },
    { src: partner4 },
    { src: partner1 },
    { src: partner2 },
    { src: partner3 },
    { src: partner4 },
  ];

  return (
    <Box
      maxW="8xl"
      mx={"auto"}
      pt={16}
      px={{ base: 2, sm: 12, md: 17 }}
      id="partners"
    >
      <Text
        fontSize={{ base: "4xl", sm: "5xl", lg: "6xl" }}
        textAlign={"center"}
        fontWeight={600}
        pt={16}
        fontFamily={"Tajawal"}
      >
        شركاء النجاح
      </Text>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
        style={{ width: "100%", padding: "50px" }}
        autoplay={{ delay: 1000 }}
      >
        {partnerList.map((work, key) => (
          <SwiperSlide
            key={key}
            style={{
              backgroundPosition: "center",
              backgroundSize: "cover",
              width: "300px",
              height: "200px",
            }}
          >
            <Image rounded={"lg"} objectFit={"cover"} src={work.src} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default Partners;
