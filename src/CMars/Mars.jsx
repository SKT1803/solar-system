import './MarsStyle.css'
import marsImg from '../assets/marsRB.png'

function Mars(props) {
   
    const showInfo = props.info;

    return (
       <>
        <div className='orbit-mars'>
          <img className='mars' src={marsImg} alt='planet mars'></img>
        </div>
           {showInfo && <div className='orbit-line-mars'></div>} 
        </>
    );
}

export default Mars