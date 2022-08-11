import Footer from "./UI/Footer/Footer";
import Header from "./UI/Header/Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
