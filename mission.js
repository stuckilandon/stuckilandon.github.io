const themeSelector = document.getElementById('theme-selector');
const byuiLogo = document.getElementById('byu-logo');
var h2Element = document.querySelector('h2');
themeSelector.addEventListener('change',changeTheme);

function changeTheme() {
    if (themeSelector.value === 'Dark Theme') {
        document.body.setAttribute('class', 'dark');
        byuiLogo.src = 'byui-logo_white.png';
        h2Element.style.color = '#00bbff';

    } else if (themeSelector.value === 'Light Theme') {
        document.body.setAttribute('class', 'light');
        byuiLogo.src = 'byui-logo_blue.webp';
        h2Element.style.color = '#006EB6';
    }
}
