import Link from 'next/link'

export default function Nav() {
    return (
        <nav className="px-12 py-6 fixed z-100 w-full">
            <div className="flex justify-between items-center">
                <a href="/#home" id="nav__logo" className="font-clicker-script text-3xl">TE</a>

                <ul className="flex gap-6 items-center justify-center font-doto text-lg">
                    <Link href="/#projects" className="">
                        Projects
                    </Link>
                    <Link href="/photography" transitionTypes={['slide-in']} className="">
                        Photography
                    </Link>
                    <Link href="/#contactme" className="">
                        Contact
                    </Link>
                </ul>
            </div>
        </nav>
    )
}