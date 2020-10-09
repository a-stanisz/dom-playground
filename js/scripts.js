let button = document.getElementById('changeBackground');
const r = () => {
  return Math.floor(Math.random() * 255);
};
button.addEventListener('click', () => {
  document.body.style.backgroundColor = `rgb(${r()}, ${r()}, ${r()})`;
});
