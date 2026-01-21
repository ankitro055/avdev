import Link from "next/link";
import Image from "next/image";
import AnimatedHero from "./HeroSection.client";

const stats = [
  { value: "100+", label: "Projects" },
  { value: "5+", label: "Years" },
  { value: "100+", label: "Clients" },
  { value: "24/7", label: "Support" },
];

export default function HeroSection() {
  return (
    <header className="relative min-h-screen flex items-center justify-center bg-[#361259] px-6 overflow-hidden">

      {/* OPTIONAL LCP IMAGE */}
      {/*
      <Image
        src="/hero-bg.webp"
        alt="Hero Background"
        priority
        fetchPriority="high"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover opacity-35"
      />
      */}

      {/* Static GPU blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="blob bg-[#B272F2] top-1/4 left-1/4" />
        <div className="blob bg-[#C6A7F2] bottom-1/3 right-1/4" />
      </div>

      {/* Client animation wrapper */}
      <AnimatedHero stats={stats} />
    </header>
  );
}
