
import  chaGuan from "./images/ChaGuan.jpg"
import divide from"./images/DivideAndConquer.jpg"
import martian from "./images/martian.jpg"
import mouse from "./images/mousehunt.jpg"
import sleepless from"./images/sleepless.jpg"
import crooked from"./images/TheCrookedRoad.jpg"


function Movies() {

    return (
        
        <div className="movies">
            <div className="card">
                <img src={crooked}></img>
                <div className="movie-title">The Crooked Road</div>
                <button className="cart">Add To Cart</button>
            </div>
            <div className="card">
                <img src={sleepless} ></img>
                <div className="movie-title">Sleepless in Seattle</div>
                <button className="cart">Add To Cart</button>
            </div>
            <div className="card">
                <img src={mouse}></img>
                <div className="movie-title">Mouse Hunt</div>
                <button className="cart">Add To Cart</button>
            </div>
            <div className="card">
                <img src={chaGuan}></img>
                <div className="movie-title">Cha Guan</div>
                <button className="cart">Add To Cart</button>
            </div>
            <div className="card">
                <img src={divide}></img>
                <div className="movie-title">Divide and Conquer</div>
                <button className="cart">Add To Cart</button>
            </div>
            <div className="card">
                <img src={martian}></img>
                <div className="movie-title">The Martian</div>
                <button className="cart">Add To Cart</button>
            </div>
        </div>
        
    )
}

export default Movies