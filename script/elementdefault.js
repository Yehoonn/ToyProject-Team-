import defaultSet from "./defaultSet.js";
import styling from "./styling.js";

export default {
  rootDefault: function () {
    defaultSet.widthAndHeight(root, "100vw", "100vh");
    defaultSet.flexSetting(root, "center", "center");
  },

  rootBox: function () {
    defaultSet.elementCreate("div", root); // box
    defaultSet.widthAndHeight(root.children[0], "1500px", "500px");
    defaultSet.flexSetting(root.children[0], "center", "center");
    root.children[0].style.gap = "100px";
  },

  rootBoxItem: function () {
    for (let i = 0; i < 3; i++) {
      defaultSet.elementCreate("div", root.children[0]); // 화살표 몬스터박스 화살표
    }
    defaultSet.widthAndHeight(root.children[0].children[1], "1200px", "500px");
    defaultSet.flexSetting(root.children[0].children[1], "center", "center");

    root.children[0].children[1].style.overflow = "hidden";
  },

  MonsterContainer: function () {
    defaultSet.elementCreate("div", root.children[0].children[1]); // 몬스터 박스

    defaultSet.widthAndHeight(
      root.children[0].children[1].children[0],
      "100%",
      "100%"
    );

    defaultSet.flexSetting(
      root.children[0].children[1].children[0],
      "flex-start",
      "center"
    );
    root.children[0].children[1].children[0].style.gap = "20px";
    root.children[0].children[1].children[0].style.flexShrink = "0";
  },

  leftItem: function () {
    root.children[0].children[0].setAttribute(
      "class",
      "fa-solid fa-chevron-left"
    );
    styling.fontSetting(root.children[0].children[0], "gray", "3rem");
    root.children[0].children[0].style.cursor = "pointer";
  },

  rightItem: function () {
    root.children[0].children[2].setAttribute(
      "class",
      "fa-solid fa-chevron-right"
    );
    styling.fontSetting(root.children[0].children[2], "gray", "3rem");
    root.children[0].children[2].style.cursor = "pointer";
  },
};
