import {ContainerBanner} from "./ContainerBanner.jsx";
import {LoginBar} from "./LoginBar.jsx";

function Header() {

    return (
        <header>
            <LoginBar/>
            <ContainerBanner/>
        </header>
    )
}

export default Header
