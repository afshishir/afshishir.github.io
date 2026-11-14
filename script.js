const dialog = document.getElementById('photo-dialog');
document.querySelectorAll('[data-image]').forEach(button => button.addEventListener('click', () => {
  const image = document.getElementById('dialog-image');
  image.src = button.dataset.image;
  image.alt = button.dataset.caption;
  document.getElementById('dialog-caption').textContent = button.dataset.caption;
  dialog.showModal();
}));
document.getElementById('close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
});
document.getElementById('copyright-year').textContent = new Date().getFullYear();
