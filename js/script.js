// Данные загружаются автоматически при открытии страницы[cite: 2]
axios.get('https://jsonplaceholder.typicode.com/users')
  .then(function(response) {
    const users = response.data;  // массив из 10 пользователей[cite: 2]
    const container = document.querySelector('.users-list');
    let html = '';
 
    users.forEach(function(user) {
      // В каждой карточке: имя (name), email, телефон (phone)[cite: 2]
      html += `
        <div class="user-card">
          <h3>${user.name}</h3>
          <p>📧 ${user.email}</p>
          <p>📱 ${user.phone}</p>
        </div>
      `;
    });
 
    container.innerHTML = html; // Рендерим через .innerHTML[cite: 2]
  })
  .catch(function(error) {
    console.log('Ошибка:', error);
  });