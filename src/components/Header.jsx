import {ContainerBanner} from "./ContainerBanner.jsx";
import {LoginBar} from "./LoginBar.jsx";
import {LinhasAcessibilidade} from "./LinhasAcessibilidade.jsx";

function Header() {

    return (
        <header>
            <LinhasAcessibilidade/>
            <ContainerBanner/>
        </header>
    )
}

export default Header
