import { StyledHeader, StyledNavHeader, StyledNavHeaderLogged } from "./style"
import { StyledTitleFour, StyledTitleFive } from "../../styles/typography/typography"
import { StyledEllipseSmall } from "../../styles/tags/ellipse"
import { StyledLinkLogin, StyledLinkRegister } from "../../styles/buttons/link"
import { StyledBtnLogout } from "../../styles/buttons/button"
import Logo from "../../assets/Logo_kenziemovie.png"
import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"
import { Link, useNavigate } from "react-router-dom"




export const Header = () => {

    const navigate = useNavigate()
    const { user, setUserData } = useContext(UserContext)

    const Logout = () => {
        localStorage.removeItem("@KM: User")
        setUserData(null)
        navigate("/")
      };

    return (
        <StyledHeader>
            <Link to="/"><img src={Logo} alt="Kenzie Movies Ícone" /></Link>
            <nav>
            {!user ? (
                <StyledNavHeader>
                    <Link to="/register" className="linkRegister"><StyledLinkRegister>Cadastrar-se</StyledLinkRegister></Link>
                    <Link  to="/login"><StyledLinkLogin>Entrar</StyledLinkLogin></Link>
                </StyledNavHeader>
                ) : (
                    <StyledNavHeaderLogged>
                        <StyledEllipseSmall className="ellipse">
                          <StyledTitleFour className="firstLetter">{user.name.charAt(0)}</StyledTitleFour>
                        </StyledEllipseSmall>
                        <StyledTitleFive className="name" >{user.name}</StyledTitleFive>
                        <StyledBtnLogout onClick={() => Logout()}>Sair</StyledBtnLogout >
                    </StyledNavHeaderLogged>
                )
            } 
            </nav>
        </StyledHeader>
    )
}
