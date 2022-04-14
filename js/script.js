function displaynum(n1) {
    Calculator.text1.value = Calculator.text1.value + n1
}

var coll = document.getElementsByClassName("collapsible")

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function(){
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if (content.style.maxHeight){
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}