// 요소를 만들고 width와 height, flex 등 기본적인 값을 설정하는 함수가 모여있는 객체
export default {
  // 새로운 HTML 요소를 생성하는 함수 매개변수는 (원하는 html 타입,만들 요소의 개수, 부모 html 요소)이다
  elementCreate: function (element, parent) {
    let newElement = document.createElement(element);
    return parent.appendChild(newElement);
  },

  // 요소의 width와 height 값을 설정하는 함수
  widthAndHeight: function (element, width, height) {
    element.style.width = width;
    element.style.height = height;
  },

  // flex 스타일을 설정하는 함수
  flexSetting: function (element, justify, align) {
    element.style.display = "flex";
    element.style.justifyContent = justify;
    element.style.alignItems = align;
  },
  // body margin, padding 초기화 함수
  reset: function () {
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.boxSizing = "border-box";
    document.body.style.userSelect = "none";
    document.body.style.transition = "0.5s";
    document.body.style.backgroundColor = "salmon";
  },
};
