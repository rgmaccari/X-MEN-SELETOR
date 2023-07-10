const personagens = document.querySelectorAll('.personagem');
/* 
const = variável que não muda
personagens = nome da variavel
document = toda a estrutura
querySelectorAll = seletor que analisa todos os elementos dentre class, id, tag, etc...
.personagem = Class, onde estao todos os personagens da lista
*/

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        personagem.classList.add('selecionado');
        const personagemSelecionado = document.querySelector('selecionado')
        
    })
})
/* 
personagens = const
forEach = para cada (usamos isso ao inves de selecionar item por item da lista)
personagem = class onde vai ser aplicada a ação
=> = o que vai acontecer?, chamamos de linkagem
personagem = class
addEventListener = identifica qualquer ação dentro daquela class
mouseenter = passar o mouse em cima*/