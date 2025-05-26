import './NeptuneStyle.css'
import neptuneImg from '../assets/neptuneRB.png'

function Neptune(props) {
    
    const showInfo = props.info;

    return (
       <>
        <div className='orbit-neptune'>
          <img className='neptune' src={neptuneImg} alt='planet neptune'></img>
        </div>
        {showInfo && <div className='orbit-line-neptune'></div>} 
        </>
    );
}

export default Neptune