//  메뉴
$('.menu_btn').click(function(){
  $('.menu_btn').toggleClass('open')
})


// 슬라이더
const swiper = new Swiper('.swiper', {
 
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: "fraction",
  },

  // Navigation arrows
  navigation: {
    nextEl: '.nextBtn',
    prevEl: '.prevBtn',
  },
});

//로고(h1)을 클릭하면 첫 시작 화면으로
$('h1').click(function(){
  swiper.slideTo(0)
})

$('nav li').click(function(){
  swiper.slideTo($(this).index())
  $('.menu_btn').removeClass('open')
})
