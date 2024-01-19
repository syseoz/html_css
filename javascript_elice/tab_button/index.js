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

// 3) Tabs

var links = document.querySelectorAll(".tabs-list li a");

var items = document.querySelectorAll(".tabs-list li");

for (var i = 0; i < links.length; i++) {
  links[i].onclick = function (e) {
    //href 이동 기능을 일단 정지한다
    e.preventDefault();
  };
}

//클릭 발생시
for (var i = 0; i < items.length; i++) {
  items[i].onclick = function () {
    //a태그 tab id 가져온다
    var tabId = this.querySelector("a").getAttribute("href");
    console.log(this.classList);
    document
      .querySelectorAll(".tabs-list li, .tabs div.tab")
      .forEach(function (item) {
        item.classList.remove("active");
        console.log(item);
      });

    //active 클래스 추가 하면
    //css 에서 active클래스에 대해 화면 설정
    document.querySelector(tabId).classList.add("active");
    this.classList.add("active");
  };
}
