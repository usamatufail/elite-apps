import { Layout } from "~/components";
import { Banner, DevelopServices, DigitalServices } from "~/containers";
export default function Home() {
  return (
    <Layout>
      <Banner />
      <DevelopServices />
      <DigitalServices />
    </Layout>
  );
}
