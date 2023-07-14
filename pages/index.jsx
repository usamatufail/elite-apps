import { Element } from "react-scroll";
import { Layout } from "~/components";
import {
  Application,
  Banner,
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
          <Industries />
          <Message />
        </Layout>
      </div>
    </Element>
  );
}
