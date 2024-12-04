import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import Experiance from "./components/Experiance"
import Services from "./components/Services"
export default function App() {
  return (
    <main className="relative">
      <NavBar />
      <section>
        <Hero/>
      </section>
      <section>
        <Experiance />
      </section>
      <section>
        <Services/>
      </section>
    </main>
  )
}