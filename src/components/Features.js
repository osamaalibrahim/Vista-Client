import React from "react";
import { Text, Box } from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import Cards from "./Cards";
import admin from "../assets/admin.png";
import backend from "../assets/backend.png";
import email_config from "../assets/email_config.png";
import ui from "../assets/ui.png";
import ux from "../assets/ux.png";
import web_dev from "../assets/web_dev.png";
import '@fontsource/tajawal';

export default function Features() {
  const featuresList = [
    { title: "Admin Control", image: admin, arabic: "بناء لوحة التحكم" },
    { title: "Backend", image: backend, arabic: "برمجة العمليات الداخلية" },
    {
      title: "Email Configuration",
      image: email_config,
      arabic: " إعداد البريد الإلكتروني لدومين خاص",
    },
    { title: "UI Design", image: ui, arabic: "تصميم واجهة المستخدم" },
    { title: "UX Design", image: ux, arabic: "تصميم تجربة المستخدم" },
    { title: "Web Development", image: web_dev, arabic: "تطوير الويب" },
  ];

  return (
    <Box py={16}>
      <Text
        fontSize={{ base: "4xl", sm: "5xl", lg: "6xl" }}
        textAlign={"center"}
        fontWeight={600}
        pt={16}
        id="features"
        fontFamily={"Tajawal"}
      >
        من خدماتنا
      </Text>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]} // Added Autoplay module
        className="mySwiper"
        style={{ width: "100%", padding: "50px" }}
        autoplay={{ delay: 2000 }} // Adjust delay as needed
      >
        {featuresList.map((feature, key) => (
          <SwiperSlide
            key={key}
            style={{
              backgroundPosition: "center",
              backgroundSize: "cover",
              width: "300px",
              height: "400px",
            }}
          >
            <Cards
              title={feature.title}
              image={feature.image}
              arabic={feature.arabic}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
