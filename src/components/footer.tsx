import Link from 'next/link'

export default function Footer() {
    return (
        <section id="footer" className="px-20 pt-6 w-full">
            <div className="flex justify-between items-end pt-12">
                <ul className="flex flex-col gap-6 items-start font-doto text-lg">
                    <Link href="/#projects" className="">
                        Projects
                    </Link>
                    <Link href="/photography" className="">
                        Photography
                    </Link>
                    <Link href="/#contactme" className="">
                        Contact
                    </Link>
                </ul>
                <a href="#home" className="font-clicker-script text-6xl">Thomas Eleveld</a>
            </div>
            <div className="text-center pt-4 text-xs">Thomas Eleveld © 2026</div>
        </section>
    )
}
