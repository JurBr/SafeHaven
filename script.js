// script.js
document.querySelectorAll('.tab-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelectorAll('.tab-link').forEach(l => l.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));

    this.classList.add('active');
    const id = this.getAttribute('href');
    document.querySelector(id).classList.add('active');
  });
});
