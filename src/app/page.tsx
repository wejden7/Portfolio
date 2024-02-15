import Header from "@/app/components/header";
import About from "@/app/components/about";
import Portfolio from "@/app/components/portfolio";
import Service from "@/app/components/service";
export default function Home() {
  return (
    <main className="min-h-screen text-white">
      <Header />
      <About />
      <Portfolio />
      <Service />
    </main>
  );
}
