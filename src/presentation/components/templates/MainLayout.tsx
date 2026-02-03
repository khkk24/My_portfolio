import React from "react";
import { Navbar } from "../organisms/Navbar";
import { Footer } from "../organisms/Footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-secondary">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};
