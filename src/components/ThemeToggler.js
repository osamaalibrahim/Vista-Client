import React from "react";
import { useColorMode, Box, IconButton } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

export default function ThemeToggler() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <motion.div
      animate={{ rotate: [0, 360, 360, 0] }}
      transition={{ duration: 2 }}
    >
      <Box textAlign="center">
        <IconButton
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
          variant="ghost"
          size={["md", "lg"]}
          _hover={{ bgGradient: "linear(to-r, blue.400, blue.500)" }}
        />
      </Box>
    </motion.div>
  );
}
