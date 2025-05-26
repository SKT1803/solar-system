import './VenusStyle.css'
import venusImg from '../assets/venusRB.png'


function Venus(props) {

  const showInfo = props.info;


    return (
       <>
        <div className='orbit-venus'>
          <img className='venus' src={venusImg} alt='planet venus'></img>
        </div>
          {showInfo && <div className='orbit-line-venus'></div>} 
        </>
    );
}

export default Venus