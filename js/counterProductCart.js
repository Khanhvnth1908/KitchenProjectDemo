const plusProduct = document.querySelector(".plus"); // cộng sản phẩm
const minusProduct = document.querySelector(".minus"); // trừ sản phẩm

const itemCart = document.querySelectorAll(".item-cart"); // sổ sản phẩm đã chọn trong trang

const varialble = document.querySelector(".input-value"); // số lượng của sản phẩm đã chọn



let count = 1;


plusProduct.addEventListener('click',()=>{
    varialble.values++;
})

minusProduct.addEventListener('click',()=>{
    console.log('minus');
})



// const navLinks = document.querySelectorAll('.link');

// navLinks.forEach((link) => {
//   link.addEventListener("click",()=>{

//     navLinks.forEach(link => link.classList.remove("active"));
//     link.classList.add('active');
//   })
// });
