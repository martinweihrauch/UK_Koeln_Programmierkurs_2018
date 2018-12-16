var ausgabe = document.getElementById("Ausgabe");
var HbEingabe = document.getElementById("itHb");
var HktEingabe = document.getElementById("itHkt");

var Hb = HbEingabe.value;
var Hkt = HktEingabe.value;

function HbBerechnen(){
    Hb = HbEingabe.value;
    Hkt = 3* Hb;
    if(Hkt > 60 ) out("Das sieht mir aber nach einer PCV aus!");
    
    out("Der Hämatokrit (berechnet) beträgt in diesem Fall: " + Hkt);
    
}








ausgabe.innerHTML = "Anämietester. Hb ist 15 und Patient männlich";
//Patient
var gender = "m"; // m= male, f=female, i=intersexual
for (let i=0; i<100; i++){


    //Liegt jetzt eine Anämie bei o. g. Patienten vor?
    if (gender == "m"){
        if (Hb < 13.5){
            out("<br>Anämie beim Mann!");
        }
        else{
            out("<br>Es liegt keine Anämie vor!");
        }
    }
    else if (gender == "f"){
        if(Hb <12 ){
            out("<br>Anämie bei der Frau!");

        }
        else{
            out("<br>Es liegt keine Anämie vor!");
        }
    }
}

let Haematokrit = HbToHct(Hb, 3);
out("Der Hämatokrit beträgt für einen Hb von "+Hb+": "+Haematokrit);

function out(text){
    ausgabe.innerHTML = ausgabe.innerHTML + text;
}

function HbToHct(Hb, faktor){
    let Hct = Hb * faktor;
    return Hct;
}
            

ausgabe.innerHTML += "Bin fertig!";