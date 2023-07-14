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
    <Layout>
      <Banner />
      <DevelopServices />
      <Application />
      <DigitalServices />
      <Technologies />
      <OurProcess />
      <Clients />
      <Industries />
      <Journey />
      <Message />
    </Layout>
  );
}
