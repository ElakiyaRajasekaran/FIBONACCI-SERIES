function fibonacci(n) {
    const sequence = [0, 1];
    for (let i = 2; i <= n; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    return sequence;
}

function generatePassword() {
    const lengthInput = document.getElementById('lengthInput');
    const length = parseInt(lengthInput.value);

    if (isNaN(length) || length < 8 || length > 20) {
        alert('Please enter a valid password length between 8 and 20.');
        return;
    }

    const fibonacciSequence = fibonacci(length);
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let password = '';

    for (let i = 0; i < length; i++) {
        const index = fibonacciSequence[i] % characters.length;
        password += characters.charAt(index);
    }

    const passwordOutput = document.getElementById('passwordOutput');
    passwordOutput.value = password;
}

function copyToClipboard() {
    const passwordOutput = document.getElementById('passwordOutput');
    passwordOutput.select();
    document.execCommand('copy');
    alert('Password copied to clipboard!');
}
