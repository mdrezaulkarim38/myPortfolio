import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "./Home";
import { ReactNode } from "react";

interface MainLayoutProps {
  component?: ReactNode;
}

function MainLayout({ component }: MainLayoutProps) {
  return (
    <div className="m-0 p-0">
      <Header />
      {component || <Home />}
      <Footer />
    </div>
  );
}

export default MainLayout;
