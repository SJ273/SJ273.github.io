document.querySelectorAll('.section-title').forEach(title => {
  const text = title.textContent.trim();

  const wrap = document.createElement('div');
  wrap.className = 'marquee-wrap';

  const marquee = document.createElement('div');
  marquee.className = 'marquee';

  marquee.innerHTML = `
    <span>— ${text} — </span>
    <span>— ${text} — </span>
  `;

  wrap.appendChild(marquee);
  title.before(wrap);

  const containerWidth = wrap.offsetWidth;
  while (marquee.scrollWidth < containerWidth * 2) {
    marquee.innerHTML += marquee.innerHTML;
  }

  const distance = marquee.scrollWidth / 2;
  marquee.style.setProperty('--move-distance', `-${distance}px`);
  marquee.style.animationDuration = `${distance / 50}s`;
});
