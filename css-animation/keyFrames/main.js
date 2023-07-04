(function () {
  const body = document.querySelector('body');

  const time = [.5, .55, .6, .65, .7, .75, .7, .65, .6, .55, .5]

  for (let i = 0; i <= 10; i++) {
    const div = document.createElement('div');
    div.classList.add('box');
    div.style.animation = `grow 1.2s ease-in-out infinite ${time[i]}s`;
    body.appendChild(div);
  }
})();
