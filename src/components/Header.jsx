import {Hamburger} from "./Hamburger.jsx";
import {ContainerBanner} from "./ContainerBanner.jsx";
import {LoginBar} from "./LoginBar.jsx";

function Header() {

    return (
        <header>
            <Hamburger/>
            <LoginBar/>
            <ContainerBanner/>
        </header>
    )
}

export default Header
