
import { useEffect, useState } from 'react'
import Header from './components/Header'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Languages from './components/Languages'
import Footer from './components/Footer'
import Reviews from './components/Reviews'
import ContactForm from './components/ContactForm'

function App() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const hour = new Date().getHours()
    setTheme(hour >= 7 && hour < 21 ? 'light' : 'dark')
  }, [])

  return (
    <div className={`cv-app min-h-screen px-4 py-8 ${theme === 'dark' ? 'cv-dark' : 'bg-[#fff8fc] text-[#4a3541]'}`}>
      <div className="mx-auto max-w-5xl">
        <div className="mb-5 flex justify-end">
          <button
            type="button"
            onClick={() => setTheme(current => current === 'light' ? 'dark' : 'light')}
            className="theme-toggle-button rounded-full border border-pink-200 bg-white px-5 py-2 text-sm font-bold text-[#765967] shadow-sm transition hover:bg-pink-50"
          >
            {theme === 'dark' ? 'Увімкнути денну тему' : 'Увімкнути нічну тему'}
          </button>
        </div>

        <Header />

        <main className="mt-8 grid gap-6 md:grid-cols-[280px_1fr]">
          <aside className="space-y-6">
            <Education />
            <Skills />
            <Languages />
          </aside>

          <div className="space-y-6">
            <About />
            <Experience />
          </div>
        </main>

        <Reviews />
        <Footer />
        <ContactForm />
      </div>
    </div>
  )
}

export default App
