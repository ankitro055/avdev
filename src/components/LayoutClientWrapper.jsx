"use client";

import dynamic from "next/dynamic";
import Footer from "./Footer";

// Lazy load heavy components on client
// const NavbarDemo = dynamic(() => import("@/components/Navbar"), { ssr: false });
const NavbarDemo = dynamic(() =>
  import("@/components/Navbar").then((mod) => mod.NavbarDemo),
  { ssr: false }
);

// const ContactSection = dynamic(() => import("@/components/ContactSection"), { ssr: false });
// const ContactSection = dynamic(() =>
//   import("@/components/ContactSection").then((mod) => mod.NavbarDemo),
//   { ssr: false }
// );

// const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
 

export default function LayoutClientWrapper({ children }) {
  return (
    <>
      <NavbarDemo />
      <main>{children}</main>
      {/* <ContactSection /> */}
      {/* <Footer /> */}
      <Footer/>
    </>
  );
}
