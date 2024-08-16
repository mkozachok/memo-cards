import Image from "next/image";
import { Inter } from "next/font/google";
import { VerbsCarousel } from "@/components/VerbsCarousel/VerbsCarousel";

const inter = Inter({ subsets: ["latin"] });

export default function Carousel() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <VerbsCarousel />
    </main>
  );
}
