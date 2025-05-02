document.addEventListener('DOMContentLoaded', () => {
    // ... previous JavaScript code ...

    // --- Local Storage for User Preferences ---
    const themeToggleButton = document.createElement('button');
    themeToggleButton.textContent = 'Toggle Theme';
    document.querySelector('header').appendChild(themeToggleButton);

    function saveThemePreference(theme) {
        localStorage.setItem('userTheme', theme);
    }

    function getThemePreference() {
        return localStorage.getItem('userTheme') || 'light'; // Default to 'light'
    }

    function applyTheme(theme) {
        document.body.className = theme; // Add a class to the body for theming
        if (theme === 'dark') {
            // Adjust other elements for dark theme if needed
            document.querySelector('header').style.backgroundColor = '#333';
            document.querySelector('header').style.color = '#f4f4f4';
        } else {
            document.querySelector('header').style.backgroundColor = '#e0f7fa';
            document.querySelector('header').style.color = '#333';
        }
        saveThemePreference(theme);
    }

    // Apply saved theme on load
    applyTheme(getThemePreference());

    themeToggleButton.addEventListener('click', () => {
        const currentTheme = getThemePreference();
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        applyTheme(newTheme);
    });

    // --- Animation Triggered by User Action ---
    const animateOnActionButton = document.createElement('button');
    animateOnActionButton.textContent = 'Animate on Action';
    document.querySelector('#animatedElement').appendChild(animateOnActionButton);

    animateOnActionButton.addEventListener('click', () => {
        animateMe.classList.add('animate');
        // Optionally remove the class after some time if you want it to run only once per click
        // setTimeout(() => {
        //     animateMe.classList.remove('animate');
        // }, 2000);
    });
});