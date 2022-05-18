import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Heading,
  Image,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Paragraph from "../components/Paragraph";
import Section from "../components/Sections";
import NextLink from "next/link";
import { BioSection, BioYear } from "../components/Bio";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <Container p={4}>
      <Box
        borderRadius={"lg"}
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        p={3}
        mb={6}
        textAlign="center"
      >
        Hello, I&apos;m a full-stack developer based in VietNam!
      </Box>
      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as={"h2"} variant="page-title">
            Hoang Dai
          </Heading>
          <p>Developer / Freehand drawing </p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            alt="Profile Image"
            src="/images/pineaple.jpeg"
          />
        </Box>
      </Box>
      {/* section1 */}
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>HoangDai is a freelance </Paragraph>
        <Box alignItems="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      {/* bio */}
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1995</BioYear>
          Born in HaiPhong, VietNam
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Worked at JamJa as Intern web developer
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Worked at VietSoftware International as Fullstack developer
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Completed the Bachelor&apos;s degree of Information Technology at
          Hanoi University of Science and Technology
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Worked at BUNBU COMPANY LIMITED as Fullstack developer
        </BioSection>
        <BioSection>
          <BioYear>2019 to present</BioYear>
          Works as a freelance
        </BioSection>
      </Section>

      {/* love */}
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art,{" "}
          <Link href="https://illust.odoruinu.net/" target="_blank">
            Drawing
          </Link>
        </Paragraph>
      </Section>
    </Container>
  );
};

export default Home;
