const btn = document.querySelector('.theme-toggle');

btn.addEventListener('click', () => {
  const isDark = document.body.classList.contains('theme-dark');

  if (isDark) {
    document.body.classList.remove('theme-dark');
    btn.classList.remove('is-dark');
    btn.classList.add('is-light');
    localStorage.setItem('musify_theme', 'light');
  } else {
    document.body.classList.add('theme-dark');
    btn.classList.remove('is-light');
    btn.classList.add('is-dark');
    localStorage.setItem('musify_theme', 'dark');
  }
});

const savedTheme = localStorage.getItem('musify_theme');

if (savedTheme === 'dark') {
  document.body.classList.add('theme-dark');
  btn.classList.add('is-dark');
} else {
  btn.classList.add('is-light');
}
