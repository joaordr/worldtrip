import { Flex } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Cities from "../../components/Cities";
import Content from "../../components/Content";
import ContinentBanner from "../../components/ContinentBanner";
import Header from "../../components/Header";

import { useRouter } from "next/dist/client/router";
import Loading from "../../components/Loading";

export interface ContinentProps {
  continent: {
    slug: string;
    title: string;
    description: string;
    banner_image: string;
    countries: number;
    languages: number;
    cities: number;
    cities_list: string;
    cities100: {
      city: string;
      country: string;
      thumbnail: string;
      flag: string;
    }[]
  }
}

export default function Continent() {
  const router = useRouter();
  if (router.isFallback) {
    return <Loading />
  }

  return (
    <Flex direction="column">
      <Head>
        <title>WorldTrip - Europa</title>
      </Head>

      <Header />
      <ContinentBanner />

      <Flex direction="column" maxW="1160px" mx="auto" mb="10" px="1rem">
        <Content />
        <Cities />
      </Flex>
    </Flex>
  )
}
