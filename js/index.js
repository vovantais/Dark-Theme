const handleChangeTheme = () => {
    const darkMode = 
    document.querySelector('.dark-mode');
    darkMode.addEventListener('click', e => {
        document.body.classList.toggle('dark');
    })
}
handleChangeTheme();