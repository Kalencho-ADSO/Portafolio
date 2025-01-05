window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content'); // Añade esta línea
    const headerBottom = header.getBoundingClientRect().bottom;

    if (headerBottom <= 0) {
        sidebar.style.display = 'block';
        mainContent.classList.add('with-sidebar'); // Añade esta línea
    } else {
        sidebar.style.display = 'none';
        mainContent.classList.remove('with-sidebar'); // Añade esta línea
    }
});
