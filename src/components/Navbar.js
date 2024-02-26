import React from "react";
import {
  Box,
  Flex,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  VStack,
  Button,
  Avatar,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import vista_logo from "../assets/vista_logo.png";
import ThemeToggler from "./ThemeToggler";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import '@fontsource/tajawal';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const NavBarButton = ({ link, text }) => {
    return (
      <Button
        as={Link}
        to={link}
        smooth
        mx={4}
        fontSize="xl"
        variant="ghost"
        _hover={{
          textDecoration: "none",
          bgGradient: "linear(to-r, blue.400, blue.500)",
        }}
        onClick={onClose}
        fontFamily={"Tajawal"}
      >
        {text}
      </Button>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <Box>
        <Flex
          px={4}
          py={3}
          align="center"
          justify="space-between"
          bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
        >
          <Avatar src={vista_logo} size="md" bg={"#000000"} />
          <IconButton
            display={{ base: "flex", md: "none" }}
            onClick={onOpen}
            icon={<HamburgerIcon />}
            variant="outline"
          />
          <Drawer
            placement="left"
            onClose={onClose}
            isOpen={isOpen}
            size="full"
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerBody mt="70px">
                <VStack spacing="4">
                  <NavBarButton link="hero" text="الرئيسية" />
                  <NavBarButton link="about" text="من نحن ؟" />
                  <NavBarButton link="features" text="من خدماتنا" />
                  <NavBarButton link="contact" text="تواصل معنا" />
                  <ThemeToggler />
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
          <Flex
            display={{ base: "none", md: "flex" }}
            justify="center"
            alignItems="center"
            ml="auto"
            mr="auto"
          >
            <NavBarButton link="hero" text="الرئيسية" />
            <NavBarButton link="statics" text="من نحن ؟" />
            <NavBarButton link="features" text="من خدماتنا" />
            <NavBarButton link="contact" text="تواصل معنا" />
            <ThemeToggler />
          </Flex>
        </Flex>
      </Box>
    </motion.div>
  );
};

export default Navbar;
