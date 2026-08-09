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
        content="Custom website design and scalable web applications for businesses and startups. Connect with Bhavyesh Nial to start your project."
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

      {/* Structured Data: WebSite */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": "https://bhavyeshnial.dev/#website",
          "url": "https://bhavyeshnial.dev/",
          "name": "Bhavyesh Nial",
          "alternateName": "Bhavyesh Nial",
          "description": "Portfolio of Bhavyesh Nial - Full Stack Developer.",
          "inLanguage": "en-IN",
          "image": "https://bhavyeshnial.dev/og-image.png",
          "publisher": { "@id": "https://bhavyeshnial.dev/#organization" }
        })}
      </script>

      {/* Structured Data: Organization */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": "https://bhavyeshnial.dev/#organization",
          "name": "Bhavyesh Nial",
          "url": "https://bhavyeshnial.dev/",
          "logo": "https://bhavyeshnial.dev/logo.png",
          "image": "https://bhavyeshnial.dev/og-image.png",
          "sameAs": [
            "https://github.com/bhavyeshnial",
            "https://www.linkedin.com/in/bhavyeshnial",
            "https://twitter.com/bhavyeshnial",
            "https://www.instagram.com/bhavyeshnial"
          ]
        })}
      </script>

      {/* Structured Data: Person */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "@id": "https://bhavyeshnial.dev/#person",
          "name": "Bhavyesh Nial",
          "jobTitle": "Full Stack Developer",
          "url": "https://bhavyeshnial.dev/",
          "image": "https://bhavyeshnial.dev/assets/images/bhavyesh-nial.webp",
          "email": "mailto:hire@bhavyeshnial.dev",
          "nationality": { "@type": "Country", "name": "India" },
          "mainEntityOfPage": { "@id": "https://bhavyeshnial.dev/#website" },
          "worksFor": { "@id": "https://bhavyeshnial.dev/#organization" },
          "hasOccupation": { "@type": "Occupation", "name": "Full Stack Developer" },
          "sameAs": [
            "https://github.com/bhavyeshnial",
            "https://www.linkedin.com/in/bhavyeshnial",
            "https://twitter.com/bhavyeshnial",
            "https://www.instagram.com/bhavyeshnial"
          ],
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Bhawanipatna",
            "addressRegion": "Odisha",
            "addressCountry": "IN"
          },
          "knowsAbout": [
            "Full Stack Development", "MERN Stack", "React", "Node.js", "Express.js",
            "MongoDB", "PHP", "JavaScript", "HTML", "CSS", "Responsive Web Design",
            "SEO", "E-commerce Website Development", "Website Development"
          ]
        })}
      </script>

      {/* Structured Data: ProfessionalService */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": "https://bhavyeshnial.dev/#service",
          "name": "Bhavyesh Nial",
          "url": "https://bhavyeshnial.dev/",
          "image": "https://bhavyeshnial.dev/og-image.png",
          "logo": "https://bhavyeshnial.dev/logo.png",
          "description": "Full Stack Developer providing custom website and web application development services.",
          "telephone": "+9191XX 222 929",
          "founder": { "@id": "https://bhavyeshnial.dev/#person" },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+9191XX 222 929",
            "contactType": "customer service",
            "email": "mailto:hire@bhavyeshnial.dev",
            "availableLanguage": ["English", "Hindi"]
          },
          "makesOffer": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Development", "serviceType": "Website Development", "provider": { "@id": "https://bhavyeshnial.dev/#service" } } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Web Application Development", "serviceType": "Web Application Development", "provider": { "@id": "https://bhavyeshnial.dev/#service" } } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Full Stack Development", "serviceType": "Full Stack Development", "provider": { "@id": "https://bhavyeshnial.dev/#service" } } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "MERN Stack Development", "serviceType": "MERN Stack Development", "provider": { "@id": "https://bhavyeshnial.dev/#service" } } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "React Development", "serviceType": "React Development", "provider": { "@id": "https://bhavyeshnial.dev/#service" } } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "PHP Development", "serviceType": "PHP Development", "provider": { "@id": "https://bhavyeshnial.dev/#service" } } }
          ],
          "areaServed": [
            { "@type": "City", "name": "Majursahi" },
            { "@type": "City", "name": "Bhawanipatna" },
            { "@type": "City", "name": "Junagarh" },
            { "@type": "City", "name": "Dharmagarh" },
            { "@type": "City", "name": "Lanjigarh" },
            { "@type": "City", "name": "Narla" },
            { "@type": "City", "name": "Koksara" },
            { "@type": "City", "name": "Kesinga" },
            { "@type": "State", "name": "Odisha" },
            { "@type": "Country", "name": "India" }
          ]
        })}
      </script>

      {/* Structured Data: Breadcrumb */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bhavyeshnial.dev/" }
          ]
        })}
      </script>
    </Helmet>
  );
}