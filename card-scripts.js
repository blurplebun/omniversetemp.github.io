/* --------------------------
    Settings
    -------------------------- */
    
document.addEventListener('click', (e) => {
    if (e.target.id === 'modeSwitch') {
        e.preventDefault();
        console.log('Mode Switch clicked');
        toggleViewMode();
    }
});

// init card scripts
function cardScriptHandler(menu, label) {
}