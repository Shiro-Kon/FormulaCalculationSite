import Toolbar from '@mui/material/Toolbar'
import { Container } from '@mui/material'
import Menu from '../../Components/Menu/Menu'
import './Header.scss'

type Props = {}

const Header = (props: Props) => {
    return (
        <header  className="bar-header">
            <Container>
                <Toolbar className="toolbar">
                    <div className="menu"><Menu /></div>
                </Toolbar>
            </Container>
        </header>
    )
}

export default Header
