import {
  Box,
  Text,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box color={useColorModeValue("gray.700", "gray.200")}>
      <Divider bg="blackAlpha.300" />
      <Text py={5} fontSize={"md"}>
        © 2024 Vista Tech Solutions. All Copyrights
      </Text>
    </Box>
  );
}
