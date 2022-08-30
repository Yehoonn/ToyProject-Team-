import data from "./data.js";
import defaultSet from "./defaultSet.js";
import styling from "./styling.js";

export default function monsterCreate(number) {
  data.DataCall(number);

  setTimeout(() => {
    for (let i = 0; i < number; i++) {
      let monsterItem = defaultSet.elementCreate("div", monsterBox);
      defaultSet.widthAndHeight(monsterItem, "285px", "inherit");
      defaultSet.flexSetting(monsterItem, "center", "center");
      monsterItem.style.flexShrink = "0";
      monsterItem.style.flexDirection = "column";
      monsterItem.style.gap = "20px";
      monsterItem.style.cursor = "pointer";
      monsterBox.appendChild(monsterItem);

      monsterItem.addEventListener("mouseover", function () {
        styling.bgColorStyling(monsterItem, "lightgreen");
      });
      monsterItem.addEventListener("mouseout", function () {
        styling.bgColorStyling(monsterItem, "unset");
      });

      let monsterImg = defaultSet.elementCreate("img", monsterItem);
      monsterImg.src = data.dataArray.imgArray[i];
      monsterImg.pointerEvents = "none";

      let monsterTextOne = defaultSet.elementCreate("p", monsterItem);
      defaultSet.widthAndHeight(monsterTextOne, "auto", "auto");
      defaultSet.flexSetting(monsterTextOne, "center", "center");
      styling.fontSetting(monsterTextOne, "black", "2rem");
      monsterTextOne.style.borderBottom = "5px solid lightgray";
      monsterTextOne.style.paddingBottom = "15px";
      monsterTextOne.style.fontWeight = "bold";
      monsterTextOne.pointerEvents = "none";

      monsterTextOne.textContent = data.dataArray.nameArray[i];

      let monsterTextTwo = defaultSet.elementCreate("p", monsterItem);
      defaultSet.widthAndHeight(monsterTextTwo, "80%", "50px");
      defaultSet.flexSetting(monsterTextTwo, "center", "center");
      styling.fontSetting(monsterTextTwo, "black", "0.8rem");
      monsterTextTwo.style.fontWeight = "bold";
      monsterTextTwo.pointerEvents = "none";

      monsterTextTwo.textContent = data.dataArray.guideArray[i];
    }
  }, 1000);
  const monsterBox = root.children[0].children[1].children[0];
}
