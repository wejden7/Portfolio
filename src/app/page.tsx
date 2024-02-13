import Header from "@/app/components/header";
import SectionOne from "@/app/components/sectionOne";
import Image from "next/image";
import back from "../../public/images/back.png";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <div className="h-screen  grid bg-secondary ">
        <Header />
        <SectionOne />
      </div>
      <div>new</div>
    </main>
  );
}

/**
 * <Image
          src={back}
          alt="Your Image Alt Text "
          className="opacity-0 absolute  bottom-0 left-1/2 -translate-x-1/2"
          width={500}
          height={500}
        />
 */
