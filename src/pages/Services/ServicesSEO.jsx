import { Helmet } from 'react-helmet-async';

function ServicesSEO() {
  return (
    <Helmet>
      {/* Primary SEO */}
      <title>Web Development Services | Bhavyesh Nial - Full Stack Developer</title>
      <meta 
        name="description" 
        content="Explore professional web development, custom MERN stack applications, and freelance services offered by Bhavyesh Nial to grow your business." 
      />
      <link rel="canonical" href="https://bhavyeshnial.dev/services" />

      {/* Open Graph / Social Sharing */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Web Development Services | Bhavyesh Nial - Full Stack Developer" />
      <meta 
        property="og:description" 
        content="Explore professional web development, custom MERN stack applications, and freelance services offered by Bhavyesh Nial to grow your business." 
      />
      <meta property="og:url" content="https://bhavyeshnial.dev/services" />
      <meta property="og:image" content="https://bhavyeshnial.dev/og-image.png" />
      <meta property="og:site_name" content="Bhavyesh Nial" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Web Development Services | Bhavyesh Nial - Full Stack Developer" />
      <meta 
        name="twitter:description" 
        content="Explore professional web development, custom MERN stack applications, and freelance services offered by Bhavyesh Nial to grow your business." 
      />
      <meta name="twitter:image" content="https://bhavyeshnial.dev/og-image.png" />
    </Helmet>
  );
}

export default ServicesSEO;