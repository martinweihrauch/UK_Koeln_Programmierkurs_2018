var storedNumbers = [];

var wert = 5000;

var i= 0;
i++;

storedNumbers[i] = 5000;
storedNumbers.push(5000);

var summe = 0;
for (var j = 0; j < storedNumbers.length; j++){
    summe = summe + storedNumbers[j];
}



var counter={
        number: "0",
        plus: function(){
            this.number++;
            document.getElementById("userinput").value=this.number;
        },
        minus:function(){
            this.number--;
            document.getElementById("userinput").value=this.number;
        }   ,
        ac:function(){
            this.number=0;
            document.getElementById("userinput").value=this.number;
        },
        keystroke: function(el){
            if(document.getElementById("userinput").value == "0"){
                document.getElementById("userinput").value = "";
            }
            document.getElementById("userinput").value = document.getElementById("userinput").value + el.value;
        },
        hallo:function(){
            alert("Hallo")
            }   
}