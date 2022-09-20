import Footer from "./UI/Footer/Footer";
import Header from "./UI/Header/Header";

export default function Layout({ children, handleOpen }) {
  return (
    <>
      <Header />
      {children}
      <Footer handleOpen={handleOpen} />
    </>
  );
}
