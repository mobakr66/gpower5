var items = document.querySelectorAll("#card a")
var div1 = document.querySelector("#div1")
var btn1 = document.querySelector("#btnprice")
var div2 = document.querySelector("#div2")
var totalprice = 0



items.forEach(function(item){
    item.onclick = function () {
        totalprice += +(item.getAttribute("price"))
       
    



        div1.innerHTML += item.textContent + " " 
        
        if (div1.innerHTML != "") {
            div1.style.visibility="visible";
            btn1.style.visibility = "visible";  
            
            
        }
        
    }
})
btn1.onclick = function(){
    div2.innerHTML= totalprice
    if (div2.innerHTML != "") {
        div2.style.visibility= "visible";
        
    }
}
