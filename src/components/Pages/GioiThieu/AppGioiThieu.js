import Footer from "../ElementsHome/Footer/Footer";
import BodyGioiThieu from "./BodyGioiThieu";
import HeaderGioiThieu from "./HeaderGioiThieu";


function AppGioiThieu() {
  return (
    <div className="App">
      <HeaderGioiThieu/>
      <BodyGioiThieu/>
      <Footer/>
    </div>
  );
}

export default AppGioiThieu;