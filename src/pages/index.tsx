import { PageProps, graphql } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";
import Contact from "../components/section-contact";
import HowSection from "../components/section-how";
import LandingSection from "../components/section-landing";
import NewsSection from "../components/section-news";

export interface IndexSubpageProps {
  indexData: {
    slogan: string;
    sloganDescription: string;
    sloganButtonText: string;
  };
}

const IndexPage: React.FC<PageProps<any>> = ({ data }) => {
  const frontmatter = data.allMarkdownRemark.nodes[0].frontmatter;

  return (
    <Layout>
      <LandingSection indexData={frontmatter}></LandingSection>
      <NewsSection></NewsSection>
      <HowSection></HowSection>
      <div className="h-32 w-full bg-secondary"></div>
      <Contact></Contact>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <title>Baletní kurzy pro dospělé</title>
    <html lang="en" className="scroll-p-24 scroll-smooth" />
  </>
);

export const pageQuery = graphql`
  query MyQuery {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/index.md/i" } }) {
      nodes {
        frontmatter {
          slogan
          sloganDescription
          sloganButtonText
        }
      }
    }
  }
`;
