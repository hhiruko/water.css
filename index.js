const darkSelector = 'theme-dark';
const lightSelector = 'theme-light';

const updateVersionInfoTable = (selector) => {
    const versionInfoTableThemeCell = document.querySelector('#version-info-table-theme-cell');

    if(selector === darkSelector || selector === lightSelector){
        versionInfoTableThemeCell.innerHTML = `Theme is forced to <code>${selector}.</code>`;
    } else {
        versionInfoTableThemeCell.innerHTML = `
            Respects user-defined theme settings using <a style="--links: var(--code)" href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme" target="_blank" rel="noopener"><code>prefers-color-scheme</code></a>.
            Light in browsers where the theme settings can't be detected.
        `;
    }
}

document.querySelector('#theme-form').addEventListener('change', (e) => {
    const body = document.querySelector('body');
    const themeExampleCode = document.querySelector('#theme-example-code');

    let selector = '';
    switch(e.target.value){
        case 'dark': selector = darkSelector; break;
        case 'light': selector = lightSelector; break;
        default:
    }

    updateVersionInfoTable(selector);

    if (selector === '') {
        body.classList.remove(darkSelector);
        body.classList.remove(lightSelector);

        themeExampleCode.innerHTML = `&lt;body&gt;<br>    ...<br>&lt;/body&gt;`;

        return;
    }

    if (selector === darkSelector) {
        body.classList.remove(lightSelector);
        body.classList.add(darkSelector);
    }

    if (selector === lightSelector) {
        body.classList.remove(darkSelector);
        body.classList.add(lightSelector);
    }


    themeExampleCode.innerHTML = `&lt;body class="${selector}"&gt;<br>    ...<br>&lt;/body&gt;`;
});

updateVersionInfoTable();

document.querySelector('#dialog-trigger').addEventListener('click', () => {
    document.querySelector('#dialog').showModal();
})