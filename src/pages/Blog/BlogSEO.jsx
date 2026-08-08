import { Helmet } from 'react-helmet-async';

function BlogSEO() {
  return (
    <Helmet>
      {/* Primary SEO */}
      <title>Blog & Articles | Bhavyesh Nial - Full Stack Developer</title>
      <meta 
        name="description" 
        content="Read the latest articles, tutorials, and insights on web development, React, Node.js, and modern full-stack technologies by Bhavyesh Nial." 
      />
      <link rel="canonical" href="https://bhavyeshnial.dev/blog" />

      {/* Open Graph / Social Sharing */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Blog & Articles | Bhavyesh Nial - Full Stack Developer" />
      <meta 
        property="og:description" 
        content="Read the latest articles, tutorials, and insights on web development, React, Node.js, and modern full-stack technologies by Bhavyesh Nial." 
      />
      <meta property="og:url" content="https://bhavyeshnial.dev/blog" />
      <meta property="og:image" content="https://bhavyeshnial.dev/og-image.png" />
      <meta property="og:site_name" content="Bhavyesh Nial" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Blog & Articles | Bhavyesh Nial - Full Stack Developer" />
      <meta 
        name="twitter:description" 
        content="Read the latest articles, tutorials, and insights on web development, React, Node.js, and modern full-stack technologies by Bhavyesh Nial." 
      />
      <meta name="twitter:image" content="https://bhavyeshnial.dev/og-image.png" />
    </Helmet>
  );
}

export default BlogSEO;