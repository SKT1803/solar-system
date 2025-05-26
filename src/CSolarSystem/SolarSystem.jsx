import React, { useState} from 'react';
import './SolarSystemStyle.css';

import Sun from '../CSun/Sun';
import Mercury from '../CMercury/Mercury';
import Venus from '../CVenus/Venus';
import Earth from '../CEarth/Earth';
import Mars from '../CMars/Mars';
import Jupiter from '../CJupiter/Jupiter';
import Saturn from '../CSaturn/Saturn';
import Uranus from '../CUranus/Uranus';
import Neptune from '../CNeptune/Neptune';
import BlackHole from '../CBlackHole/BlackHole';
import milkyWayImg from '../assets/themilkywayRB.png';


function SolarSystem() {
   
    const [zoomLevel, setZoomLevel] = useState(1);

    const [clickSun, setClickSun] = useState(false);
    const [clickMercury, setClickMercury] = useState(false);
    const [clickVenus, setClickVenus] = useState(false);
    const [clickEarthAndMoon, setClickEarth] = useState(false);
    const [clickMars, setClickMars] = useState(false);
    const [clickJupiter, setClickJupiter] = useState(false);
    const [clickSaturn, setClickSaturn] = useState(false);
    const [clickUranus, setClickUranus] = useState(false);
    const [clickNeptune, setClickNeptune] = useState(false);

    const [clickInfo, setClickInfo] = useState(false);
    
    // State for panning
    const [isPanning, setIsPanning] = useState(false);
    const [translate, setTranslate] = useState({ x: 0, y: 0 }); // current points
    const [startPoint, setStartPoint] = useState({ x: 0, y: 0 });

    const zoomHold = 1.5;
    const zoomMilkyWay = 0.040000000000000374;

    // Handle mouse down to start panning
    const handleMouseDown = (e) => {
        setIsPanning(true);
        setStartPoint({ x: e.clientX - translate.x, y: e.clientY - translate.y });
    };

    // Handle mouse move to apply panning
    const handleMouseMove = (e) => {
        if (!isPanning) return;
        const newTranslate = {
            x: e.clientX - startPoint.x,
            y: e.clientY - startPoint.y,
        };
        setTranslate(newTranslate);
    };

    // Handle mouse up to stop panning
    const handleMouseUp = () => {
        setIsPanning(false);
    };


    // Handle wheel scroll event to zoom in or out
    function handleScrollZoom(event) {
     event.preventDefault(); // Prevent default scroll behavior
     const scrollDirection = event.deltaY > 0 ? 'zoomOut' : 'zoomIn';
 
     if (scrollDirection === 'zoomIn') {
        // setZoomLevel(prevZoom => prevZoom + 0.1); // Zoom in
         //setZoomLevel(prevZoomLevel => ( prevZoomLevel < 0.8 ? prevZoomLevel + 0.04 : prevZoomLevel)); 
         setZoomLevel(prevZoomLevel => (prevZoomLevel < 3 ? prevZoomLevel + 0.08 : prevZoomLevel)); // Zoom in
     } else if (scrollDirection === 'zoomOut') {
       //  setZoomLevel(prevZoom => (prevZoom > 0.1 ? prevZoom - 0.1 : prevZoom)); // Zoom out
       setZoomLevel(prevZoomLevel =>(prevZoomLevel > 0.08 ? prevZoomLevel - 0.08 : prevZoomLevel));
     }
     console.log(zoomLevel);
 }

     // Reset panning to (0, 0)
     const resetPanning = () => {
        setTranslate({ x: 0, y: 0 });
        setZoomLevel(1);
    };

    return (
     <div className='system-all'>

     <div className='second-layer'>
       <div className='button-others'>
        <button className='info-button' onClick={() => setClickInfo(prev => !prev)}>Show-Info & Display Orbit</button>
        <button className='info-button' onClick={resetPanning}>Reset Panning</button>
       </div>  
        <div className='first-layer'>
             <div className='buttons'>
                      <button className='button' onClick={() => window.location.reload()}>Refresh</button>


                    <button
                    className={`button ${clickSun ? 'button-selected' : ''}`}
                        onClick={() => setClickSun(prev => !prev)}
                        >
                        Sun
                    </button>

                    <button
                    className={`button ${clickMercury ? 'button-selected' : ''}`}
                        onClick={() => setClickMercury(prev => !prev)}
                        >
                        Mercury
                    </button>

                    <button
                    className={`button ${clickVenus ? 'button-selected' : ''}`}
                        onClick={() => setClickVenus(prev => !prev)}
                        >
                        Venus
                    </button>

                    <button
                    className={`button ${clickEarthAndMoon ? 'button-selected' : ''}`}
                        onClick={() => setClickEarth(prev => !prev)}
                        >
                        Earth
                    </button>


                       {/*
                      <button className='button' onClick={() => setClickSun(prev => !prev)}>Sun</button>
                      <button className='button' onClick={() => setClickMercury(prev => !prev)}>Mercury</button>
                      <button className='button' onClick={() => setClickVenus(prev => !prev)}>Venus</button>
                      <button className='button' onClick={() => setClickEarth(prev => !prev)}>Earth</button> */}
             </div>
            <div className='buttons2'>

                <button
                        className={`button ${clickMars ? 'button-selected' : ''}`}
                        onClick={() => setClickMars(prev => !prev)}
                        >
                        Mars
                    </button>

                   <button
                        className={`button ${clickJupiter ? 'button-selected' : ''}`}
                        onClick={() => setClickJupiter(prev => !prev)}
                        >
                        Jupiter
                     </button>

                     <button
                        className={`button ${clickSaturn ? 'button-selected' : ''}`}
                        onClick={() => setClickSaturn(prev => !prev)}
                        >
                        Saturn
                     </button>

                     <button
                        className={`button ${clickUranus ? 'button-selected' : ''}`}
                        onClick={() => setClickUranus(prev => !prev)}
                        >
                        Uranus
                     </button>

                      <button
                        className={`button ${clickNeptune ? 'button-selected' : ''}`}
                        onClick={() => setClickNeptune(prev => !prev)}
                        >
                        Neptune
                      </button>
             
                      {/* <button className='button' onClick={() => setClickMars(prev => !prev)}>Mars</button>
                      <button className='button' onClick={() => setClickJupiter(prev => !prev)}>Jupiter</button>
                      <button className='button' onClick={() => setClickSaturn(prev => !prev)}>Saturn</button>
                      <button className='button' onClick={() => setClickUranus(prev => !prev)}>Uranus</button>
                      <button className='button' onClick={() => setClickNeptune(prev => !prev)}>Neptune</button> */}
            </div>
        </div>
     </div>
            <div className='solar-system' 
            onWheel={handleScrollZoom}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            style={{
                cursor: isPanning ? 'grabbing' : 'grab',
            }}
            >
                  <div className='content' style={{
                    transform: `translate(${translate.x}px, ${translate.y}px) scale(${zoomLevel})`,
                    transformOrigin: 'center',
                    transition: 'transform 0.3s ease', // Smooth transition
                    }}>
                      
                        {zoomLevel > zoomMilkyWay && clickSun && <Sun info={clickInfo}/>}
                        {/* {clickMercury && <Mercury info={clickInfo && zoomLevel > zoomHold}/>} */}
                        {/* {zoomLevel > zoomMilkyWay && clickMercury && <Mercury info={zoomLevel < zoomHold && clickInfo}/>} */}
                        {zoomLevel > zoomMilkyWay && clickMercury && <Mercury info={clickInfo}/>}
                        {zoomLevel > zoomMilkyWay && clickVenus && <Venus info={clickInfo}/>}
                        {zoomLevel > zoomMilkyWay && clickEarthAndMoon && <Earth info={clickInfo}/>}   
                        {zoomLevel > zoomMilkyWay && clickMars && <Mars info={ clickInfo}/>}   
                        {zoomLevel > zoomMilkyWay && clickJupiter && <Jupiter info={clickInfo}/>}  
                        {zoomLevel > zoomMilkyWay && clickSaturn && <Saturn info={clickInfo}/>}      
                        {zoomLevel > zoomMilkyWay && clickUranus && <Uranus info={clickInfo}/>} 
                        {zoomLevel > zoomMilkyWay && clickNeptune && <Neptune info={ clickInfo}/>}    
                        {zoomLevel < zoomMilkyWay && clickSun && <BlackHole info={clickInfo}/>}         
                        {zoomLevel < zoomMilkyWay && <img className='milkyway' src= {milkyWayImg} alt='milkyway'></img>}
                  </div>
            </div>
    </div>
    );
}

export default SolarSystem