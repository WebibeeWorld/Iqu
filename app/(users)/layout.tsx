import type { Metadata } from "next";
import { Providers } from "../provider";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Lato, Montserrat } from "next/font/google";
const ExitModalComponent = dynamic(
  () => import("@/components/ExitModal") as any,
  { ssr: false }
);
import Contact from "@/components/Contact";
import dynamic from "next/dynamic";
import DefaultNavbvar from "@/components/DefaultNavbvar";
import { FAQServer } from "@/components/layout/FAQServer";

export const metadata: Metadata = {
  title: "IQU Clinic | A Counseling And Therapy Center",
  description: "You Deserve A Better Life",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const lato = Lato({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato",
  weight: "400",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lato.variable} ${montserrat.variable}`}>
      <body className="font-lora">
        <Providers>
          <ExitModalComponent />
          <DefaultNavbvar />
          <main className="relative overflow-hidden">{children}</main>
          <FloatingButton />
          <FAQServer />
          <Contact />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
