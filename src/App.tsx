import "./App.css";
import AirCard from "./components/AirCard";
import Predictions from "./components/Predictions";
import TimeLine from "./components/TimeLine";
import WeatherCard from "./components/WeatherCard";
function App() {
  return (
    <>
      <div id="main">
        <div className="header">
          <h1 className="header-text">
            Weather App by <span>Samir KC.</span>
          </h1>
          <div className="search">
            <input type="text" name="search" placeholder="Search something" />
            <button type="submit">
              <label htmlFor="search">search</label>
              <div className="search-icon" />
            </button>
          </div>
        </div>
        <div className="card-holder">
          <WeatherCard />
          <AirCard />
        </div>
        <TimeLine />
      </div>
      <Predictions />
    </>
  );
}

export default App;
