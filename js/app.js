const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const countArr = [1,2,3];
const countFre = [1,2];

//-------------------------------------------Slider(Banner)

const IMG_WIDTH = window.innerWidth;
const slideContainer = $(".slides");
const slideImage = [...$$(".slide")];

const nextBtn = $("#next");
const preBtn = $("#pre");

slideContainer.style.width = IMG_WIDTH + "px";

let counter = 0;

function next() {
  if (counter < slideImage.length - 1) {
    counter++;
  } else {
    counter = 0;
  }
  slideContainer.style.transition = "transform 0.4s ease-in-out";
  slideContainer.style.transform = "translateX(-" + IMG_WIDTH * counter + "px)";
}


setInterval(() => {
    next();
  }, 5000);

nextBtn.addEventListener('click',()=>{
    if(counter < slideImage.length - 1){
      counter++;
    }else{
      counter=0;
    }
    slideContainer.style.transition = "transform 0.4s ease-in-out";
    slideContainer.style.transform = 'translateX('+ (-IMG_WIDTH * counter) + 'px)';
});

preBtn.addEventListener('click',()=>{
    if(counter == 0){
      counter = slideImage.length - 1;
    }
    else{
      counter --;
    }
    slideContainer.style.transition = "transform 0.4s ease-in-out";
    slideContainer.style.transform = 'translateX('+ (-IMG_WIDTH * counter) + 'px)';
});



//------------------------------------Product Demo

const productList = $('.product-list');
const prouductItem = [...$$('.product')];

const nextPro = $('#nextPro');
const prePro = $('#prePro');

const imgProduct = 270;

productList.style.width = prouductItem.length * imgProduct + "px";

let count = 0;

nextPro.addEventListener('click',()=>{
    if(count < countArr.length - 1){
      count++;
    }else{
      count=0;
    }
    productList.style.transition = "transform 0.4s ease-in-out";
    productList.style.transform = 'translateX('+ (- imgProduct * count) + 'px)';
});

prePro.addEventListener('click',()=>{
    if(count == 0){
      count = countArr.length - 1;
    }
    else{
      count --;
    }
    productList.style.transition = "transform 0.4s ease-in-out";
    productList.style.transform = 'translateX('+ (-imgProduct * count) + 'px)';
});





//-----------------------------------------------Product Feature



const featureList = $('.feature-list');

const nextFea = $('#nextFea');
const preFea = $('#preFea');


featureList.style.width = prouductItem.length * imgProduct + "px";

let index = 0;

nextFea.addEventListener('click',()=>{
    if(index < countFre.length - 1){
      index++;
    }else{
      index=0;
    }
    featureList.style.transition = "transform 0.4s ease-in-out";
    featureList.style.transform = 'translateX('+ (- imgProduct * index) + 'px)';
});

preFea.addEventListener('click',()=>{
    if(index == 0){
      index = countFre.length - 1;
    }
    else{
      index --;
    }
    featureList.style.transition = "transform 0.4s ease-in-out";
    featureList.style.transform = 'translateX('+ (-imgProduct * index) + 'px)';
});




//

const navLinks = document.querySelectorAll('.link');

navLinks.forEach((link) => {
  link.addEventListener("click",()=>{

    navLinks.forEach(link => link.classList.remove("active"));
    link.classList.add('active');
  })
});