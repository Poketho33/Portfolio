
export default function Nav() {
    return (
        <nav className="px-12 py-6 fixed z-100 w-full">
            <div className="flex justify-between items-center">
                <a href="#home" id="nav__logo" className="font-clicker-script text-3xl">TE</a>

                <ul className="flex gap-4 items-center justify-center font-doto text-lg">
                    <li>
                        <a href="#projects" className="">Projects</a>
                    </li>
                    <li>
                        <a href="#contactme" className="">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}