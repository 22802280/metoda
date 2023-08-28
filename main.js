document.querySelector(".mobile-button").addEventListener("click", function(event)
{
    document.querySelector(".mobile-menu").classList.toggle("hide");
});

document.querySelector(".fixed-menu").addEventListener('click', function(event){
    let clickTarget = event.target;
    let activeBtn = document.querySelector('.active');
    if (clickTarget.classList.contains('nav-link') ){
        clickTarget.classList.add('active');
        activeBtn.classList.remove('active')
        let mobile = document.querySelector('.mobile-menu');
        if (!mobile.classList.contains('hide')){
            mobile.classList.add('hide');
        }
    }
});
