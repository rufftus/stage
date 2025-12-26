/* --- GESTION MENU MOBILE --- */
function toggleMenu() {
    const nav = document.getElementById('nav-links');
    // Vérification de sécurité pour éviter les erreurs si l'élément n'existe pas
    if (nav) {
        nav.classList.toggle('active');
    }
}