var ausgabe = document.getElementById("Ausgabe");
            ausgabe.innerHTML = "<b> Ikterus-Tester: <b>";
            
            var gender; // male or female
            var gesamtBilirubin; // Normwert < 1.1 mg/dl
            var indirektesBilirubin; // Normwert: 0.2 - 0.8 mg/dl
            var direktesBilirubin; // Normwert: < 0.25 mg/dl
            var urinBilirubin; //< 0,2 mg/dl; false = kein Nachweis; true = Nachweis
            var urinUrobilinogen; // Nachweis ab 0.5 - 1.0 mg/dL; 
            var alat; //female = 10 -35 U/l; male = 10 - 50 U/l; //= GPT
            var gammaGT; // female = 4 - 18 U/l; male = 6 - 28 U/l
            
            
            /*
            // keine Hyperbilirubinämie (männlich):
            gender = "male";
            gesamtBilirubin = 0.5;
            indirektesBilirubin = 0.3;
            direktesBilirubin = 0.2;
            urinBilirubin = false;
            urinUrobilinogen = false;
            alat = 20;
            gammaGT = 16;
            */
            

            
            // prähepatischer Ikterus (männlich):
            gender = "male";
            gesamtBilirubin = 2;
            indirektesBilirubin = 1.8;
            direktesBilirubin = 0.2;
            urinBilirubin = false;
            urinUrobilinogen = true;
            alat = 20;
            gammaGT = 16;
            
            
            /*
            // posthepatischer Ikterus (männlich):
            gender = "male";
            gesamtBilirubin = 3;
            indirektesBilirubin = 0.5;
            direktesBilirubin = 2.5;
            urinBilirubin = true;
            urinUrobilinogen = false;
            alat = 60;
            gammaGT = 80;
            */
        
            /*// intrahepatischer Ikterus (männlich) und Konjugationsstörung:
            gender = "male";
            gesamtBilirubin = 2;
            indirektesBilirubin = 1.8;
            direktesBilirubin = 0.2;
            urinBilirubin = false;
            urinUrobilinogen = false;
            alat = 20;
            gammaGT = 16;
            */
            

            /*// intrahepatischer Ikterus (männlich) und Leberzellstörung:
            gender = "male";
            gesamtBilirubin = 3;
            indirektesBilirubin = 1;
            direktesBilirubin = 2;
            urinBilirubin = true;
            urinUrobilinogen = false;
            alat = 60;
            gammaGT = 80;
            */
            
                        /*
            // keine Hyperbilirubinämie (weiblich):
            gender = "female";
            gesamtBilirubin = 0.5;
            indirektesBilirubin = 0.3;
            direktesBilirubin = 0.2;
            urinBilirubin = false;
            urinUrobilinogen = false;
            alat = 20;
            gammaGT = 16;
            */

            /*
            // prähepatischer Ikterus (weiblich):
            gender = "female";
            gesamtBilirubin = 2;
            indirektesBilirubin = 1.8;
            direktesBilirubin = 0.2;
            urinBilirubin = false;
            urinUrobilinogen = true;
            alat = 20;
            gammaGT = 16;
            */
            
            /*
            // posthepatischer Ikterus (weiblich):
            gender = "female";
            gesamtBilirubin = 3;
            indirektesBilirubin = 0.5;
            direktesBilirubin = 2.5;
            urinBilirubin = true;
            urinUrobilinogen = false;
            alat = 60;
            gammaGT = 80;
            */
            
            /*
            // intrahepatischer Ikterus (weiblich) und Konjugationsstörung:
            gender = "female";
            gesamtBilirubin = 2;
            indirektesBilirubin = 1.8;
            direktesBilirubin = 0.2;
            urinBilirubin = false;
            urinUrobilinogen = false;
            alat = 20;
            gammaGT = 16;
            */
            
            
            /*
            // intrahepatischer Ikterus (weiblich) und Leberzellstörung:
            gender = "female";
            gesamtBilirubin = 3;
            indirektesBilirubin = 1;
            direktesBilirubin = 2;
            urinBilirubin = true;
            urinUrobilinogen = false;
            alat = 60;
            gammaGT = 80;
            */
            
            function IkterusTester(text){
                ausgabe.innerHTML = ausgabe.innerHTML + text;
            }  

        

            if (gender === "male") {
                if (gesamtBilirubin > 1.1) {
                    if (indirektesBilirubin > 0.8 && direktesBilirubin < 0.25 && urinBilirubin === false && urinUrobilinogen === true && alat < 50 && gammaGT < 28) {
                        IkterusTester("<br><br> Werte: " + "<br> Geschlecht: " + gender + "<br> Gesamt-Bilirubin: " + gesamtBilirubin + " mg/dl" + "<br> Indirektes Bilirubin:  " + indirektesBilirubin + " mg/dl" + "<br> Direktes Bilirubin: " + direktesBilirubin + " mg/dl" + "<br> Urin-Bilirubin: " + urinBilirubin + "<br> Urin-Urobilinogen: " + urinUrobilinogen + "<br> ALAT: " + alat + " U/l" + "<br> Gamma-GT: " + gammaGT + " U/l" + "<br><br> Auswertung:" + "<br> Es liegt eine Hyperbilirubinämie vor!" + "<br> Es liegt ein prähepatischer Ikterus vor!");
                    }
                    else if (indirektesBilirubin < 0.8 && direktesBilirubin > 0.25 && urinBilirubin === true && urinUrobilinogen === false && alat > 50 && gammaGT > 28) {
                        IkterusTester("<br><br> Werte: " + "<br> Geschlecht: " + gender + "<br> Gesamt-Bilirubin: " + gesamtBilirubin + " mg/dl" + "<br> Indirektes Bilirubin:  " + indirektesBilirubin + " mg/dl" + "<br> Direktes Bilirubin: " + direktesBilirubin + " mg/dl" + "<br> Urin-Bilirubin: " + urinBilirubin + "<br> Urin-Urobilinogen: " + urinUrobilinogen + "<br> ALAT: " + alat + " U/l" + "<br> Gamma-GT: " + gammaGT + " U/l" + "<br><br> Auswertung:" + "<br>Es liegt eine Hyperbilirubinämie vor!" + "<br> Es liegt ein posthepatischer Ikterus vor!");
                    }
                    else if (indirektesBilirubin > 0.8 && direktesBilirubin < 0.25 && urinBilirubin === false && urinUrobilinogen === false && alat < 50 && gammaGT < 28) {
                        IkterusTester("<br><br> Werte: " + "<br> Geschlecht: " + gender + "<br> Gesamt-Bilirubin: " + gesamtBilirubin + " mg/dl" + "<br> Indirektes Bilirubin:  " + indirektesBilirubin + " mg/dl" + "<br> Direktes Bilirubin: " + direktesBilirubin + " mg/dl" + "<br> Urin-Bilirubin: " + urinBilirubin + "<br> Urin-Urobilinogen: " + urinUrobilinogen + "<br> ALAT: " + alat + " U/l" + "<br> Gamma-GT: " + gammaGT + " U/l" + "<br><br> Auswertung:" +  "<br>Es liegt eine Hyperbilirubinämie vor!" + "<br> Es liegt ein intrahepatischer Ikterus vor!" + "<br> Es liegt eine Bilirubinkonjugationsstörung vor!");
                    }
                    else if (indirektesBilirubin > 0.8 && direktesBilirubin > 0.25 && urinBilirubin === true && alat > 50 && gammaGT > 28) {
                        IkterusTester("<br><br> Werte: " + "<br> Geschlecht: " + gender + "<br> Gesamt-Bilirubin: " + gesamtBilirubin + " mg/dl" + "<br> Indirektes Bilirubin:  " + indirektesBilirubin + " mg/dl" + "<br> Direktes Bilirubin: " + direktesBilirubin + " mg/dl" + "<br> Urin-Bilirubin: " + urinBilirubin + "<br> Urin-Urobilinogen: " + urinUrobilinogen + "<br> ALAT: " + alat + " U/l" + "<br> Gamma-GT: " + gammaGT + " U/l" + "<br><br> Auswertung:" +  "<br>Es liegt eine Hyperbilirubinämie vor!" + "<br> Es liegt ein intrahepatischer Ikterus vor!" + "<br> Es liegt eine Leberzellschädigung vor!");
                    }
                    else {    
                        IkterusTester("<br><br> Werte: " + "<br> Geschlecht: " + gender + "<br> Gesamt-Bilirubin: " + gesamtBilirubin + " mg/dl" + "<br> Indirektes Bilirubin:  " + indirektesBilirubin + " mg/dl" + "<br> Direktes Bilirubin: " + direktesBilirubin + " mg/dl" + "<br> Urin-Bilirubin: " + urinBilirubin + "<br> Urin-Urobilinogen: " + urinUrobilinogen + "<br> ALAT: " + alat + " U/l" + "<br> Gamma-GT: " + gammaGT + " U/l" + "<br><br> Auswertung:" + "<br>Es liegt eine Hyperbilirubinämie vor!");
                    }
                }
                else {
                    IkterusTester("<br><br> Werte: " + "<br> Geschlecht: " + gender + "<br> Gesamt-Bilirubin: " + gesamtBilirubin + " mg/dl" + "<br> Indirektes Bilirubin:  " + indirektesBilirubin + " mg/dl" + "<br> Direktes Bilirubin: " + direktesBilirubin + " mg/dl" + "<br> Urin-Bilirubin: " + urinBilirubin + "<br> Urin-Urobilinogen: " + urinUrobilinogen + "<br> ALAT: " + alat + " U/l" + "<br> Gamma-GT: " + gammaGT + " U/l" + "<br><br> Auswertung:" + "<br>Es liegt keine Hyperbilirubinämie vor!");
                }
            }

            if (gender === "female") {
                if (gesamtBilirubin > 1.1) {
                    if (indirektesBilirubin > 0.8 && direktesBilirubin < 0.25 && urinBilirubin === false && urinUrobilinogen === true && alat < 50 && gammaGT < 28) {
                        IkterusTester("<br><br> Werte: " + "<br> Geschlecht: " + gender + "<br> Gesamt-Bilirubin: " + gesamtBilirubin + " mg/dl" + "<br> Indirektes Bilirubin:  " + indirektesBilirubin + " mg/dl" + "<br> Direktes Bilirubin: " + direktesBilirubin + " mg/dl" + "<br> Urin-Bilirubin: " + urinBilirubin + "<br> Urin-Urobilinogen: " + urinUrobilinogen + "<br> ALAT: " + alat + " U/l" + "<br> Gamma-GT: " + gammaGT + " U/l" + "<br><br> Auswertung:" + "<br> Es liegt eine Hyperbilirubinämie vor!" + "<br> Es liegt ein prähepatischer Ikterus vor!");
                    }
                    else if (indirektesBilirubin < 0.8 && direktesBilirubin > 0.25 && urinBilirubin === true && urinUrobilinogen === false && alat > 50 && gammaGT > 28) {
                        IkterusTester("<br><br> Werte: " + "<br> Geschlecht: " + gender + "<br> Gesamt-Bilirubin: " + gesamtBilirubin + " mg/dl" + "<br> Indirektes Bilirubin:  " + indirektesBilirubin + " mg/dl" + "<br> Direktes Bilirubin: " + direktesBilirubin + " mg/dl" + "<br> Urin-Bilirubin: " + urinBilirubin + "<br> Urin-Urobilinogen: " + urinUrobilinogen + "<br> ALAT: " + alat + " U/l" + "<br> Gamma-GT: " + gammaGT + " U/l" + "<br><br> Auswertung:" + "<br>Es liegt eine Hyperbilirubinämie vor!" + "<br> Es liegt ein posthepatischer Ikterus vor!");
                    }
                    else if (indirektesBilirubin > 0.8 && direktesBilirubin < 0.25 && urinBilirubin === false && urinUrobilinogen === false && alat < 50 && gammaGT < 28) {
                        IkterusTester("<br><br> Werte: " + "<br> Geschlecht: " + gender + "<br> Gesamt-Bilirubin: " + gesamtBilirubin + " mg/dl" + "<br> Indirektes Bilirubin:  " + indirektesBilirubin + " mg/dl" + "<br> Direktes Bilirubin: " + direktesBilirubin + " mg/dl" + "<br> Urin-Bilirubin: " + urinBilirubin + "<br> Urin-Urobilinogen: " + urinUrobilinogen + "<br> ALAT: " + alat + " U/l" + "<br> Gamma-GT: " + gammaGT + " U/l" + "<br><br> Auswertung:" +  "<br>Es liegt eine Hyperbilirubinämie vor!" + "<br> Es liegt ein intrahepatischer Ikterus vor!" + "<br> Es liegt eine Bilirubinkonjugationsstörung vor!");
                    }
                    else if (indirektesBilirubin > 0.8 && direktesBilirubin > 0.25 && urinBilirubin === true && alat > 50 && gammaGT > 28) {
                        IkterusTester("<br><br> Werte: " + "<br> Geschlecht: " + gender + "<br> Gesamt-Bilirubin: " + gesamtBilirubin + " mg/dl" + "<br> Indirektes Bilirubin:  " + indirektesBilirubin + " mg/dl" + "<br> Direktes Bilirubin: " + direktesBilirubin + " mg/dl" + "<br> Urin-Bilirubin: " + urinBilirubin + "<br> Urin-Urobilinogen: " + urinUrobilinogen + "<br> ALAT: " + alat + " U/l" + "<br> Gamma-GT: " + gammaGT + " U/l" + "<br><br> Auswertung:" +  "<br>Es liegt eine Hyperbilirubinämie vor!" + "<br> Es liegt ein intrahepatischer Ikterus vor!" + "<br> Es liegt eine Leberzellschädigung vor!");
                    }
                    else {    
                        IkterusTester("<br><br> Werte: " + "<br> Geschlecht: " + gender + "<br> Gesamt-Bilirubin: " + gesamtBilirubin + " mg/dl" + "<br> Indirektes Bilirubin:  " + indirektesBilirubin + " mg/dl" + "<br> Direktes Bilirubin: " + direktesBilirubin + " mg/dl" + "<br> Urin-Bilirubin: " + urinBilirubin + "<br> Urin-Urobilinogen: " + urinUrobilinogen + "<br> ALAT: " + alat + " U/l" + "<br> Gamma-GT: " + gammaGT + " U/l" + "<br><br> Auswertung:" + "<br>Es liegt eine Hyperbilirubinämie vor!");
                    }
                }
                else {
                    IkterusTester("<br><br> Werte: " + "<br> Geschlecht: " + gender + "<br> Gesamt-Bilirubin: " + gesamtBilirubin + " mg/dl" + "<br> Indirektes Bilirubin:  " + indirektesBilirubin + " mg/dl" + "<br> Direktes Bilirubin: " + direktesBilirubin + " mg/dl" + "<br> Urin-Bilirubin: " + urinBilirubin + "<br> Urin-Urobilinogen: " + urinUrobilinogen + "<br> ALAT: " + alat + " U/l" + "<br> Gamma-GT: " + gammaGT + " U/l" + "<br><br> Auswertung:" + "<br>Es liegt keine Hyperbilirubinämie vor!");
                }
            }
            
            
            