class ListaData {
    constructor() {
        this.items = this.cargarItems();
    }

    cargarItems() {
        const itemsGuardados = localStorage.getItem('listaCompras');
        return itemsGuardados ? JSON.parse(itemsGuardados) : [
            { id: 1, nombre: "Manzanas", comprado: false },
            { id: 2, nombre: "Pan", comprado: false },
            { id: 3, nombre: "Leche", comprado: true }
        ];
    }

    guardarItems() {
        localStorage.setItem('listaCompras', JSON.stringify(this.items));
    }

    obtenerTodos() {
        return this.items;
    }

    agregarItem(nombre) {
        const nuevoItem = {
            id: this.items.length > 0 ? Math.max(...this.items.map(i => i.id)) + 1 : 1,
            nombre: nombre,
            comprado: false
        };
        this.items.push(nuevoItem);
        this.guardarItems();
        return nuevoItem;
    }

    toggleComprado(id) {
        const item = this.items.find(i => i.id === id);
        if (item) {
            item.comprado = !item.comprado;
            this.guardarItems();
            return true;
        }
        return false;
    }

    eliminarItem(id) {
        const index = this.items.findIndex(i => i.id === id);
        if (index !== -1) {
            this.items.splice(index, 1);
            this.guardarItems();
            return true;
        }
        return false;
    }
}