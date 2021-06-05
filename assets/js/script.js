const faqItem = document.querySelectorAll('.faq__item');
const resposta = document.querySelector('.faq__item p');
const titulo = document.querySelectorAll('#faq__item h3');
const pagina = document.documentElement;


titulo.forEach((item) => {
    item.addEventListener('click', ativarTexto);
    function ativarTexto(el){
            if(el.target == item){
                document.body.classList.toggle('ativo');
                resposta.setAttribute('id', 'resposta');
            } 
          
        }
    });








