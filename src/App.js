import Header from "./components/Header";
import Mount from "./components/BannerMount";
import CollapseCard from "./components/CollapseCard";
// import Banner from "./components/Banner";
// import HousingList from "./components/HousingList";
// import SlideShow from "./components/Slide";

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Mount/>
      </div>
      <div>
        <CollapseCard/>
      </div>
      {/* <div>
        <Banner />
      </div>
      <div>
        <HousingList />
      </div> */}
      {/* <div>
        <SlideShow />
      </div> */}
    </div>
  );
}
export default App;
