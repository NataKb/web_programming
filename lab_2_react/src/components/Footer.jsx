import { useEffect, useState } from 'react'

function Footer() {
    const [systemInfo, setSystemInfo] = useState({ userAgent: '', platform: '' })

    useEffect(() => {
        const info = {
            userAgent: navigator.userAgent,
            platform: navigator.platform,
        }
        localStorage.setItem('cvSystemInfo', JSON.stringify(info))
        setSystemInfo(JSON.parse(localStorage.getItem('cvSystemInfo') || '{}'))
    }, [])

    return (
        <footer className="cv-footer relative mt-8 overflow-hidden rounded-[2.5rem] bg-pink-100 px-6 py-8 text-center">
            <p className="text-sm text-[#765967]">© 2026 Черняк Наталія. Усі права захищені.</p>
            <div className="mx-auto mt-5 h-px max-w-xs bg-pink-200" />
            <p className="mt-4 text-xs uppercase tracking-[0.25em] text-pink-400">Made with care</p>
            <p className="system-info mt-4 text-xs text-[#765967]">Браузер: {systemInfo.userAgent || '—'}</p>
            <p className="system-info text-xs text-[#765967]">Платформа: {systemInfo.platform || '—'}</p>
        </footer>
    )
}

export default Footer
