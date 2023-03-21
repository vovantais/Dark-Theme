const handleChangeTheme = () => {
    const darkMode = document.querySelector('.dark-mode');
    darkMode.addEventListener('click', event => {
        document.body.classList.toggle('dark');
    });
}

handleChangeTheme();

