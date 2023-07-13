import { Layout } from "~/components";
import {
  Application,
  Banner,
  DevelopServices,
  DigitalServices,
  OurProcess,
} from "~/containers";
export default function Home() {
  return (
    <Layout>
      <Banner />
      <DevelopServices />
      <Application />
      <DigitalServices />
      <OurProcess />
    </Layout>
  );
}
