var ausgabe = document.getElementById("Ausgabe");
var HbEingabe = document.getElementById("itHb");
var HktEingabe = document.getElementById("itHkt");

var Hb = HbEingabe.value;
var Hkt = HktEingabe.value;

var sample = new LabSample();
sample.LabValues[0] = new LabParameter();
sample.LabValues[0].ParameterName = "hello";



var hb1 = 13.5;
var hb2 = 12.7;

var berechnung = hb1 - hb2;
out("Die Differenz von hb1 und hb2 beträgt: " + Math.round(berechnung*10)/10);

var datum1 = new Date();
var datum2 = new Date();

var laborparameter1 = {hb : 10, kreatinin : 1.0, natrium : 130, got : 35};
var laborparameter2 = {hb : 11, kreatinin : 1.1, natrium : 135, got : 37};
var laborparameter3 = {hb : 14, kreatinin : 1.3, natrium : 125, got : 40};

var probenverlauf = [laborparameter1, laborparameter2, laborparameter3];

out("<br>NATRIUM: " + probenverlauf[2].natrium);

var blutprobe = {datum : 20190101, einsender: "weihrauch", werte: laborparameter}

blutprobe.werte.hb = 7;

out("<br>" + laborparameter["hb"]);

laborparameter.hb
laborparameter["hb"]



berechnung = hbArray[0] - hbArray[3];

//out("<br>Array / Die Differenz von hb1 und hb2 beträgt: " + Math.round(berechnung*10)/10);

for (var i = 0; i < hbArray.length; i++){
  //  out("<br>Der Wert Nr.:"+i+" des Arrays hbArray ist: "+hbArray[i]);
}
for (var i=0; i<100; i++){
    hbArray.push(i*2);
}
for (var i = 0; i < hbArray.length; i++){
    //out("<br>Der Wert Nr.:"+i+" des Arrays hbArray ist: "+hbArray[i]);
}


function HbBerechnen(){
    Hb = HbEingabe.value;
    Hkt = 3* Hb;
    if(Hkt > 60 ) out("Das sieht mir aber nach einer PCV aus!");
    
    out("Der Hämatokrit (berechnet) beträgt in diesem Fall: " + Hkt);
    
}



function out(text){
    ausgabe.innerHTML = ausgabe.innerHTML + text;
}

function HbToHct(Hb, faktor){
    let Hct = Hb * faktor;
    return Hct;
}
   