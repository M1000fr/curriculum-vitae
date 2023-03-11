// Auto Fill My Age
var today = new Date(),
    birthDate = new Date("2003-07-04"),
    age = today.getFullYear() - birthDate.getFullYear(),
    m = today.getMonth() - birthDate.getMonth();

if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
}

const ageEl = document.querySelector("#age");
ageEl.textContent = age;

// Dark Mode
const localTheme = localStorage.getItem("theme"),
    themeSwitch = document.querySelector('#theme-switch'),
    transitionTime = 0.5;

document.body.style.transition = `background-color ${transitionTime}s ease, color ${transitionTime}s ease`;

const toggleDarkMode = () => {
    const isDarkMode = document.body.classList.contains("dark");
    document.body.classList.toggle("dark");
    themeSwitch.checked = !isDarkMode;
    // Save Theme
    localStorage.setItem("theme", isDarkMode ? "light" : "dark");
};

if (!localTheme || localTheme === "dark") toggleDarkMode();
themeSwitch.addEventListener('change', () => {
    toggleDarkMode();
})
