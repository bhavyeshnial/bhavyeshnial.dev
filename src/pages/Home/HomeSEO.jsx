import { Helmet } from "react-helmet-async";

export default function HomeSEO() {
  return (
    <Helmet>
      {/* Primary SEO */}
      <title>Bhavyesh Nial | Full Stack Developer</title>
      <meta name="application-name" content="Bhavyesh Nial" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Bhavyesh Nial - Full Stack Developer" />
      <meta
        name="description"
        content="Bhavyesh Nial — Full Stack Developer crafting responsive, scalable web apps & custom websites for startups & businesses. Let's build your project!"
      />
      <meta name="author" content="Bhavyesh Nial" />
      <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
      <link rel="canonical" href="https://bhavyeshnial.dev/" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Bhavyesh Nial | Full Stack Developer" />
      <meta
  property="og:description"
  content="Bhavyesh Nial — Full Stack Developer crafting responsive, scalable web apps & custom websites for startups & businesses. Let's build your project."
/>
      <meta property="og:url" content="https://bhavyeshnial.dev/" />
      <meta property="og:image" content="https://bhavyeshnial.dev/og-image.png" />
      <meta property="og:site_name" content="Bhavyesh Nial" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image:alt" content="Bhavyesh Nial - Full Stack Developer" />
      <meta name="twitter:title" content="Bhavyesh Nial | Full Stack Developer" />
      <meta
        name="twitter:description"
        content="Custom website design and scalable web applications for businesses and startups. Connect with Bhavyesh Nial to start your project."
      />
      <meta name="twitter:image" content="https://bhavyeshnial.dev/og-image.png" />

<script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://bhavyeshnial.dev/#website",
        "url": "https://bhavyeshnial.dev/",
        "name": "Bhavyesh Nial",
        "description": "Portfolio of Bhavyesh Nial - Full Stack Developer.",
        "inLanguage": "en-IN",
        "publisher": {
          "@id": "https://bhavyeshnial.dev/#person"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://bhavyeshnial.dev/#webpage",
        "url": "https://bhavyeshnial.dev/",
        "name": "Bhavyesh Nial | Full Stack Developer",
        "isPartOf": {
          "@id": "https://bhavyeshnial.dev/#website"
        },
        "about": {
          "@id": "https://bhavyeshnial.dev/#person"
        },
        "inLanguage": "en-IN"
      },
      {
        "@type": "Person",
        "@id": "https://bhavyeshnial.dev/#person",
        "name": "Bhavyesh Nial",
        "jobTitle": "Full Stack Developer",
        "url": "https://bhavyeshnial.dev/",
        "image": "https://bhavyeshnial.dev/assets/images/bhavyesh-nial.webp",
        "email": "mailto:hire@bhavyeshnial.dev",
        "mainEntityOfPage": {
          "@id": "https://bhavyeshnial.dev/#webpage"
        },
        "sameAs": [
          "https://github.com/bhavyeshnial",
          "https://www.linkedin.com/in/bhavyeshnial",
          "https://twitter.com/bhavyeshnial",
          "https://www.instagram.com/bhavyeshnial"
        ],
        "knowsAbout": [
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
          "Website Development"
        ]
      },
      {
        "@type": "Service",
        "@id": "https://bhavyeshnial.dev/#service",
        "name": "Website and Web Application Development",
        "serviceType": [
          "Website Development",
          "Web Application Development",
          "Full Stack Development",
          "MERN Stack Development",
          "React Development"
        ],
        "provider": {
          "@id": "https://bhavyeshnial.dev/#person"
        },
        "url": "https://bhavyeshnial.dev/"
      }
    ]
  })}
</script>

    </Helmet>
  );
}