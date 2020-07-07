const controls = document.querySelectorAll('.control');

function handleChange() {
    const size = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${size}`);
}

controls.forEach( control => {
    control.addEventListener('change', handleChange);
    control.addEventListener('mousemove', handleChange);
});