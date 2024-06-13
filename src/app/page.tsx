import MainPage from "@/components/pages/MainPage/MainPage";
import { Signika } from 'next/font/google'

const signika = Signika({ subsets: ['latin'], weight: '300' });

export default function Home() {

  return (
    <main className={signika.className}>
      <MainPage />
    </main>
  );
}
