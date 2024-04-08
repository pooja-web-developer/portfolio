const mobile = document.querySelector('#mobile-view');
const menuList = document.querySelector('.navbar-container');

mobile.addEventListener('click',()=>{
    menuList.classList.toggle('showmenu');
});

