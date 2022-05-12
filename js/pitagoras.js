var button = document.getElementById('button');
 
        function calculateHypotenuse(){
            var a = document.getElementById('aInput').value;
            var b = document.getElementById('bInput').value;
 
            var result = document.getElementById('result');
 
            var hypotenuse = Math.round(Math.sqrt((a*a)+ (b*b)));
            
            result.innerHTML=hypotenuse;
        }
 
        button.addEventListener('click',  calculateHypotenuse)