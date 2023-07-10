/* OBJETIVO 1 - ao passar o mouse em cima, adicionar a classe "selecionado" ao elemento*/
const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        
        if(window.innerWidth < 450){
            window.scrollTo({top: 0, behavior: 'smooth'})
        };

        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');
        personagem.classList.add('selecionado');

/* OBJETIVO 2 - ao passar o mouse em cima, alterar a imagem, nome e descrição */
        const imagemPersonagemGrande = document.querySelector('.personagem-grande');
        const idPersonagem = personagem.attributes.id.value;
        imagemPersonagemGrande.src = `./assets/card-${idPersonagem}.png`;

        const nomePersonagem = document.getElementById('nome-personagem');
        nomePersonagem.innerText = personagem.getAttribute('data-name');

        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');
    })
})

/* 
const = variável que não muda
document = toda a estrutura
querySelectorAll = seletor que analisa todos os elementos dentre class, id, tag, etc...

forEach = para cada (usamos isso ao inves de selecionar item por item da lista)
=> = o que vai acontecer?, especie de linkagem
addEventListener = identifica qualquer ação dentro daquela class
mouseenter = passar o mouse em cima
 */