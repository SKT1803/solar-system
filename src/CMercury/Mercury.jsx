import './MercuryStyle.css'
import mercuryImg from '../assets/mercuryRB.png'

function Mercury(props) {
    
    const showInfo = props.info;

    return (
      <>
        <div className='orbit-mercury'>
          <img className='mercury' src={mercuryImg} alt='planet mercury'></img>
        </div>
        {showInfo && <div className='orbit-line-mercury'></div>}
        </>
    );
}

export default Mercury