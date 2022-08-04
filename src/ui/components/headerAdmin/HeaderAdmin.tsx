import { HeaderContainer, Logo, Menu } from './HeaderAdmin.style';

export default function HeaderAdmin(){
    return (
        <HeaderContainer>
            <Logo src="/images/logo.svg" alt="Adote um Pet"/>
            <Menu >Inscrição</Menu>
        </HeaderContainer>
    )
}