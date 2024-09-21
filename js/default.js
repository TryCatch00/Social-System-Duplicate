
let isOpenBgBlur = false;
isHideBgBlur();

function isHideBgBlur() {
    
}

function onBgBlur() {
    const bgBlur = document.querySelector('#bg-blur');
    const tooltip = document.querySelector('.tooltip');
    bgBlur.addEventListener('mousemove', (e) => {
        tooltip.style.left = `${e.clientX - tooltip.offsetWidth - 10}px`; // Tooltip'u sol tarafa kaydır
    tooltip.style.top = `${e.clientY - tooltip.offsetHeight - 5}px`; // Tooltip'u yukarı kaydır
    });
    
    bgBlur.addEventListener("hover", () => {
        tooltip.style.display = "inline-block";
    });
}