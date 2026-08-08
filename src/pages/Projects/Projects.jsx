import ProjectsSEO from './ProjectsSEO';

function Projects() {
  return (
    <>
      {/* SEO Tags imported here */}
      <ProjectsSEO />

      {/* Main Page Content */}
      <main style={{ padding: "50px", textAlign: "center" }}>
        <h1>Projects Page</h1>
        {/* Aap yahan apne projects ki list ya cards add kar sakte hain */}
      </main>
    </>
  );
}

export default Projects;