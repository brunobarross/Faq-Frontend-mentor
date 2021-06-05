const faqItem = document.querySelectorAll('.faq__item');
const texto = document.getElementsByTagName('p');
const fora = document.querySelector('.faq__container');



faqItem.forEach((divs) =>{
    divs.addEventListener('click', ativarTexto);

});


function ativarTexto(event){
    faqItem.forEach((item) =>{
        item.classList.remove('ativar');
    })

    event.currentTarget.classList.add('ativar');
    
}