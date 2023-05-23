import "./App.css";
import SideSection from "./components/SideSection";
import TimeLine from "./components/TimeLine";
import Tomorrow from "./components/Tomorrow";
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
            <input type="text" name="search" placeholder="Search your City..." />
            <button type="submit">
              <label htmlFor="search">search</label>
              <div className="search-icon" />
            </button>
          </div>
        </div>
        <div className="card-holder">
          <WeatherCard />
          <WeatherCard />
        </div>
        <div className="timeline-holder">
        <TimeLine />
        <Tomorrow/>
        </div>
      </div>
      <SideSection />
    </>
  );
}

export default App;
