document.getElementById('t-calculation').addEventListener('click', function () {
    const area = document.getElementById('t-area');
    const areaValue = parseFloat(0.5 * ((document.getElementById('base')).value) * ((document.getElementById('height')).value)).toFixed(2);
    if (areaValue >= 0 ) {
        area.innerText = areaValue;
    }
    else {
        area.innerText = "Input can not be negative"
        
    }
})
document.getElementById('r-calculation').addEventListener('click', function () {
    const base = document.getElementById('r-base');
    const height = document.getElementById('r-height');
    const area = document.getElementById('r-area');
    const baseValue = parseFloat(base.value);
    const heightValue = parseFloat(height.value);
    const areaValue = baseValue * heightValue;
    area.innerText = areaValue;
})