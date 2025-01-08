// Appliquer le thème
function applyTheme(theme) {
  document.body.classList.remove('dark-theme', 'light-theme');
  document.body.classList.add(theme);
}

// Vérifier le thème actuel
document.addEventListener('DOMContentLoaded', function() {
  const storedTheme = localStorage.getItem('theme') || 'light-theme';
  applyTheme(storedTheme);
});

// Changer le thème
document.getElementById('theme_toggle').addEventListener('click', function() {
  let currentTheme = document.body.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme';
  let newTheme = currentTheme === 'dark-theme' ? 'light-theme' : 'dark-theme';
  applyTheme(newTheme);
  localStorage.setItem('theme', newTheme);
});
