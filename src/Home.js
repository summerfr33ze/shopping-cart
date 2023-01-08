import logo from "./images/blockbuster.png"

function Home(props) {

return (
    <div className="home">
            <div className="main-text" >
                <h2>We're Still Alive</h2>
                <h1>Rent physical copies of movies for some reason</h1>
                <button onClick={props.navigate}>Shop Now</button>
            </div>
            <img src={logo}></img>
        </div>
          
)
}

export default Home 