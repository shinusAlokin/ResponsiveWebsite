
function navToggle(){
    const btn = document.getElementById("menu-btn");
    const overlay = document.getElementById('overlay');
    const menu = document.getElementById('mobile-menu')
    // const btn = document.getElementById("menu-btn");
    btn.classList.toggle('open');
    overlay.classList.toggle('overlay-show');
    menu.classList.toggle('show-menu')
    document.body.classList.toggle('stop-scrolling');
}
