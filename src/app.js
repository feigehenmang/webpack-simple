import marvel from "./assets/marvel.jpg";
import { createImg } from "./utils";
// import dataJson from "./data.json";
import "./style/app.css";
console.log(marvel);
// console.log(dataJson);
console.log($);
console.log(_.assign);
console.log(Vue);
const bodyImg = createImg(marvel).then(img=>document.body.appendChild(img))
// console.log(bodyImg);
// document.body.appendChild();