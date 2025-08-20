document.addEventListener("DOMContentLoaded", () => {
    const textInput = document.getElementById("textInput");
    const countDisplay = document.getElementById("countDisplay");

    const updateCount = () => {
        const content = textInput.value;
        const lineBreaks = (content.match(/\n/g) || []).length;
        countDisplay.textContent = content.length - lineBreaks;
    };

    textInput.addEventListener("input", updateCount);
});
