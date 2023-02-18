document.getElementById('calculation').addEventListener('click',function(){
    const base = document.getElementById('base');
    const height = document.getElementById('height');
    const area = document.getElementById('area');
    const baseValue = parseFloat(base.value);
    const heightValue = parseFloat(height.value);
    const areaValue = 0.5*baseValue*heightValue;
    area.innerText=areaValue;
})