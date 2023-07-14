import { Element } from "react-scroll";
import { Layout } from "~/components";
import {
  Application,
  Banner,
  Clients,
  DevelopServices,
  DigitalServices,
  Industries,
  Journey,
  Message,
  OurProcess,
  Technologies,
} from "~/containers";
export default function Home() {
  return (
    <Element>
      <div id="home">
        <Layout>
          <Banner />
          <Journey />
          <DevelopServices />
          <Application />
          <DigitalServices />
          <Technologies />
          <OurProcess />
          {/* <Clients /> */}
          <Industries />
          <Message />
        </Layout>
      </div>
    </Element>
  );
}
