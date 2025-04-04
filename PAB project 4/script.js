const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('mouseover', () => {
    search.classList.add('active')
    input.focus()
})

btn.addEventListener('mouseout', () => {
    setTimeout(() => {
        if (document.activeElement !== input && !search.matches(':hover')) {
            search.classList.remove('active');
        }
    }, 500);
});

input.addEventListener('focus', () => {
    search.classList.add('active')
})

input.addEventListener('blur', () => {
    setTimeout(() => {
        if (!search.matches(':hover')) {
            search.classList.remove('active');
        }
    }, 500);
});
