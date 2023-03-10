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
const localTheme = localStorage.getItem("theme");
const themeSwitch = document.querySelector('#theme-switch');

if (!localTheme) {
    localStorage.setItem("theme", "dark");
    document.body.classList.add("dark");
}
else if (localTheme === "dark") document.body.classList.add("dark");

const transitionTime = 0.5;
document.body.style.transition = `background-color ${transitionTime}s ease, color ${transitionTime}s ease`;

const toggleDarkMode = () => {
    document.body.classList.toggle("dark");
    // Save Theme
    const theme = document.body.classList.contains("dark");
    localStorage.setItem("theme", theme ? "dark" : "light");

    return theme;
};

themeSwitch.addEventListener('change', () => {
    toggleDarkMode();
})