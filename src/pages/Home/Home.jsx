
import HomeSEO from './HomeSEO';

function Home() {
  return (
    <>
      {/* SEO Tags imported here */}
      <HomeSEO />

      {/* Main Page Content */}
      <main style={{ padding: "50px", textAlign: "center" }}>
        <h1>Home Page</h1>
        <p>Welcome to Bhavyesh Nial's Portfolio!</p>
      </main>
    </>
  );
}

export default Home;
// function Home() {
//   return (
//     <div style={{ padding: "50px", textAlign: "center" }}>
//       <h1>Home Page</h1>
//       <p>Welcome to Bhavyesh Nial's Portfolio!</p>
//     </div>
//   );
// }
 
// export default Home;