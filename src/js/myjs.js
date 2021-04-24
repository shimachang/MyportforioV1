//   document.getElementById("menuButton").addEventListener("click", function(){
//   this.classList.toggle("active");
//   document.getElementById("nav").classList.toggle("active");
//   document.getElementById("mask").classList.toggle("active");
// })


// const perentMenu = document.querySelectorAll(".menu > li > a");
// for(let i=0 ;i<perentMenu.length ;i++){
//   perentMenu[i].addEventListener("click",function(){
//     this.nextElementSibling.classList.toggle("active");
//   })
// }
// ハンバーガーメニュー
const menuButton = document.querySelector('#menuButton');
const nav = document.querySelector('#nav');
const mask = document.querySelector('#mask');

menuButton.addEventListener('click', e => {
  e.preventDefault();
  menuButton.classList.toggle('active');
  nav.classList.toggle('active');
  mask.classList.toggle('active');
})

// ドロップダウンメニュー
const menuLink = document.querySelectorAll('.menu > li > a');
const dropMenus = document.querySelectorAll('.drop-menu');

for (let i = 0; i < menuLink.length; i++) {
  menuLink[i].addEventListener('click', e => {
    const clickDropMenu = menuLink[i].nextElementSibling;
    const isActive = clickDropMenu.classList.contains('active');
    for (let i = 0; i < dropMenus.length; i++) {
      dropMenus[i].classList.remove('active');
    }
    if (!isActive) {
      clickDropMenu.classList.add('active');
    }
  })
}

// 指定領域以外をクリック
document.addEventListener('click', e => {
  // ハンバーガー
  if (!e.target.closest('#navi') && !e.target.closest('#menuButton')) {
    menuButton.classList.remove('active');
    nav.classList.remove('active');
    mask.classList.remove('active');
  }

  // ドロップダウン
  if (!e.target.closest('.drop-menu') && !e.target.closest('.menu > li > a')) {
    for (let i = 0; i < dropMenus.length; i++) {
      dropMenus[i].classList.remove('active');
    }
  }
})