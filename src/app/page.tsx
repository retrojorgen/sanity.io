import Hero from '../components/Hero';
import Logos from '../components/Logos';
export default function Home() {
  return (
    <main className="row-start-2 items-center sm:items-start">
      <Hero />
      <Logos />
    </main>
  );
}
