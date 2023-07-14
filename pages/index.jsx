import { Layout } from "~/components";
import {
  Application,
  Banner,
  Clients,
  DevelopServices,
  DigitalServices,
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
    </Layout>
  );
}
