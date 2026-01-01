/* --- GESTION MENU MOBILE --- */
function toggleMenu() {
    const nav = document.getElementById('nav-links');
    // Vérification de sécurité pour éviter les erreurs si l'élément n'existe pas
    if (nav) {
        nav.classList.toggle('active');
    }
}
// Fermer le menu si on clique sur un lien (pratique sur mobile)
document.querySelectorAll('#nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const nav = document.getElementById('nav-links');
        if (nav.classList.contains('active')) {
            nav.classList.remove('active');
        }
    });
});