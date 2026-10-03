// Загрузка постов с эндпоинта /posts[cite: 2]
axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(function(response) {
    const posts = response.data;         // 100 постов[cite: 2]
    const first10 = posts.slice(0, 10);  // Метод .slice(начало, конец) берет только первые 10[cite: 2]
    
    const container = document.querySelector('.posts-list');
    let html = '';

    first10.forEach(function(post) {
      // В каждой карточке: номер поста (id), заголовок (title), тело (body)[cite: 2]
      html += `
        <div class="post-card">
          <h3>#${post.id} ${post.title}</h3>
          <p>${post.body}</p>
        </div>
      `;
    });

    container.innerHTML = html;

    // Выводим текст «Показано X из Y»[cite: 2]
    document.querySelector('.info').innerText = `Показано ${first10.length} из ${posts.length}`;
  })
  .catch(function(error) {
    console.log('Ошибка:', error);
  });