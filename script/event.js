export default function event() {
  document.body.addEventListener("mouseover", function (e) {
    if (e.target === root.children[0].children[0]) {
      e.target.style.color = "black";
    }
    if (e.target === root.children[0].children[2]) {
      e.target.style.color = "black";
    }
  });

  document.body.addEventListener("mouseout", function (e) {
    if (e.target === root.children[0].children[0]) {
      e.target.style.color = "gray";
    }
    if (e.target === root.children[0].children[2]) {
      e.target.style.color = "gray";
    }
  });

  let moveValue = 0;

  function leftMove() {
    moveValue -= 285;
    return moveValue;
  }

  function rightMove() {
    moveValue += 285;
    return moveValue;
  }

  root.children[0].children[0].addEventListener("click", function (e) {
    root.children[0].children[1].children[0].style.transform = `translateX(${leftMove()}px)`;
    console.log(root.children[0].children[1].children[0].style.transform);
  });

  root.children[0].children[2].addEventListener("click", function (e) {
    root.children[0].children[1].children[0].style.transform = `translateX(${rightMove()}px)`;
    console.log(root.children[0].children[1].children[0].style.transform);
  });
}
