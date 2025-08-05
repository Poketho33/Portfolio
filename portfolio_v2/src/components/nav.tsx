
export default function Nav() {
    return (
        <nav className="nav">
            <div className="nav__container">
                <a href="#home" id="nav__logo" className="gloock">TE</a>

                <ul className="nav__menu">
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