const faqItem = document.querySelectorAll('.faq__item');
const texto = document.getElementsByTagName('p');
const fora = document.querySelector('.faq__container');


faqItem.forEach((divs) =>{
    divs.addEventListener('click',  ativarTexto);

});


function ativarTexto(event){

    event.currentTarget.classList.toggle('ativar');
}
