let waveLabels = document.querySelectorAll('.wave');

waveLabels.forEach((waveLabel) => {
    waveLabel.innerHTML = waveLabel.innerHTML
        .split('')
        .map((letter, i) => `<span style="transition-delay:${i * 100}ms;">${letter}</span>`)
        .join('');
});
