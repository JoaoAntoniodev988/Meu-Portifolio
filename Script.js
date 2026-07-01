// ==========================================================================
// 1. SISTEMA DE FILTROS DO FEED (Manipulação de Classes e Atributos Data)
// ==========================================================================

// Selecionamos todos os botões de filtro e todos os cards de conteúdo
const filterButtons = document.querySelectorAll('.filter-btn');
const postCards = document.querySelectorAll('.post-card');

// Para cada botão de filtro encontrado, adicionamos um "ouvinte" de clique
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        
        // A. Remove a classe 'active' do botão anterior e coloca no botão clicado
        document.querySelector('.filter-btn.active').classList.remove('active');
        button.classList.add('active');

        // B. Captura a categoria que queremos filtrar (ex: "vagas", "stack", "tudo")
        const filterValue = button.getAttribute('data-filter');

        // C. Passa por cada card avaliando se ele deve aparecer ou sumir
        postCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');

            // Se o filtro for "tudo" ou bater com a categoria do card, ele aparece
            if (filterValue === 'tudo' || filterValue === cardCategory) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none'; // Caso contrário, ele é ocultado
            }
        });
    });
});


// ==========================================================================
// 2. PAINEL DE PRODUTIVIDADE (Criação de Elementos Dinâmicos no DOM)
// ==========================================================================

// Selecionamos os elementos da lista de tarefas pelas suas IDs do HTML
const todoInput = document.getElementById('todo-input');
const addTodoBtn = document.getElementById('add-todo-btn');
const todoList = document.getElementById('todo-list');

// Função responsável por construir e adicionar a tarefa na tela
function addTask() {
    const taskText = todoInput.value.trim(); // Captura o texto e remove espaços vazios

    // Validação básica: se o input estiver vazio, não faz nada
    if (taskText === "") {
        alert("Por favor, digite uma meta antes de adicionar!");
        return;
    }

    // Criamos um novo elemento <li> na memória do navegador
    const newLi = document.createElement('li');
    newLi.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn" style="background:none; border:none; color:#ff4d4d; cursor:pointer; font-weight:bold;">X</button>
    `;

    // Adiciona interatividade 1: Clicar no texto risca/conclui a tarefa
    newLi.addEventListener('click', (e) => {
        // Evita que o clique no botão de excluir ative o efeito de riscar
        if (e.target.classList.contains('delete-btn')) return; 
        newLi.classList.toggle('completed');
    });

    // Adiciona interatividade 2: Clicar no 'X' remove a tarefa da tela
    const deleteBtn = newLi.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
        newLi.remove();
    });

    // Coloca o novo <li> criado dentro da nossa <ul> no HTML
    todoList.appendChild(newLi);

    // Limpa o campo de entrada para a próxima tarefa e devolve o foco para ele
    todoInput.value = "";
    todoInput.focus();
}

// Escuta o clique no botão "+" para disparar a função
addTodoBtn.addEventListener('click', addTask);

// Escuta a tecla "Enter" no teclado para facilitar a adição da tarefa
todoInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});