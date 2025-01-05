window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const sidebar = document.querySelector('.sidebar');
    const headerBottom = header.getBoundingClientRect().bottom;

    if (headerBottom <= 0) {
        sidebar.style.display = 'block';
    } else {
        sidebar.style.display = 'none';
    }
});
