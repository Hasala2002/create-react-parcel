import LogoFront from "./img/parcel-front.png"
import LogoBack from "./img/parcel.png"
import ReactLogo from "./img/react.png"

const App = () => {
  return (
    <div className="App">
        <div className="App-Logo">
            <img className="Logo-Front" src={LogoFront} alt="logo front" />
            <img className="React-Logo" src={ReactLogo} alt="react logo" />
            <img className="Logo-Back" src={LogoBack} alt="logo back" />
        </div>
        <span>Edit <span className="code">src/App.jsx</span> and save to reload.</span>
    </div>
  )
}

export default App