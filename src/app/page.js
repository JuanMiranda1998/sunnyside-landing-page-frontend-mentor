import GridSection from "./components/GridSection"
import Header from "./components/Header"
import TestimonialSection from "./components/TestimonialSection"
import ImageGridSection from "./components/ImageGridSection"
import Footer from "./components/Footer"


export default function Home() {
  return (
    <main className="bg-[#121212]">
      <Header />
      <GridSection />
      <TestimonialSection />      
      <ImageGridSection />
      <Footer />
    </main>
  )
}
