const select = document.getElementById('Select');
const contents = document.querySelectorAll('.GameText');

    select.addEventListener('change', () => 
    {
        contents.forEach(article => 
        {
          article.classList.toggle('active', article.id === select.value);
        });
        
    });

