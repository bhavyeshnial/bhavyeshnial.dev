import { Helmet } from 'react-helmet-async';

function ContactSEO() {
  return (
    <Helmet>
      {/* Primary SEO */}
      <title>Contact Bhavyesh Nial | Full Stack Developer</title>
      <meta 
        name="description" 
        content="Get in touch with Bhavyesh Nial for web development projects, freelance work, custom applications, and business collaborations." 
      />
      <link rel="canonical" href="https://bhavyeshnial.dev/contact" />

      {/* Open Graph / Social Sharing */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Contact Bhavyesh Nial | Full Stack Developer" />
      <meta 
        property="og:description" 
        content="Get in touch with Bhavyesh Nial for web development projects, freelance work, custom applications, and business collaborations." 
      />
      <meta property="og:url" content="https://bhavyeshnial.dev/contact" />
      <meta property="og:image" content="https://bhavyeshnial.dev/og-image.png" />
      <meta property="og:site_name" content="Bhavyesh Nial" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Contact Bhavyesh Nial | Full Stack Developer" />
      <meta 
        name="twitter:description" 
        content="Get in touch with Bhavyesh Nial for web development projects, freelance work, custom applications, and business collaborations." 
      />
      <meta name="twitter:image" content="https://bhavyeshnial.dev/og-image.png" />
    </Helmet>
  );
}

export default ContactSEO;