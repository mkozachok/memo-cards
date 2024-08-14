import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";

import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      home page
      <div>
        <Link href="quiz">
          <Button>Go to quiz</Button>
        </Link>
      </div>
    </main>
  );
}
