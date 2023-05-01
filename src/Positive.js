import './Positive.css';

function Positive(){

    // setTimeout(() => {
    //     const elem = document.getElementById("result");
    //     elem.parentNode.removeChild(elem);
    // }, 2100);

    // setTimeout(()=>{
    //     document.getElementById("result").style.display = "none";
    // }, 2000);

    

    // document.getElementById("result").delay(2000).fadeOut();

    return (
        <div>
            <h3 className="result" id="result" >Your Statememt represent <label className="positive">Positive</label> Sentiments</h3>
        </div>
    );
}

export default Positive;