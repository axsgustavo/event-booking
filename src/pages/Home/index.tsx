import { Helmet } from "react-helmet";

import { Header } from "../../components/Header";
import { Filter } from "../../components/Filter";
import { EventCalendar } from "../../components/EventCalendar";
import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <Helmet>
        <title>Home | EventBooking</title>
      </Helmet>
      <Header />
      <Filter />
      <EventCalendar />
    </Container>
  );
}