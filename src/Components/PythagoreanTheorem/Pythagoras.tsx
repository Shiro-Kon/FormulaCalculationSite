import './Pythagoras.scss'
type Props = {}

const Pythagoras = (props: Props) => {
  return (
    <div className='box'>
        <input type="number" name="a" id="a" placeholder='Введіть число a' />
        <input type="number" name="b" id="b" placeholder='Введіть число b'/>
        <input type="number" name="c" id="c" placeholder='Введіть число c'/>
        <input type="text" placeholder='Відповідь :' readOnly  />
        <input type="button" value="Очистити" />
    </div>
  )
}

export default Pythagoras