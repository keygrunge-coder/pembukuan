const app = {
    init: () => {
        window.addEventListener('load', () => {
            setTimeout(() => {
                document.getElementById('splash').style.opacity = '0';
                setTimeout(() => document.getElementById('splash').remove(), 500);
            }, 800);
        });

        document.getElementById('menuBtn').addEventListener('click', () => {
            document.getElementById('drawer').classList.add('show');
            document.getElementById('overlay').classList.add('show');
        });

        document.getElementById('overlay').addEventListener('click', () => {
            document.getElementById('drawer').classList.remove('show');
            document.getElementById('overlay').classList.remove('show');
        });

        document.getElementById('fab').addEventListener('click', () => {
            alert('Fitur SRF Tambah Data Aktif!');
        });
    },
    navigate: (page) => {
        document.getElementById('pageTitle').innerText = page.charAt(0).toUpperCase() + page.slice(1);
        document.getElementById('drawer').classList.remove('show');
        document.getElementById('overlay').classList.remove('show');
    }
};

app.init();
