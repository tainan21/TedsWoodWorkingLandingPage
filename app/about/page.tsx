// "use client";

// import HeroSection from "@/components/section/heroSections";

// import MetaTags from "@/app/MetaTags"; // SEO aprimorado
// import dynamic from "next/dynamic";

// const Footerdemo = dynamic(() => import("@/components/section/footer"), {
//   ssr: false,
// });

// export default function AboutPage() {
//   return (
//     <main className="min-h-screen bg-background">
//       <MetaTags 
//         title="Dashfloors - Excellence in Floor Installation" 
//         description="Celebrating 20 years of transforming spaces with quality and trust, and over 2,000 satisfied clients. Discover the Dashfloors difference."
//       />
//       <Navbar />
//       {/* Passando os valores via props */}
//       <HeroSection
//         title="Dashfloors: Excellence in Floor Installation"
//         description="For 20 years, we've been transforming spaces with quality, trust, and over 2,000 satisfied clients. Experience the Dashfloors difference."
//         imageSrc="/install-laminate.jpg"
//       />
//       <About />
//       <Footerdemo />
//     </main>
//   );
// }
