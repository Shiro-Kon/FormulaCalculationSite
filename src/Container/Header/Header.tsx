import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import { Container } from '@mui/material'
import Menu from '../../Components/Menu/Menu'
import './Header.scss'

type Props = {}

const Header = (props: Props) => {
    return (
        <AppBar position="static" className="bar-header">
            <Container>
                <Toolbar className="toolbar">
                    <div className="menu"><Menu /></div>
                    
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
