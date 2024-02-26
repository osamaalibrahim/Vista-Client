import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useColorMode,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdOutlineEmail,
  MdWhatsapp,
} from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import Testimonial from "./Testimonial";
import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import '@fontsource/tajawal';

function infoButton({ text, link, icon }) {
  return (
    <Button
      size="md"
      height="48px"
      width="200px"
      variant="ghost"
      _hover={{ border: "2px solid #1C6FEB" }}
      rightIcon={icon}
      onClick={() => window.open(link, "_blank")}
    >
      {text}
    </Button>
  );
}

function sochalMediaButton({ label, link, icon }) {
  return (
    <IconButton
      aria-label={label}
      variant="ghost"
      size="lg"
      isRound={true}
      _hover={{ bg: "#0D74FF" }}
      icon={icon}
      onClick={() => window.open(link, "_blank")}
    />
  );
}

export default function Contact() {
  const api = process.env.REACT_APP_API_URL||"https://vista-app-api.onrender.com";
  const { colorMode } = useColorMode();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    await sendMessage({ name, email, text });
  };

  const sendMessage = async ({ name, email, text }) => {
    axios
      .post(`${api}/message`, {
        name,
        email,
        text,
      })
      .then((response) => {
        toast.success("تم الإرسال، نرجوا مراجعة الايميل. شكرا لك");
        setName("");
        setEmail("");
        setText("");
      })
      .catch((error) => {
        toast.error("خطأ في إرسال الرسالة");
        setName("");
        setEmail("");
        setText("");
      });
  };

  return (
    <Container
      maxW="full"
      mt={0}
      centerContent
      overflow="hidden"
      id="contact"
      py={16}
    >
      <Testimonial
        title="نسعد بخدمتك"
        text="نعمل بشغف على تطوير وتحقيق أحلامكم لتصبح واقعاً وقصة نجاح"
      />
      <Flex>
        <Box
          bg="blackAlpha.300"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={10}>
            <Wrap spacing={{ base: 10, sm: 3, md: 5, lg: 20 }}>
              <WrapItem mx={10}>
                <Box>
                  <Heading
                    fontSize={{ base: "3xl", sm: "4xl", lg: "5xl" }}
                    fontFamily={"Tajawal"}
                  >
                    تواصل معنا
                  </Heading>
                  <Text
                    mt={{ sm: 3, md: 3, lg: 5 }}
                    fontSize={{ base: "xl", sm: "2xl", lg: "3xl" }}
                    fontFamily={"Tajawal"}
                  >
                    الرجاء تعبئة هذا النموذج للتواصل معنا
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} justifyContent={"center"}>
                      {infoButton({
                        text: "5838 700 53 966+",
                        link: "tel:+966537005838",
                        icon: <MdPhone size="20px" />,
                      })}
                      {infoButton({
                        text: "info@vista.sa",
                        link: "mailto:info@vista.sa",
                        icon: <MdEmail size="20px" />,
                      })}
                      {infoButton({
                        text: "السعودية - الرياض",
                        link: "https://goo.gl/maps/N4mZwuKpy2nrzHZBA",
                        icon: <MdLocationOn size="20px" />,
                      })}

                      <HStack spacing={5} px={10} alignItems="flex-start">
                        {sochalMediaButton({
                          label: "whatsapp",
                          link: "https://wa.me/+966537005838",
                          icon: <MdWhatsapp size="28px" />,
                        })}
                        {sochalMediaButton({
                          label: "linkedin",
                          link: "https://www.linkedin.com/company/84556461",
                          icon: <AiFillLinkedin size="28px" />,
                        })}
                      </HStack>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box borderRadius="lg">
                  <Box m={8}>
                    <form onSubmit={handleSubmit}>
                      <VStack spacing={5}>
                        <FormControl id="name" isRequired>
                          <FormLabel>الاسم</FormLabel>
                          <InputGroup
                            borderColor={
                              colorMode === "light" ? "black" : "white"
                            }
                          >
                            <InputLeftElement>
                              <BsPerson />
                            </InputLeftElement>
                            <Input
                              type="text"
                              size="md"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              onInvalid={(F) =>
                                F.target.setCustomValidity("الرجاء إدخال الاسم")
                              }
                              onInput={(F) => F.target.setCustomValidity("")}
                            />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="email" isRequired>
                          <FormLabel>البريد الالكتروني</FormLabel>
                          <InputGroup
                            borderColor={
                              colorMode === "light" ? "black" : "white"
                            }
                          >
                            <InputLeftElement>
                              <MdOutlineEmail />
                            </InputLeftElement>
                            <Input
                              type="email"
                              size="md"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              onInvalid={(F) =>
                                F.target.setCustomValidity(
                                  "الرجاء إدخال ايميل صحيح"
                                )
                              }
                              onInput={(F) => F.target.setCustomValidity("")}
                            />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="text" isRequired>
                          <FormLabel>الرسالة</FormLabel>
                          <Textarea
                            borderColor={
                              colorMode === "light" ? "black" : "white"
                            }
                            _hover={{
                              borderRadius: "gray.300",
                            }}
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            onInvalid={(F) =>
                              F.target.setCustomValidity("الرجاء كتابة الرسالة")
                            }
                            onInput={(F) => F.target.setCustomValidity("")}
                          />
                        </FormControl>
                        <Button
                          type="submit"
                          variant="solid"
                          bgGradient="linear(to-r, blue.400, blue.500)"
                          _hover={{ bg: "blue.700" }}
                          color="white"
                        >
                          ارسال
                        </Button>
                      </VStack>
                    </form>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
      <Toaster />
    </Container>
  );
}
