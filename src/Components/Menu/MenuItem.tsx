import { NavLink } from 'react-router-dom'
import './MenuItem.scss'

type Props = {
    to: string
    children: React.ReactNode
}
const MenuItem = ({ to, children }: Props) => {
    return (
        <button className='btn'>
            <NavLink
                to={to}
                className={({ isActive }) =>
                    isActive ? 'menu-item-active' : 'menu-item'
                }
            >
                {children}
            </NavLink>
        </button>
    )
}
export default MenuItem
