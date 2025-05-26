import './EarthStyle.css'
import earthImg from '../assets/earth2RB.png'
import Moon from '../CMoon/Moon';

function Earth(props) {
   
    const showInfo = props.info;

    return (
       <>
        <div className='orbit-earth'>
           <div className='earth'>
              <img src={earthImg} alt='planet earth'></img>
              <div className="moon-orbit">
                 <Moon info={showInfo}/>
              </div>
            </div>
        </div>
         {showInfo && <div className='orbit-line-earth'></div>}
        </>
    );
}

export default Earth