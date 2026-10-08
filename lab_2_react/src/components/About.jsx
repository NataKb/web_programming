function About() {
    return (
        <section className="relative overflow-hidden rounded-[2.5rem] border border-pink-100 bg-white/80 p-7 shadow-[0_15px_40px_rgba(236,72,153,0.08)] backdrop-blur-sm">

            <img
                src="/decorations/flourish.svg"
                alt=""
                className="pointer-events-none absolute -right-2 -top-2 w-52 opacity-55"
            />

            <div className="relative z-10">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-pink-400">
                    01 / Profile
                </p>

                <h2 className="mb-5 text-3xl font-bold text-[#4a3541]">
                    Про мене
                </h2>

                <p className="max-w-2xl leading-8 text-[#765967]">
                    Я студентка Національного університету «Львівська політехніка»,
                    навчаюся за спеціальністю «Кібербезпека». Цікавлюся веброзробкою,
                    безпекою програмного забезпечення та сучасними інформаційними
                    технологіями. Прагну розвиватися у сфері створення та захисту
                    вебзастосунків, брати участь у практичних проєктах і постійно
                    вдосконалювати свої технічні навички.
                </p>
            </div>
        </section>
    )
}

export default About