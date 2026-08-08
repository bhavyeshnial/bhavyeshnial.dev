import { Helmet } from 'react-helmet-async';

function StartProjectSEO() {
  return (
    <Helmet>
      {/* Primary SEO */}
      <title>Start a Project | Hire Bhavyesh Nial - Full Stack Developer</title>
      <meta 
        name="description" 
        content="Ready to build your next web app or custom website? Fill out the project form and let's work together with Bhavyesh Nial." 
      />
      <link rel="canonical" href="https://bhavyeshnial.dev/start-project" />

      {/* Open Graph / Social Sharing */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Start a Project | Hire Bhavyesh Nial - Full Stack Developer" />
      <meta 
        property="og:description" 
        content="Ready to build your next web app or custom website? Fill out the project form and let's work together with Bhavyesh Nial." 
      />
      <meta property="og:url" content="https://bhavyeshnial.dev/start-project" />
      <meta property="og:image" content="https://bhavyeshnial.dev/og-image.png" />
      <meta property="og:site_name" content="Bhavyesh Nial" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Start a Project | Hire Bhavyesh Nial - Full Stack Developer" />
      <meta 
        name="twitter:description" 
        content="Ready to build your next web app or custom website? Fill out the project form and let's work together with Bhavyesh Nial." 
      />
      <meta name="twitter:image" content="https://bhavyeshnial.dev/og-image.png" />
    </Helmet>
  );
}

export default StartProjectSEO;