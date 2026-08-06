
export default function Nav() {
    return (
        <nav className="px-12 py-6">
            <div className="flex justify-between items-center">
                <a href="#home" id="nav__logo" className="gloock">TE</a>

                <ul className="flex gap-4 items-center justify-center">
                    <li>
                        <a href="#projects" className="nav__links">Projects</a>
                    </li>
                    <li>
                        <a href="#contactme" className="nav__links">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}