import './MoonStyle.css'

function Moon(props) {
   
   const showInfo = props.info;

    return (
        <>
        <div className='orbit-moon'>
          <div className='moon'></div>
        </div>
        {showInfo && <div className='orbit-line-moon'></div>}
        </>
    );
}

export default Moon