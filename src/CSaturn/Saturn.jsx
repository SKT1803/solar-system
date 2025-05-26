import './SaturnStyle.css'
import saturnImg from '../assets/saturn2RB.png'

function Saturn(props) {
   
    const showInfo = props.info;

    return (
      <>
        <div className='orbit-saturn'>
          <img className='saturn' src={saturnImg} alt='planet saturn'></img>
        </div>
        {showInfo && <div className='orbit-line-saturn'></div>} 
        </>
    );
}

export default Saturn