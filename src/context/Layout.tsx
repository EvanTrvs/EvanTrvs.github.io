import Footer from "../components/footer/Footer";
import NavBar from "../components/Navbar/NavBar";

function Layout ({ children } : { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  )
}

export default Layout;