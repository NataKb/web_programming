function Header() {
    return (
        <header className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-pink-200 via-pink-100 to-white px-8 py-12 shadow-[0_20px_60px_rgba(236,72,153,0.15)] md:px-14">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-pink-300/20 blur-3xl" />
            <div className="absolute -bottom-24 left-10 h-56 w-56 rounded-full bg-rose-200/25 blur-3xl" />

            <div className="relative grid items-center gap-8 md:grid-cols-[1fr_360px]">

                <div>
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-pink-500">
                        Web / Cybersecurity
                    </p>

                    <h1 className="font-display text-6xl font-semibold leading-[0.9] tracking-tight text-[#4a3541] md:text-8xl">
                        Черняк
                        <br />
                        <span className="text-pink-400">Наталія</span>
                    </h1>

                    <p className="mt-6 max-w-xl text-lg leading-7 text-[#765967]">
                        Студентка / Початківець Web-розробник
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <a
                            href="mailto:nataliia.cherniak.kb.2025@lpnu.ua"
                            className="rounded-full border border-pink-200 bg-white/80 px-5 py-3 text-sm font-medium shadow-sm transition duration-300 hover:-translate-y-1 hover:border-pink-400 hover:shadow-lg hover:shadow-pink-200/50"
                        >
                            Email <span className="ml-2">→</span>
                        </a>

                        <a
                            href="https://github.com/NataKb"
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-full border border-pink-200 bg-white/80 px-5 py-3 text-sm font-medium shadow-sm transition duration-300 hover:-translate-y-1 hover:border-pink-400 hover:shadow-lg hover:shadow-pink-200/50"
                        >
                            GitHub <span className="ml-2">→</span>
                        </a>
                    </div>
                </div>

                <div className="relative hidden h-72 md:block">
                    <img
                        src="/decorations/butterfly.svg"
                        alt=""
                        className="butterfly-float absolute right-[-10px] top-[56%] w-[350px] -translate-y-1/2 opacity-70"
                    />
                </div>

            </div>
        </header>
    )
}

export default Header