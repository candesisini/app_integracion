class ListaLogic {
    constructor() {
        this.dataLayer = new ListaData();
    }

    obtenerItems() {
        return this.dataLayer.obtenerTodos();
    }

    agregarItem(nombre) {
        return this.dataLayer.agregarItem(nombre);
    }

    toggleEstadoItem(id) {
        return this.dataLayer.toggleComprado(id);
    }

    eliminarItem(id) {
        return this.dataLayer.eliminarItem(id);
    }

    contarItems() {
        const items = this.obtenerItems();
        return {
            total: items.length,
            comprados: items.filter(i => i.comprado).length,
            pendientes: items.filter(i => !i.comprado).length
        };
    }
}
