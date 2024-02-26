import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import hero_no_bg from "../assets/hero_no_bg.png";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import '@fontsource/tajawal';

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <Flex
        id="hero"
        w={"full"}
        h={"100vh"}
        backgroundImage={hero_no_bg}
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
      >
        <VStack
          w={"full"}
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
        >
          <Stack maxW={"2xl"} align={"center"} spacing={6}>
            <Text
              color={"white"}
              fontWeight={900}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "3xl", md: "5xl" })}
              fontFamily={"Tajawal"}
            >
              الحل التقني على مقربة من ناظريك
            </Text>
            <Text
              color={"white"}
              fontWeight={900}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "xl", md: "2xl" })}
              fontFamily={"Tajawal"}
            >
              نعمل بشغف لتحويل طموحاتك إلى واقع
            </Text>

            <Button
              as={Link}
              bgGradient="linear(to-r, blue.400, blue.500)"
              rounded={"full"}
              color={"white"}
              size={"lg"}
              _hover={{ bg: "blue.700" }}
              to="partners"
              smooth
              fontFamily={"serif"}
            >
              تعرف علينا
            </Button>
          </Stack>
        </VStack>
      </Flex>
    </motion.div>
  );
}
