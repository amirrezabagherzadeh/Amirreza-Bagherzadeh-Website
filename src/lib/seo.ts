import {
  certifications,
  education,
  experiences,
  profile,
  projects,
  skillGroups,
  testimonials,
} from "@/data/profile";

export const siteUrl = "https://amirreza-bagherzadeh-website.vercel.app";

export const seo = {
  title:
    "Amirreza Bagherzadeh | Voice AI Automation Specialist in Dubai",
  description:
    "Official portfolio of Amirreza Bagherzadeh, Head of Technology Department at Dubai Elite Investments By Al Maktoum. Explore Voice AI Receptionist systems, AI automation, web design, digital marketing, credentials, and contact details.",
  keywords: [
    "Amirreza Bagherzadeh",
    "Amirreza Bagherzadeh Dubai",
    "Voice AI Automation Specialist",
    "Voice AI Receptionist Dubai",
    "AI Automation Engineer",
    "Dubai Elite Investments By Al Maktoum",
    "n8n automation",
    "LLM workflows",
    "digital marketing manager",
    "web designer Dubai",
    "AI automation for businesses",
  ],
  image: `${siteUrl}/visuals/hero-image2.png`,
};

const skillNames = skillGroups.flatMap((group) => group.skills);

export const answerQuestions = [
  {
    question: "Who is Amirreza Bagherzadeh?",
    answer: `${profile.name} is ${profile.headline} based in ${profile.location}.`,
  },
  {
    question: "What does Amirreza Bagherzadeh specialize in?",
    answer:
      "He specializes in practical AI automation, Voice AI Receptionist systems, web design, digital marketing, n8n workflows, and LLM-based business automation.",
  },
  {
    question: "How can businesses contact Amirreza Bagherzadeh?",
    answer: `Businesses can contact Amirreza Bagherzadeh by email at ${profile.email} or through his LinkedIn profile.`,
  },
];

export function buildJsonLd() {
  const sameAs = [profile.linkedin, profile.website].filter(Boolean);
  const currentRole = experiences[0];

  return [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: profile.name,
      url: siteUrl,
      image: profile.profileImage,
      jobTitle: profile.headline,
      email: `mailto:${profile.email}`,
      description: profile.summary,
      sameAs,
      knowsAbout: skillNames,
      knowsLanguage: profile.languages.map((language) => ({
        "@type": "Language",
        name: language.name,
      })),
      alumniOf: education.map((item) => ({
        "@type": "CollegeOrUniversity",
        name: item.school,
      })),
      worksFor: {
        "@type": "Organization",
        name: currentRole.company,
      },
      hasCredential: certifications.map((item) => ({
        "@type": "EducationalOccupationalCredential",
        name: item.name,
        credentialCategory: "Certificate",
        recognizedBy: {
          "@type": "Organization",
          name: item.issuer,
        },
        url: item.url,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: `${profile.name} Portfolio`,
      description: seo.description,
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
      inLanguage: "en",
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profile-page`,
      url: siteUrl,
      name: seo.title,
      description: seo.description,
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: seo.image,
      },
      mainEntity: {
        "@id": `${siteUrl}/#person`,
      },
      about: [
        "Voice AI Receptionist systems",
        "AI automation",
        "Digital marketing",
        "Web design",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "@id": `${siteUrl}/#projects`,
      name: "Selected projects by Amirreza Bagherzadeh",
      itemListElement: projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "CreativeWork",
          name: project.name,
          description: project.description,
          creator: {
            "@id": `${siteUrl}/#person`,
          },
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: answerQuestions.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "Review",
      "@id": `${siteUrl}/#recommendations`,
      itemReviewed: {
        "@id": `${siteUrl}/#person`,
      },
      reviewBody: testimonials[0]?.quote,
      author: {
        "@type": "Person",
        name: testimonials[0]?.person,
      },
    },
  ];
}
