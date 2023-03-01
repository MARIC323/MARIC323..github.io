
function colorchanger (){
    var selectValue= document.getElementById("myselection").value;
    document.getElementById("dummy").innerHTML="You selected:" + selectValue;
    document.body.style.backgroundColor=selectValue;
} 




