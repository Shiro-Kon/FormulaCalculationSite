import MenuItem from './MenuItem'

type Props = {}

const Menu = (props: Props) => {
    return (
        <>
        <select name="Виберіть функцію" className='select' id="1">
            <option value="0">Виберіть функцію</option>
            <option value="1">
                <MenuItem to="/">Калькулятор</MenuItem>
            </option>
            <option value="2"><MenuItem to="/pifagor">Теорема Піфагора</MenuItem></option>
            <option value="3"></option>
            <option value="4"></option>
            <option value="5"></option>
        </select>
            
            
        </>
    )
}

export default Menu
