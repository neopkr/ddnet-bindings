// <i class="bi bi-caret-down"></i> down-fill for fill v

document.querySelectorAll('.dropdown-toggle').forEach(e => {
    e.addEventListener('click', function() {
        const dropdown = e.nextElementSibling; // Obtiene el siguiente div después del h4 que se clicó
        const caret = e.querySelector('.caret-anim-down'); // Obtiene la flecha dentro del h4 clicado
        
        if (dropdown.style.display === 'block' || dropdown.style.display === '') {
            dropdown.style.display = 'none';
            caret.classList.replace("bi-caret-down", "bi-caret-up-fill");
        } else {
            dropdown.style.display = 'block';
            caret.classList.replace("bi-caret-up-fill", "bi-caret-down");
        }
    });
});