function addNumbers() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = num1 + num2;
    document.getElementById('result').innerText = `Result: ${result}`;
}

function toggleDarkLightMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    // Optional: Change button text based on the current mode
    const button = document.getElementById('toggleMode');
    if (body.classList.contains('dark-mode')) {
        button.innerText = 'Switch to Light Mode';
    } else {
        button.innerText = 'Switch to Dark Mode';
    }
}

// Set default mode to light mode on initial load
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('light-mode');
});
