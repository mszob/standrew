// this one is jut to wait for the page to load
document.addEventListener('DOMContentLoaded', () => {
    const themeStylesheet = document.getElementById('theme');
    const faviconTheme = document.getElementById('favicon');
    const storedTheme = localStorage.getItem('theme');
    const storedFavicon = localStorage.getItem('favicon');
    if(storedTheme){
        themeStylesheet.href = storedTheme;
    }
    if(storedFavicon){
       faviconTheme.href = storedFavicon;
  }
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        // if it's light -> go dark
        if(themeStylesheet.href.includes('light')){
            themeStylesheet.href = 'dark.css';
            faviconTheme.href = 'assets/icons/favicon-dark.png';
            //themeToggle.innerText = 'Switch to light mode';
        //} else if(themeStylesheet.href.includes('dark')){
          //themeStylesheet.href = 'minimal.css';
          //themeToggle.innerText = 'Switch to light mode';
        } else {
            // if it's dark -> go light
            themeStylesheet.href = 'light.css';
            faviconTheme.href = 'assets/icons/favicon.png';
            //themeToggle.innerText = 'Switch to dark mode';
        }
        // save the preference to localStorage
        localStorage.setItem('theme',themeStylesheet.href)
        localStorage.setItem('favicon',faviconTheme.href)
    })
})

matcher = window.matchMedia('(prefers-color-scheme: dark)');
matcher.addListener(onUpdate);
onUpdate();

lightSchemeIcon = document.querySelector('link#light-scheme-icon');
darkSchemeIcon = document.querySelector('link#dark-scheme-icon');

function onUpdate() {
  if (matcher.matches) {
    lightSchemeIcon.remove();
    document.head.append(darkSchemeIcon);
  } else {
    document.head.append(lightSchemeIcon);
    darkSchemeIcon.remove();
  }
}