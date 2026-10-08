function Skills() {
    return (
        <section className="relative overflow-hidden rounded-[2.5rem] border border-pink-100 bg-pink-50 p-7">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-pink-400">
                03 / Skills
            </p>

            <h2 className="mb-5 text-2xl font-bold text-[#4a3541]">
                Навички
            </h2>

            <div className="flex flex-wrap gap-2">
                {['HTML5', 'Python', 'C#', 'Git', 'GitHub'].map((skill) => (
                    <span
                        key={skill}
                        className="rounded-full border border-pink-200 bg-white px-4 py-2 text-sm font-medium text-[#765967]"
                    >
                        {skill}
                    </span>
                ))}
            </div>

            <img
                src="/decorations/vine.svg"
                alt=""
                className="pointer-events-none absolute -top-4 -right-8 w-44 opacity-50"
            />
        </section>
    )
}

export default Skills