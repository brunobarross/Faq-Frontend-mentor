const faqItem = document.querySelectorAll('.faq__item');
const texto = document.getElementsByTagName('p');
const fundo = document.querySelector('.bg');
const fundoBranco = document.querySelector('.faq');

// remover resposta da faq

fundo.addEventListener('click', removerTexto);
function removerTexto(event){
    if(event.target == fundo){
        faqItem.forEach((item) =>{
            item.classList.remove("ativar");
        })
    
    } 
}


// adicionar rspostas ao clicar na pergunta

faqItem.forEach((divs) =>{
    divs.addEventListener('click',  ativarTexto);
});

function ativarTexto(event){
    faqItem.forEach((item) =>{
            item.classList.remove('ativar');
    });
    event.currentTarget.classList.toggle('ativar');

// sumir perguntas após 1 minuto 
    setTimeout(function tempoTexto(){
        faqItem.forEach((item) =>{
            if(item.classList.contains('ativar')){
                item.classList.remove("ativar");
            }
            
        })
    }, 60000);
}


