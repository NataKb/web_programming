import Header from './components/Header'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#fff8fc] px-4 py-8 text-[#4a3541]">
      <div className="mx-auto max-w-5xl">
        <Header />

        <main className="mt-8 grid gap-6 md:grid-cols-[280px_1fr]">
          <aside className="space-y-6">
            <Education />
            <Skills />
          </aside>

          <div className="space-y-6">
            <About />
            <Experience />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default App