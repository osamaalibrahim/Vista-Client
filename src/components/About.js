import { Stack, Text } from "@chakra-ui/react";
import '@fontsource/tajawal';

export default function About() {
  return (
    <Stack
      id="about"
      bgGradient={"linear(to-b, blackAlpha.400, blackAlpha.200 ,transparent)"}
      py={16}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={"center"}
      direction={"column"}
    >
      <Text
        fontSize={{ base: "4xl", sm: "5xl", lg: "6xl" }}
        textAlign={"center"}
        fontWeight={600}
        pt={16}
        fontFamily={"Tajawal"}
      >
        من نحن ؟
      </Text>
      <Text
        fontSize={{ base: "xl", md: "3xl" }}
        textAlign={"center"}
        maxW={"3xl"}
        fontWeight={600}
        pb={16}
        fontFamily={"Tajawal"}
      >
        فريق من الأكفّاء في مجال تقنية المعلومات والإنتاج الإبداعي، نقدم خدماتنا
        لكم على شكل منتجات تقنية متكاملة في مكوناتها، فريدة في مظهرها، متقنة في
        تنفيذها فعّالة للاستخدام
      </Text>
    </Stack>
  );
}
