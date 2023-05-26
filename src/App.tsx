import "./App.css";
import Header from "./components/Header";
import SideSection from "./components/SideSection";
import Card from "./components/Card";
import TimeLine from "./components/Timeline";
import Tomorrow from "./components/ui/Tomorrow";
function App() {
  return (
    <div className="main">
      <div className="container">
        <section>
          <Header/>
          <div className="cardholder">
          <Card/>
          <Card/>
          </div>
          <div className="bottomholder">
          <TimeLine/>
          <Tomorrow/>
          </div>
        </section>
          <SideSection/>
      </div>
    </div>
  );
}

export default App;
