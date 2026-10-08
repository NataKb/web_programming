function Experience() {
    return (
        <section className="rounded-[2.5rem] border border-pink-100 bg-white/80 p-7 shadow-[0_15px_40px_rgba(236,72,153,0.08)]">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-pink-400">
                04 / Experience
            </p>

            <h2 className="mb-6 text-3xl font-bold text-[#4a3541]">
                Досвід та проєкти
            </h2>

            <div className="space-y-6">
                <div className="border-l-2 border-pink-200 pl-5 transition hover:border-pink-400">
                    <h3 className="font-bold text-[#4a3541]">
                        Розробка консольних застосунків (C# / Python)
                    </h3>
                    <p className="mt-2 leading-7 text-[#765967]">
                        Створення навчальних програм для обробки даних, роботи з алгоритмами
                        та основами об'єктно-орієнтованого програмування (ООП).
                    </p>
                </div>

                <div className="border-l-2 border-pink-200 pl-5 transition hover:border-pink-400">
                    <h3 className="font-bold text-[#4a3541]">
                        Дослідження основ кібербезпеки
                    </h3>
                    <p className="mt-2 leading-7 text-[#765967]">
                        Вивчення базових принципів захисту інформації, мережевих протоколів
                        та безпеки вебзастосунків у межах університетського курсу.
                    </p>
                </div>

                <div className="border-l-2 border-pink-200 pl-5 transition hover:border-pink-400">
                    <h3 className="font-bold text-[#4a3541]">
                        Frontend-розробка (Web)
                    </h3>
                    <p className="mt-2 leading-7 text-[#765967]">
                        Створення семантичної структури вебсторінок на HTML5 та розробка
                        компонентних інтерфейсів з використанням React.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Experience