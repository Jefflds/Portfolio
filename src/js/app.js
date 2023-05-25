function scrollToSection(targetId) {
    const target = document.getElementById(targetId);
    window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
    });
}
const links = document.querySelectorAll('nav a');
links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        scrollToSection(targetId);
    });
});