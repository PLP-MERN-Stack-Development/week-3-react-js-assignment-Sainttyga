import type React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Layout component that wraps the main content with a Navbar and Footer
interface LayoutProps {
  children: React.ReactNode;
}

// Main layout component that includes the Navbar and Footer
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

// Export the Layout component for use in other parts of the application
export default Layout;
