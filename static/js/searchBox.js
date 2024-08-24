// Add to search
const options = GetAllCommands();

function showSuggestions() {
  const input = document.getElementById('searchInput');
  const filter = input.value.toLowerCase();
  const suggestions = document.getElementById('suggestions');
  
  suggestions.innerHTML = '';

  if (filter.length > 0) {
    const filteredOptions = options.filter(option => option.toLowerCase().includes(filter));

    if (filteredOptions.length > 0) {
      suggestions.style.display = 'block';

      filteredOptions.forEach(option => {
        const li = document.createElement('li');
        li.textContent = option;
        li.addEventListener('click', () => {
          input.value = option;
          document.location = `#${option}`
          suggestions.style.display = 'none';
        });
        suggestions.appendChild(li);
      });
    } else {
      suggestions.style.display = 'none';
    }
  } else {
    suggestions.style.display = 'none';
  }
}

document.addEventListener('click', function(e) {
  const searchContainer = document.querySelector('.search-container');
  const suggestions = document.getElementById('suggestions');

  if (!searchContainer.contains(e.target)) {
    suggestions.style.display = 'none';
  }
});