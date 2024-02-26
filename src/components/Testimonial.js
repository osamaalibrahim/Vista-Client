import React from "react";
import { Box, Heading, Text, Stack } from "@chakra-ui/react";
import '@fontsource-variable/tajawal';

function Testimonial(props) {
  const Testimonial = (props) => {
    const { children } = props;

    return <Box p={8}>{children}</Box>;
  };

  const TestimonialContent = (props) => {
    const { children } = props;

    return (
      <Stack
        bg="blackAlpha.300"
        boxShadow={"lg"}
        p={8}
        rounded={"xl"}
        align={"center"}
        pos={"relative"}
        _after={{
          content: `""`,
          w: 0,
          h: 0,
          borderLeft: "solid transparent",
          borderLeftWidth: 16,
          borderRight: "solid transparent",
          borderRightWidth: 16,
          borderTop: "solid",
          borderTopWidth: 16,
          borderTopColor: "blackAlpha.300",
          pos: "absolute",
          bottom: "-16px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        {children}
      </Stack>
    );
  };

  const TestimonialHeading = (props) => {
    const { children } = props;

    return (
      <Heading
        fontSize={{ base: "3xl", sm: "4xl", lg: "5xl" }}
        fontFamily={"tajawal"}
      >
        {children}
      </Heading>
    );
  };

  const TestimonialText = (props) => {
    const { children } = props;

    return (
      <Text
        textAlign={"center"}
        fontSize={{ base: "xl", sm: "2xl", lg: "3xl" }}
        fontFamily={"tajawal"}
      >
        {children}
      </Text>
    );
  };

  return (
    <Testimonial>
      <TestimonialContent>
        <TestimonialHeading>{props.title}</TestimonialHeading>
        <TestimonialText>{props.text}</TestimonialText>
      </TestimonialContent>
    </Testimonial>
  );
}

export default Testimonial;
