import Carousel from "./Carousel";
import "./carousel.css";
const images = [
  "https://bizweb.dktcdn.net/100/482/001/themes/906081/assets/home_slider_item_image_1.png?1698127667797",
  "https://bizweb.dktcdn.net/100/482/001/themes/906081/assets/home_slider_item_image_3.png?1698127667797",
  "https://bizweb.dktcdn.net/100/482/001/themes/906081/assets/home_slider_item_image_2.png?1698127667797",
  "https://bizweb.dktcdn.net/100/499/932/themes/926650/assets/slider_1.jpg?1701337508996",
  "https://bizweb.dktcdn.net/100/499/932/themes/926650/assets/slider_2.jpg?1701337508996",
  "https://bizweb.dktcdn.net/100/482/001/themes/906081/assets/home_product_pos_image.png?1698127667797",
  
  
  
];
function Slidebar() {
  return (
        <Carousel images={images} />
  );
}
export default Slidebar;