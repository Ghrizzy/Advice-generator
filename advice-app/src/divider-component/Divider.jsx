import deskDivider from '../img/pattern-divider-desktop.svg'
import miniDivider from '../img/pattern-divider-mobile.svg'


const Divider = () => {
  return (
    <div>
      <img src={deskDivider} className='desk-divider'/>
      <img src={miniDivider} className='mini-divider'/>  
    </div>
  )
}

export default Divider
