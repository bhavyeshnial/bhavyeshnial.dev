import { Helmet } from 'react-helmet-async';

function ProjectsSEO() {
  return (
    <Helmet>
      {/* Primary SEO */}
      <title>Projects & Portfolio | Bhavyesh Nial - Full Stack Developer</title>
      <meta 
        name="description" 
        content="Explore web development projects, full-stack applications, and custom software built by Bhavyesh Nial using React, Node.js, and modern technologies." 
      />
      <link rel="canonical" href="https://bhavyeshnial.dev/projects" />

      {/* Open Graph / Social Sharing */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Projects & Portfolio | Bhavyesh Nial - Full Stack Developer" />
      <meta 
        property="og:description" 
        content="Explore web development projects, full-stack applications, and custom software built by Bhavyesh Nial using React, Node.js, and modern technologies." 
      />
      <meta property="og:url" content="https://bhavyeshnial.dev/projects" />
      <meta property="og:image" content="https://bhavyeshnial.dev/og-image.png" />
      <meta property="og:site_name" content="Bhavyesh Nial" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Projects & Portfolio | Bhavyesh Nial - Full Stack Developer" />
      <meta 
        name="twitter:description" 
        content="Explore web development projects, full-stack applications, and custom software built by Bhavyesh Nial using React, Node.js, and modern technologies." 
      />
      <meta name="twitter:image" content="https://bhavyeshnial.dev/og-image.png" />
    </Helmet>
  );
}

export default ProjectsSEO;