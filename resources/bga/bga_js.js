/*  Messwert  |  Normwert  |  Einheit
---------------------------------
pH          7,35 - 7,45
pO2         65 - 100      mmHg
pCO2        32 - 45       mmHg
HCO3-       22 - 26       mmol/l
Base-Excess -2 - +2       mmol/l
Anionen-Lücke = Na+ -(HCO3- + Cl-), Norm: 3 - 11 mmol/l, Zur Abklärung einer Metabolischen Azidose!!
Interpretation: Normale AL:     Bikarbonatverlust, wird häufig durch Cl- Ionen kompensiert. 
Vergrößerte AL: Additionsazidose, 
*/


var ausgabe = document.getElementById("Ausgabe");                
var phEingabe = document.getElementById("itpH");            
var pco2Eingabe = document.getElementById("itpCO2");
var po2Eingabe = document.getElementById("itpO2");
var hco3Eingabe = document.getElementById("itHCO3");
var naEingabe = document.getElementById("itNa");
var clEingabe = document.getElementById("itCl");

var pH = phEingabe.value;
var pCO2 = pco2Eingabe.value;
var pO2 = po2Eingabe.value;
var HCO3 = hco3Eingabe.value;
var BE = baseexcessEingabe.value;
var Na = naEingabe.value;
var Cl = clEingabe.value;

function out(text) {
    ausgabe.innerHTML += text;
}




function BGAAnalyse() {
    var pH = phEingabe.value;
    var pCO2 = pco2Eingabe.value;
    var pO2 = po2Eingabe.value;
    var HCO3 = hco3Eingabe.value;
    var Na = naEingabe.value;
    var Cl = clEingabe.value;
        if (pH <= 7.35) {
            if (pCO2 > 45) {
                if (HCO3 > 26) {
                    out("Es liegt eine respiratorische Azidose mit metabolischer (Teil-)Kompensation vor.");
                } 
                else if (HCO3 < 22) {
                    out("Es liegt eine gemischt respiratorisch-metabolische Azidose vor.");
                } 
                else {
                    out("Es liegt eine respiratorische Azidose ohne (Teil-)Kompensation vor.");
                }
            }
            else if (HCO3 < 22) {
                if (pCO2 < 45 && pCO2 > 32) {
                    if ((Na - (HCO3 +Cl)) > 11) {
                        out("Es liegt eine metabolische Azidose ohne (Teil-)Kompensation vor. Es handelt sich wahrscheinlich um eine Additionsazidose.");
                    } else if ((Na - (HCO3 +Cl)) > 16) {
                        out("Es liegt eine metabolische Azidose ohne (Teil-)Kompensation vor. Es handelt sich um eine Additionsazidose.");
                    } else if ((Na - (HCO3 +Cl)) < 11) {
                        out("Es liegt eine metabolische Azidose ohne (Teil-)Kompensation vor. Es handelt sich wahrscheinlich um einen Bikarbonatverlust.");
                    } else {
                    out("Es liegt eine metabolische Azidose ohne (Teil-)Kompensation vor.");
                    }
                } 
                else if (pCO2 < 32) {
                    out("Es liegt eine metabolische Azidose mit (Teil-)Kompensation vor.");
                } 
                else {
                    out("Es liegt eine gemischt metabolische-respiratorisch Azidose vor.");
                }
            }
        }
        else if (pH >= 7.45) {
            if (pCO2 < 32) {
                if (HCO3 < 22) {
                    out("Es liegt eine respiratorische Alkalose mit metabolischer (Teil-)Kompensation vor.");
                } 
                else if (HCO3 > 26) {
                    out("Es liegt eine gemischt respiratorisch-metabolische Alkalose vor.");
                } 
                else {
                    out("Es liegt eine respiratorische Alkalose ohne (Teil-)Kompensation vor.");
                }
            }
            else if (HCO3 > 26) {
                if (pCO2 < 45 && pCO2 > 32) {
                    out("Es liegt eine metabolische Alkalose ohne (Teil-)Kompensation vor.");
                } 
                else if (pCO2 < 32) {
                    out("Es liegt eine metabolische Alkalose mit (Teil-)Kompensation vor.");
                } 
                else {
                    out("Es liegt eine gemischt metabolische-respiratorisch Alkalose vor.");
                }
            }
        }
        else if (pH > 7.35 && pH < 7.45){
            if (pCO2 >= 32 && pCO2 <= 45 && HCO3 >= 22 && HCO3 <= 26) {
                out("Es liegt keine Säure-Basen-Störung vor.");
            }
            else {
                out("Fragen Sie Ihre Oberärztin/ Ihren Oberarzt nach Rat.");
            }
        }
    }