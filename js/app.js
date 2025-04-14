document.addEventListener('DOMContentLoaded', () => {
    const logic = new ListaLogic();
    const listaItems = document.getElementById('listaItems');
    const agregarBtn = document.getElementById('agregarItemBtn');
    const nuevoItemInput = document.getElementById('nuevoItemInput');
    const contadorItems = document.getElementById('contadorItems');

    function renderizarLista() {
        const items = logic.obtenerItems();
        const contador = logic.contarItems();
        
        listaItems.innerHTML = '';
        
        items.forEach(item => {
            const li = document.createElement('li');
            li.className = `item ${item.comprado ? 'comprado' : ''}`;
            
            li.innerHTML = `
                <span>${item.nombre}</span>
                <div class="item-acciones">
                    <button class="toggle" data-id="${item.id}">
                        ${item.comprado ? 'Desmarcar' : 'Comprar'}
                    </button>
                    <button class="eliminar" data-id="${item.id}">Eliminar</button>
                </div>
            `;
            
            listaItems.appendChild(li);
        });
        
        contadorItems.textContent = `
            ${contador.total} items (${contador.pendientes} por comprar, ${contador.comprados} comprados)
        `;
    }

    function agregarItem() {
        const nombre = nuevoItemInput.value.trim();
        if (nombre) {
            logic.agregarItem(nombre);
            nuevoItemInput.value = '';
            renderizarLista();
        }
    }

    // Event listeners
    agregarBtn.addEventListener('click', agregarItem);
    nuevoItemInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            agregarItem();
        }
    });

    listaItems.addEventListener('click', (e) => {
        if (e.target.classList.contains('toggle')) {
            const id = parseInt(e.target.getAttribute('data-id'));
            logic.toggleEstadoItem(id);
            renderizarLista();
        }
        
        if (e.target.classList.contains('eliminar')) {
            const id = parseInt(e.target.getAttribute('data-id'));
            if (confirm('¿Eliminar este item de la lista?')) {
                logic.eliminarItem(id);
                renderizarLista();
            }
        }
    });

    // Renderizar lista al cargar
    renderizarLista();
});