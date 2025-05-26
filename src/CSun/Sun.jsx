
import './SunStyle.css'

function Sun(props) {
   
    const showInfo = props.info;

    return(
        <div className='sun popupS'>
                <span className={`popuptext ${showInfo ? "show" : ""}`} id="myPopup">
                   <a className='link' href='https://science.nasa.gov/sun/' target="_blank" rel="noopener noreferrer">The Sun</a>
               </span>  
        </div>
    );
}

export default Sun