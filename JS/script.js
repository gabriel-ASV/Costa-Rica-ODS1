
function openMenu() {

    var menuMobile = document.getElementById("menuMobile");

    if (menuMobile.style.display === "block") {
        menuMobile.style.display = "none";
    } 

    else {
        menuMobile.style.display = "block";
    }      

}

var btn_BackTop = document.getElementById("btn-voltar");

btn_BackTop.addEventListener("click", function(){
    window.scrollTo(0, 0);

})

