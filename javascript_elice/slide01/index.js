// 2) Image Slider

var slider = document.querySelector("#slider");
var slides = slider.querySelector(".slides");
var slide = slides.querySelectorAll(".slide");

//현재 보여지고있는 슬라이드 순번 0번 부터 시작
var currentSlide = 0;

setInterval(function () {
  //이미지가 현재 있는위치에서 이동 위치
  var from = -(1024 * currentSlide);
  //이동 할 지점.
  var to = from - 1024;
  slides.animate(
    {
      marginLeft: [from + "px", to + "px"],
    },
    {
      duration: 500, //시간 클수록 느리게 움직임
      easing: "ease",
      iterations: 1, //반복
      fill: "both",
    }
  );
  currentSlide++;
  // 마지막 슬라이드에 도착하면 처음으로 돌아가기
  if (currentSlide === slide.length - 1) {
    currentSlide = 0;
  }
}, 3000);
