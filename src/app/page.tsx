'use client'

import MainPage from "@/components/pages/MainPage/MainPage";
import { Signika } from 'next/font/google'

const signika = Signika({ subsets: ['latin'], weight: '300' });

export default function Home() {

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${signika.style.fontFamily};
        }
      `}</style>
      <MainPage />
    </>
  );
}
