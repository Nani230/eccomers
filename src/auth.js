document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('loginButton');
    const authModal = document.getElementById('authModal');
    const closeModal = document.getElementById('closeModal');
    const tabButtons = document.querySelectorAll('[data-tab]');
    const tabContents = document.querySelectorAll('.tab-content');
    const emailForm = document.getElementById('emailForm');
    const otpForm = document.getElementById('otpForm');
    const otpButton = document.getElementById('otpButton');
    const otpInputContainer = document.getElementById('otpInputContainer');

    loginButton.addEventListener('click', () => {
        authModal.classList.remove('hidden');
    });

    closeModal.addEventListener('click', () => {
        authModal.classList.add('hidden');
    });

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabName = button.getAttribute('data-tab');
            tabButtons.forEach(btn => btn.classList.remove('border-b-2', 'border-blue-500', 'text-blue-500'));
            button.classList.add('border-b-2', 'border-blue-500', 'text-blue-500');
            tabContents.forEach(content => content.classList.add('hidden'));
            document.getElementById(`${tabName}Tab`).classList.remove('hidden');
        });
    });

    emailForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        console.log('Email Sign-In', email, password);
        // Implement your email sign-in logic here
    });

    otpForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('emailOtp').value;
        const otp = document.getElementById('otp').value;
        if (otpButton.textContent === 'Get OTP') {
            console.log('OTP requested for:', email);
            otpButton.textContent = 'Verify OTP';
            otpInputContainer.classList.remove('hidden');
        } else {
            console.log('OTP verification:', otp);
            // Implement your OTP verification logic here
        }
    });

    document.getElementById('googleTab').querySelector('button').addEventListener('click', () => {
        console.log('Google Sign-In');
        // Implement your Google sign-in logic here
    });
});

