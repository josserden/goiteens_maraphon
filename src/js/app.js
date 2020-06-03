document.querySelector('.open').addEventListener('click', () => {
    document.querySelector('.backdrop').classList.add('is-visible');
});

document.querySelector('.btn-close').addEventListener('click', () => {
    document.querySelector('.backdrop').classList.remove('is-visible');
});
