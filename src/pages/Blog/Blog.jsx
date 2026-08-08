import BlogSEO from './BlogSEO';

function Blog() {
  return (
    <>
      {/* SEO Tags imported here */}
      <BlogSEO />

      {/* Main Page Content */}
      <main style={{ padding: "50px", textAlign: "center" }}>
        <h1>Blog Page</h1>
        {/* Aap yahan apne blogs ya articles ki list dikha sakte hain */}
      </main>
    </>
  );
}

export default Blog;