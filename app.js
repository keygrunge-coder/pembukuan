class DataManager {
    constructor() { this.data = JSON.parse(localStorage.getItem('bukudata')) || []; }
    save() { localStorage.setItem('bukudata', JSON.stringify(this.data)); }
    addNota(nota) { this.data.push({ ...nota, id: Date.now(), status: 'BELUM LUNAS', items: [], transfers: [] }); this.save(); }
    getSummary() {
        return this.data.reduce((acc, curr) => {
            acc.total += curr.items.reduce((a, b) => a + (b.qty * b.harga), 0);
            acc.terbayar += curr.transfers.reduce((a, b) => a + b.nominal, 0);
            return acc;
        }, { total: 0, terbayar: 0 });
    }
}

const dataManager = new DataManager();
const router = {
    navigate: (page) => {
        const content = document.getElementById('content');
        content.innerHTML = `<h1>${page.toUpperCase()}</h1>`; // Implementasi router sederhana
    }
};

window.addEventListener('load', () => {
    setTimeout(() => document.getElementById('splash').classList.add('hidden'), 1000);
    if ('serviceWorker' in navigator) navigator.serviceWorker.register('service-worker.js');
});
