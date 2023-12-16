import Footer from "../ElementsHome/Footer/Footer";
import BodyTinTuc from "./BodyTinTuc";
import HeaderNews from "./HeaderTinTuc";

function AppTinTuc() {
  return (
    <div className="App">
      <HeaderNews/>
      <BodyTinTuc/>
      <Footer/>
    </div>
  );
}

export default AppTinTuc;