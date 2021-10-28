/**
 * Theming.
 *
 * Supports the preferred color scheme of the operation system as well as
 * the theme choice of the user.
 *
 */

(function () {
    const themeToggle = document.querySelector(".theme-toggle");
    const chosenTheme =
        window.localStorage && window.localStorage.getItem("theme");
    let chosenThemeIsDark = chosenTheme == "dark";
    let chosenThemeIsLight = chosenTheme == "light";
    const header = document.getElementById("header");
    const doge = document.querySelector(".kabosu");
    const logo = document.querySelector(".logo");
    const thought = document.querySelector(".thought");
    const nose = document.getElementById("nose");
    const leftEye = document.getElementById("left-eye");
    const rightEye = document.getElementById("right-eye");

    // Detect the color scheme the operating system prefers.
    function detectOSColorTheme() {
        if (chosenThemeIsDark) {
            document.documentElement.setAttribute("data-theme", "dark");
        } else if (chosenThemeIsLight) {
            document.documentElement.setAttribute("data-theme", "light");
        } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
            document.documentElement.setAttribute("data-theme", "light");
            localStorage.setItem("theme", "light");
            chosenThemeIsLight = true
        } else {
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
            chosenThemeIsDark = true
        }
    }

    // Switch the theme.
    function switchTheme(e) {
        if (chosenThemeIsDark) {
            localStorage.setItem("theme", "light");
        } else {
            localStorage.setItem("theme", "dark");
        }

        detectOSColorTheme();
        window.location.reload();
    }

    // Event listener
    if (themeToggle) {
        themeToggle.addEventListener("click", switchTheme, false);
        window
            .matchMedia("(prefers-color-scheme: dark)")
            .addEventListener("change", (e) => e.matches && detectOSColorTheme());
        window
            .matchMedia("(prefers-color-scheme: light)")
            .addEventListener("change", (e) => e.matches && detectOSColorTheme());

        detectOSColorTheme();
    } else {
        localStorage.removeItem("theme");
    }

    // Cycle the logo images
    window.setInterval(() => {
        logo.classList.toggle("coin")
    }, 5000)


    // Shrink the navbar when scrolling
    if (header) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 10) {
                header.classList.add("minimize");
            } else {
                header.classList.remove("minimize");
            }
        });
    }

    //Handle the doge eye animations plus click on the nose
    if (doge) {
        let leftEyeX = 0
        let rightEyeX = 0

        var count = 200;
        var defaults = {
            origin: {x: 0.8}
        };

        function fire(particleRatio, opts) {
            confetti(Object.assign({}, defaults, opts, {
                particleCount: Math.floor(count * particleRatio)
            }));
        }

        nose.addEventListener("mousedown", () => {
            if (confetti) {
                fire(0.25, {
                    spread: 26,
                    startVelocity: 55,
                });
                fire(0.2, {
                    spread: 60,
                });
                fire(0.35, {
                    spread: 100,
                    decay: 0.91,
                    scalar: 0.8
                });
                fire(0.1, {
                    spread: 120,
                    startVelocity: 25,
                    decay: 0.92,
                    scalar: 1.2
                });
                fire(0.1, {
                    spread: 120,
                    startVelocity: 45,
                });
            }
        });

        window.addEventListener("mousemove", (e) => {
            const {clientX, clientY} = e;
            const {clientWidth, clientHeight} = document.documentElement;
            const posX = ((clientWidth / 2 - clientX) * 30) / clientWidth;
            const posY = ((clientHeight / 2 - clientY) * 10) / clientHeight;

            if (posX > 1) {
                leftEyeX = 1
                rightEyeX = 1
            } else if (posX < -13) {
                leftEyeX = -13
            } else {
                leftEyeX = posX
                rightEyeX = posX
            }
            if (posX > 1) {
                rightEyeX = 1
            } else if (posX < -9) {
                rightEyeX = -9
            } else {
                rightEyeX = posX
            }
            leftEye.style.transform = `translate(${-leftEyeX}px, ${-posY}px)`;
            rightEye.style.transform = `translate(${-rightEyeX}px, ${-posY}px)`;
        });
    }
})();
