import { Helmet } from 'react-helmet-async';

function AboutSEO() {
  return (
    <Helmet>
      {/* Primary SEO */}
      <title>About Bhavyesh Nial | Full Stack Developer</title>
      <meta 
        name="description" 
        content="Learn more about Bhavyesh Nial, a Full Stack Developer crafting responsive, scalable web applications and custom websites for clients and businesses." 
      />
      <link rel="canonical" href="https://bhavyeshnial.dev/about" />

      {/* Open Graph / Social Sharing */}
      <meta property="og:type" content="profile" />
      <meta property="og:title" content="About Bhavyesh Nial | Full Stack Developer" />
      <meta 
        property="og:description" 
        content="Learn more about Bhavyesh Nial, a Full Stack Developer crafting responsive, scalable web applications and custom websites for clients and businesses." 
      />
      <meta property="og:url" content="https://bhavyeshnial.dev/about" />
      <meta property="og:image" content="https://bhavyeshnial.dev/og-image.png" />
      <meta property="og:site_name" content="Bhavyesh Nial" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="About Bhavyesh Nial | Full Stack Developer" />
      <meta 
        name="twitter:description" 
        content="Learn more about Bhavyesh Nial, a Full Stack Developer crafting responsive, scalable web applications and custom websites for clients and businesses." 
      />
      <meta name="twitter:image" content="https://bhavyeshnial.dev/og-image.png" />
    </Helmet>
  );
}

export default AboutSEO;