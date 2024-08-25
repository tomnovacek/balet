import * as React from "react";
import Layout from "../components/layout";
import { OnlyTextSection } from "../components/section-only-text";

const props: React.ComponentProps<typeof OnlyTextSection> = {
  title: "Geschafft!",
  textAlign: "center",
  textParts: [
    {
      text: "Vaše zpráva byla odeslána. Ozveme se Vám, jak nedříve budeme moct",
      type: "text",
    },
    {
      type: "space",
    },
    {
      text: "Zpět",
      type: "routeButton",
      path: "/",
    },
  ],
};

const PrivacyPage: React.FC = () => {
  return (
    <Layout>
      <OnlyTextSection {...props}></OnlyTextSection>
    </Layout>
  );
};

export default PrivacyPage;

export const Head = () => (
  <>
    <title>Odeslání dotazu</title>
    <html lang="en" className="scroll-p-24 scroll-smooth" />
  </>
);
