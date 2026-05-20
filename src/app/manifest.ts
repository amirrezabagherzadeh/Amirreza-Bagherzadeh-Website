import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Amirreza Bagherzadeh Portfolio",
    short_name: "Amirreza",
    description:
      "Personal portfolio for Amirreza Bagherzadeh, Voice AI Automation Specialist in Dubai.",
    start_url: "/",
    display: "standalone",
    background_color: "#050506",
    theme_color: "#050506",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
