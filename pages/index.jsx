import { Layout } from "~/components";
import { Banner, DevelopServices } from "~/containers";
export default function Home() {
  return (
    <Layout>
      <Banner />
      <DevelopServices />
    </Layout>
  );
}
