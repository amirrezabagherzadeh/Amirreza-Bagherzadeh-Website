import { PortfolioPage } from "@/components/portfolio";
import { buildJsonLd } from "@/lib/seo";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildJsonLd()).replace(/</g, "\\u003c"),
        }}
      />
      <PortfolioPage />
    </>
  );
}
