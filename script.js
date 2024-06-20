var iconShareblock = document.querySelector('.icon-share'),
    iShare = document.querySelector('.i-share'),
    networks = document.querySelector('.network');

iconShareblock.addEventListener('click', function(){
    if (networks.style.visibility === 'hidden' || networks.style.visibility === ''){
        networks.style.visibility = 'visible';
        iShare.style.fill = 'var(--light-grayish-blue)';
    } else {
        networks.style.visibility = 'hidden';
        this.style.background = '';
        iShare.style.fill = '';
    }
});
