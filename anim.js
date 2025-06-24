const logo = document.getElementById('logo');
    const root = document.documentElement;

    logo.addEventListener('click', () => {
        let current = getComputedStyle(root).getPropertyValue('--animation-time').trim();
        let seconds = parseFloat(current);

        if (seconds == 3) {
            seconds = 15;
        } else {
            seconds-=3;
        }

        root.style.setProperty('--animation-time', seconds + 's');
    });