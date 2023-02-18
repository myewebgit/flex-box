


document.getElementById('t-calculation').addEventListener('click',function(){
    const base = document.getElementById('base');
    const height = document.getElementById('height');
    const area = document.getElementById('t-area');
    const baseValue = parseFloat(base.value);
    const heightValue = parseFloat(height.value);
    const areaValue = 0.5*baseValue*heightValue;
    area.innerText=areaValue;
})
document.getElementById('r-calculation').addEventListener('click',function(){
    const base = document.getElementById('r-base');
    const height = document.getElementById('r-height');
    const area = document.getElementById('r-area');
    const baseValue = parseFloat(base.value);
    const heightValue = parseFloat(height.value);
    const areaValue =baseValue*heightValue;
    area.innerText=areaValue;
})