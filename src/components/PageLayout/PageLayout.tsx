import { FC } from "react";
import "./PageLayout.scss";
import Header from "../Header/Header";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="page-layout">
      <Header />
      {children}
    </div>
  );
};

export default PageLayout;
