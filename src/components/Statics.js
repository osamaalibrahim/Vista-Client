import {
  Box,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { BsPerson } from "react-icons/bs";
import { FiServer } from "react-icons/fi";
import { AiOutlineDesktop } from "react-icons/ai";
import Partners from "./Partners";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import '@fontsource-variable/tajawal';

function Number({ n }) {
  const { ref, inView } = useInView({triggerOnce:true}); // Set triggerOnce to true to trigger animation only once

  const { number } = useSpring({
    from: { number: 0 },
    to: { number: inView ? n : 0 }, // Animate to 'n' only when inView is true
    delay: 500,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  return (
    <animated.div ref={ref} style={{ fontSize: "30px", fontWeight: "bold" }}>
      {number.to((n) => n.toFixed(0))}
    </animated.div>
  );
}

function StatsCard(props) {
  const { title, stat, icon } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={useColorModeValue("gray.800", "gray.500")}
      rounded={"lg"}
    >
      <Flex justifyContent={"center"}>
        <Box pl={{ base: 2, md: 4 }}>
          <HStack justifyContent={"center"}>
            <AddIcon />
            <StatNumber as={Number} n={stat} />
          </HStack>
          <StatLabel
            fontWeight={"medium"}
            fontSize={"2xl"}
            fontFamily={"tajawal"}
            isTruncated
          >
            {title}
          </StatLabel>
        </Box>
        <Box
          my={"auto"}
          color={useColorModeValue("gray.800", "gray.200")}
          alignContent={"center"}
        >
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

export default function Statics() {
  return (
    <Box
      bgGradient={"linear(to-b, blackAlpha.400, blackAlpha.200 ,transparent)"}
      pb={16}
    >
      <Partners />
      <Box
        id="statics"
        maxW="7xl"
        mx={"auto"}
        pt={10}
        pb={16}
        px={{ base: 2, sm: 12, md: 17 }}
      >
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          spacing={{ base: 5, lg: 8 }}
          pb={10}
        >
          <StatsCard
            title={"موقع مستضاف"}
            stat={30}
            icon={<AiOutlineDesktop size={"3em"} />}
          />
          <StatsCard
            title={"مشروع منفذ"}
            stat={140}
            icon={<FiServer size={"3em"} />}
          />
          <StatsCard
            title={"عميل"}
            stat={60}
            icon={<BsPerson size={"3em"} />}
          />
        </SimpleGrid>
      </Box>
    </Box>
  );
}
