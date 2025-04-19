const formEl = document.querySelector('.js-form');

formEl.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = formEl.elements.email.value.trim();
  const password = formEl.elements.password.value.trim();

  // Перевірка заповнених полів
  if (email === '' || password === '') {
    alert('All form fields must be filled in');
    return;
  }

  // Створення обʼєкту
  const userData = { email, password };
  console.log(userData);

  // Очищення полів
  e.target.reset();
});
