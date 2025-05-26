import './JupiterStyle.css'
import jupiterImg from '../assets/JupiterRB.png'

function Jupiter(props) {
    
    const showInfo = props.info;

    return (
      <>
        <div className='orbit-jupiter'>
          <img className='jupiter' src={jupiterImg} alt='planet jupiter'></img>
        </div>
          {showInfo && <div className='orbit-line-jupiter'></div>} 
          </>
    );
}

export default Jupiter