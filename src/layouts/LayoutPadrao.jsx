import {ContainerMenu} from "../components/ContainerMenu"
import LinhasAcessibilidade from "../components/LinhasAcessibilidade"

export function LayoutPadrao ({ children }){
    return(
        <>
            <LinhasAcessibilidade/>
            <ContainerMenu/>  
            <main>{children}</main> {/* Aqui será inserido os eventos disponiveis */}
        </>
    )
}

export default LayoutPadrao