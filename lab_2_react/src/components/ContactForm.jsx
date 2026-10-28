
import { useEffect, useState } from 'react'

function ContactForm() {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        if (sessionStorage.getItem('contactModalClosed') === 'true') return

        const timer = window.setTimeout(() => setIsOpen(true), 60000)

        return () => window.clearTimeout(timer)
    }, [])

    function closeModal() {
        setIsOpen(false)
        sessionStorage.setItem('contactModalClosed', 'true')
    }

    if (!isOpen) return null

    return (
        <div
            className="contact-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-title"
            onMouseDown={event => {
                if (event.target === event.currentTarget) closeModal()
            }}
        >
            <div className="contact-modal-content">
                <button
                    type="button"
                    className="contact-modal-close"
                    onClick={closeModal}
                    aria-label="Закрити"
                >
                    ×
                </button>

                <p className="contact-eyebrow text-xs uppercase tracking-[0.25em] text-pink-400">
                    Contact
                </p>

                <h2 id="contact-title" className="contact-title font-display mt-2 text-3xl">
                    Зворотний зв’язок
                </h2>

                <p className="contact-description mt-2 text-sm">
                    Залиште повідомлення — буду рада відповісти.
                </p>

                <form
                    className="contact-form mt-5"
                    action="https://formspree.io/f/xnppvyga"
                    method="POST"
                >
                    <label>
                        Ім’я
                        <input type="text" name="name" autoComplete="name" required />
                    </label>

                    <label>
                        Email
                        <input type="email" name="email" autoComplete="email" required />
                    </label>

                    <label>
                        Номер телефону
                        <input type="tel" name="phone" autoComplete="tel" required />
                    </label>

                    <label>
                        Повідомлення
                        <textarea name="message" rows="4" required />
                    </label>

                    <button
                        type="submit"
                        className="rounded-full bg-pink-300 px-5 py-3 font-bold text-white hover:bg-pink-400"
                    >
                        Надіслати
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ContactForm