
import { Helmet } from "react-helmet-async";

const SITE_URL = "https://bhavyeshnial.dev";
const SITE_NAME = "Bhavyesh Nial";

const PAGE_TITLE = "Bhavyesh Nial | Full Stack Developer";

const DESCRIPTION =
  "Bhavyesh Nial is a Full Stack Developer specializing in responsive websites, scalable web applications, React, Node.js, and custom web solutions for businesses and startups.";

const OG_IMAGE = `${SITE_URL}/og-image.png`;
const PROFILE_IMAGE = `${SITE_URL}/assets/images/bhavyesh-nial.webp`;

const SOCIAL_LINKS = [
  "https://github.com/bhavyeshnial",
  "https://www.linkedin.com/in/bhavyeshnial",
  "https://twitter.com/bhavyeshnial",
  "https://www.instagram.com/bhavyeshnial",
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
  {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: SITE_NAME,
  alternateName: "Bhavyesh",
  description: DESCRIPTION,
  inLanguage: "en-IN",
  publisher: {
    "@id": `${SITE_URL}/#person`,
  },
},
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: `${SITE_URL}/`,
      name: PAGE_TITLE,
      description: DESCRIPTION,
      isPartOf: {
        "@id": `${SITE_URL}/#website`,
      },
      about: {
        "@id": `${SITE_URL}/#person`,
      },
      inLanguage: "en-IN",
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      image: PROFILE_IMAGE,
      jobTitle: "Full Stack Developer",
      email: "hire@bhavyeshnial.dev",
      nationality: {
        "@type": "Country",
        name: "India",
      },
      mainEntityOfPage: {
        "@id": `${SITE_URL}/#webpage`,
      },
      sameAs: SOCIAL_LINKS,
      knowsAbout: [
        "Full Stack Development",
        "MERN Stack",
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "PHP",
        "JavaScript",
        "HTML",
        "CSS",
        "Responsive Web Design",
        "SEO",
        "E-commerce Website Development",
        "Website Development",
        "Web Application Development",
      ],
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#website-development`,
      name: "Website Development",
      serviceType: "Custom Website Development",
      description:
        "Custom, responsive and scalable website development for businesses and startups.",
      provider: {
        "@id": `${SITE_URL}/#person`,
      },
      areaServed: {
        "@type": "Country",
        name: "India",
      },
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#web-application-development`,
      name: "Web Application Development",
      serviceType: "Full Stack Web Application Development",
      description:
        "Modern and scalable web application development using React, Node.js and other web technologies.",
      provider: {
        "@id": `${SITE_URL}/#person`,
      },
      areaServed: {
        "@type": "Country",
        name: "India",
      },
    },
  ],
};

export default function HomeSEO() {
  return (
    <Helmet>
      {/* Primary SEO */}
      <title>{PAGE_TITLE}</title>

      <meta name="description" content={DESCRIPTION} />

      <meta name="author" content={SITE_NAME} />

      <meta name="application-name" content={SITE_NAME} />

      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />

      <link rel="canonical" href={`${SITE_URL}/`} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />

      <meta property="og:site_name" content={SITE_NAME} />

      <meta property="og:title" content={PAGE_TITLE} />

      <meta property="og:description" content={DESCRIPTION} />

      <meta property="og:url" content={`${SITE_URL}/`} />

      <meta property="og:locale" content="en_IN" />

      <meta property="og:image" content={OG_IMAGE} />

      <meta property="og:image:secure_url" content={OG_IMAGE} />

      <meta property="og:image:type" content="image/png" />

      <meta property="og:image:width" content="1200" />

      <meta property="og:image:height" content="630" />

      <meta
        property="og:image:alt"
        content="Bhavyesh Nial - Full Stack Developer"
      />

      {/* Twitter / X Card */}
      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:title" content={PAGE_TITLE} />

      <meta name="twitter:description" content={DESCRIPTION} />

      <meta name="twitter:image" content={OG_IMAGE} />

      <meta
        name="twitter:image:alt"
        content="Bhavyesh Nial - Full Stack Developer"
      />

      {/* Structured Data - JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}
