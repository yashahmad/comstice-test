import About from "@/components/About";
import About2 from "@/components/About2";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SubAbout from "@/components/SubAbout";

export default function Home(){
  return(
    <div>
      <Header />
      <Hero />
      <About />
      <SubAbout />
      <About2 />
    </div>
  )
}