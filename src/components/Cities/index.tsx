import { Grid, Heading } from "@chakra-ui/react";
import City from "./City";

export default function Cities() {
  return (
    <>
      <Heading fontWeight="500" fontSize={["2xl", "4xl"]} mb="10">Cidades +100</Heading>
      <Grid templateColumns={["1fr", "1fr 1fr", "repeat(3, 1fr)", "repeat(4, 1fr)"]} gap={['20px', '45px']} alignItems="center" justifyContent="center" px={["30px", "0"]}>
        <City name="Londres" country="Reino Unido" flag="/images/londres-flag.png" image="/images/londres.png" />
        <City name="Paris" country="França" flag="/images/paris-flag.png" image="/images/paris.png" />
        <City name="Roma" country="Itália" flag="/images/roma-flag.png" image="/images/roma.png" />
        <City name="Praga" country="Rapública Tcheca" flag="/images/praga-flag.png" image="/images/praga.png" />
        <City name="Amsterdã" country="Holanda" flag="/images/amsterda-flag.png" image="/images/amsterda.png" />

      </Grid>
    </>
  )
}