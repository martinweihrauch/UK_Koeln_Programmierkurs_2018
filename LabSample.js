class LabSample {
    constructor() {
        this.Sender;
        this.SampleDateTime;
        this.LabValues = []; //Add Objects of LabParameter here
    }
}


class LabParameter {
    constructor() {
        this.ParameterName = null;
        this.RefMin = null;
        this.RefMax = null;
        this.Units = null;
        this.Value = null;
    };
        
}

var blutprobe = new LabSample();
blutprobe.Sender = "Müller";

var hb = new LabParameter();
var kreatinin = new LabParameter();

blutprobe.LabValues = [hb, kreatinin];

blutprobe.LabValues.hb.Value = 10.0;


