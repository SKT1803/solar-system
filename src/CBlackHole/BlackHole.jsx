import '../CBlackHole/BlackHoleStyle.css'

function BlackHole(props) {
    
    const showInfo = props.info;
    return(
        <div class="container">
        <div class="black-hole">
            <div class="megna">
                <div class="black"></div>
            </div>
        </div>
    </div> 
    );
}

export default BlackHole