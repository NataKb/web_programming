
function Header() {
    return (
        <header className="cv-header relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-pink-200 via-pink-100 to-white px-8 py-12 shadow-[0_20px_60px_rgba(236,72,153,0.15)] md:px-14">
            <div className="relative grid items-center gap-8 md:grid-cols-[1fr_360px]">
                <div>
                    <p className="header-eyebrow mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-pink-500">
                        Web / Cybersecurity
                    </p>

                    <h1 className="header-name font-display text-6xl font-semibold leading-[0.9] tracking-tight text-[#4a3541] md:text-8xl">
                        Черняк
                        <br />
                        <span className="text-pink-400">Наталія</span>
                    </h1>

                    <p className="header-subtitle mt-6 max-w-xl text-lg leading-7 text-[#765967]">
                        Студентка / Початківець Web-розробник
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <a
                            href="mailto:nataliia.cherniak.kb.2025@lpnu.ua"
                            className="header-link rounded-full border border-pink-200 bg-white/80 px-5 py-3 text-sm font-medium shadow-sm transition duration-300 hover:-translate-y-1 hover:border-pink-400 hover:shadow-lg hover:shadow-pink-200/50"
                        >
                            Email <span className="ml-2">→</span>
                        </a>

                        <a
                            href="https://github.com/NataKb"
                            target="_blank"
                            rel="noreferrer"
                            className="header-link rounded-full border border-pink-200 bg-white/80 px-5 py-3 text-sm font-medium shadow-sm transition duration-300 hover:-translate-y-1 hover:border-pink-400 hover:shadow-lg hover:shadow-pink-200/50"
                        >
                            GitHub <span className="ml-2">→</span>
                        </a>
                    </div>
                </div>

                <div className="relative hidden h-72 md:block">
                    <img
                        src="/decorations/butterfly.svg"
                        alt=""
                        className="butterfly-float absolute right-[-7px] top-[88%] w-[450px] -translate-y-1/2 opacity-70"
                    />
                </div>
            </div>
        </header>
    )
}

export default Header

