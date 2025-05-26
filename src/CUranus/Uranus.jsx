import './UranusStyle.css'
import uranusImg from '../assets/uranusRB.png'

function Uranus(props) {
   
    const showInfo = props.info;

    return (
    <>
        <div className='orbit-uranus'>
          <img className='uranus' src={uranusImg} alt='planet uranus'></img>
        </div>
        {showInfo && <div className='orbit-line-uranus'></div>} 
        </>
    );
}

export default Uranus