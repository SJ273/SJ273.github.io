window.addEventListener('load', () => {
  document.querySelectorAll('.section-title').forEach(title => {
    const text = title.textContent.trim();
    const direction = title.dataset.direction || "left";

    const wrap = document.createElement('div');
    wrap.className = 'marquee-wrap';

    const marquee = document.createElement('div');
    marquee.className = 'marquee';
    marquee.innerHTML = `<span>— ${text} — </span><span>— ${text} — </span>`;

    wrap.appendChild(marquee);
    title.before(wrap);

    const containerWidth = wrap.offsetWidth;
    let iteration = 0;
    while (marquee.scrollWidth < containerWidth * 5 && iteration < 20) {
      marquee.innerHTML += marquee.innerHTML;
      iteration++;
    }

    const distance = marquee.scrollWidth / 2;
    marquee.style.setProperty('--move-distance', `${distance}px`);

    marquee.style.animationName = direction === "right" ? 'marquee-right' : 'marquee-left';
    marquee.style.animationDuration = `${distance / 50}s`;
    marquee.style.animationTimingFunction = 'linear';
    marquee.style.animationIterationCount = 'infinite';
  });
});
