let darkMode = localStorage.getItem('darkMode');
const button = document.getElementById("mode");

const enableDarkMode = () => {
    document.body.classList.add("darkMode");
    localStorage.setItem("darkMode", "active");
};

const disableDarkMode = () => {
    document.body.classList.remove("darkMode");
    localStorage.setItem("darkMode", "null");
};

// Check the current mode on page load
if (darkMode === "active") {
    enableDarkMode();
}

// Toggle dark mode on button click
button.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode"); // Re-fetch the current mode
    if (darkMode !== "active") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});