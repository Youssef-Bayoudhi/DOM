document.addEventListener('DOMContentLoaded',function(){
    var colorbox =document.getElementById('color-box');
    var changeColorBtn =document.getElementById('change-color-btn')

    var colorArray = ['#000000', '#FF0000', '#FFA500', '#FFFF00', '#800080'];

    function getRandomColor(){
       var random = Math.floor(Math.random () * colorArray.length) 
        return colorArray[random];

    
        }
    changeColorBtn.addEventListener('click',function(){
        var randcolor = getRandomColor();
        colorbox.style.backgroundColor = randcolor;
    })

})