const layouts = document.querySelectorAll('.layouts > li');


layouts.forEach(item =>{
    item.addEventListener('click',function(){
        layouts.forEach(item =>{
            item.classList.remove('active-menu');
        })
        item.classList.add('active-menu');
    });
});
