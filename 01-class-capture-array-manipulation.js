const captureLegoSets = new function(){

    let legoSets = []; 

    class legoSet {
        constructor(setName,setTheme,setReferenceNumber,setPieceCount) {
            this.setName = setName;
            this.setTheme = setTheme;
            this.setReferenceNumber = setReferenceNumber;
            this.setPieceCount = setPieceCount;
        }
    }

    this.captureSets = function(){

        let setName;
        let setTheme;
        let setReferenceNumber;
        let setPieceCount;
        let searchValueName;
        let searchValueTheme;
        let searchValueReference;
        let searchValuePiece;

        let formFields = document.querySelectorAll(".input1");
        /*console.log(formFields);*/
        for (let i=0; i < formFields.length; i++) { 
            console.log("Field and Value: " + formFields[i].id + " " + formFields[i].value);
            if(formFields[i].id === "setName"){
                setName = document.getElementById(formFields[i].id).value;
            }
            if (formFields[i].id === "setTheme") {
                setTheme = document.getElementById(formFields[i].id).value;
            }
            if (formFields[i].id === "setReferenceNumber") {
                setReferenceNumber = +document.getElementById(formFields[i].id).value;
            }
            if (formFields[i].id === "setPieceCount") {
                setPieceCount = +document.getElementById(formFields[i].id).value;
            }
        }
        let newSet = new legoSet(setName,setTheme,setReferenceNumber,setPieceCount);
        legoSets.push(newSet);
        str = JSON.stringify(legoSets);
        console.log("legosets " + str);
/*        let legoSetslength = legoSets.length;
        console.log(legoSetslength);
        console.log("Array length " + legoSets.length);*/
    }    

    this.displayFirst = function(){
        let x = 0;
        setInnerHtml(x);
        returnFields(displaySetName,displaySetTheme,displaySetReferenceNumber,displaySetPieceCount);
    }

    this.displayLast = function(){
        let x = legoSets.length -1;
        setInnerHtml(x);
        returnFields(displaySetName,displaySetTheme,displaySetReferenceNumber,displaySetPieceCount);
    }

    this.displayNext = function(){
        let searchValue = document.getElementById('displaySetName').innerHTML;
        console.log(searchValue);
    }

    this.displayPrevious = function(){
        setSearchValues();
        /*console.log("Search values are " + searchValueName + "," + searchValueTheme + "," + searchValueReference + "," + searchValuePiece);
        console.log("Array length is " + legoSets.length);*/
        if(legoSets.length>0){
            for(let k=0; k < legoSets.length; k++ ){
                console.log("This is k " + k);
                if(legoSets[k].setName === searchValueName){
                    console.log(legoSets[k].setName + "," + legoSets[k].setTheme + "," + legoSets[k].setReferenceNumber + "," + legoSets[k].setPieceCount);
                    console.log("previous is " + legoSets[k-1].setName);
                    if(legoSets[k].setTheme === searchValueTheme && legoSets[k].setReferenceNumber === searchValueReference && legoSets[k].setPieceCount === searchValuePiece){
                        console.log("Full match");
                        if((k-1)>=0){
                            setInnerHtml(k-1);
                            returnFields(displaySetName,displaySetTheme,displaySetReferenceNumber,displaySetPieceCount);
                        } else {
                            displayError("Array Out of Bounds");
                        }
                    } else {
                        displayError("More than one set matched: Duplicate");
                    }
                } else {
                    displayError("No match found: There should have been one");
                }
            }
        } else {
            displayError("Array Out of Bounds");
        }
    }

    this.displayRandom = function(){
        let x = Math.floor(Math.random()*legoSets.length);
        setInnerHtml(x);
        returnFields(displaySetName,displaySetTheme,displaySetReferenceNumber,displaySetPieceCount);        
    }

    this.displayReset = function(){
        document.getElementById('displaySetName').innerHTML = "";
        document.getElementById('displaySetTheme').innerHTML = "";
        document.getElementById('displaySetReferenceNumber').innerHTML = "";
        document.getElementById('displaySetPieceCount').innerHTML = "";
        returnFields(displaySetName,displaySetTheme,displaySetReferenceNumber,displaySetPieceCount);        
    }

    this.displayDeleteAllObjects = function(){
        legoSets = [];
        captureLegoSets.displayReset();
    }

    function returnFields(displaySetName,displaySetTheme,displaySetReferenceNumber,displaySetPieceCount){
        return document.getElementById('displaySetName').innerHTML; 
        return document.getElementById('displaySetTheme').innerHTML; 
        return document.getElementById('displaySetReferenceNumber').innerHTML; 
        return document.getElementById('displaySetPieceCount').innerHTML;
    }

    function setInnerHtml(x){
        document.getElementById('displaySetName').innerHTML = legoSets[x].setName;
        document.getElementById('displaySetTheme').innerHTML = legoSets[x].setTheme;
        document.getElementById('displaySetReferenceNumber').innerHTML = legoSets[x].setReferenceNumber;
        document.getElementById('displaySetPieceCount').innerHTML = legoSets[x].setPieceCount;
    }

    function setSearchValues(){
        searchValueName = document.getElementById('displaySetName').innerHTML;
        searchValueTheme = document.getElementById('displaySetTheme').innerHTML;
        searchValueReference = +document.getElementById('displaySetReferenceNumber').innerHTML;
        searchValuePiece = +document.getElementById('displaySetPieceCount').innerHTML;
        return searchValueName;
        return searchValueTheme;
        return searchValueReference;
        return searchValuePiece;
    }

    function displayError(errMsg){
        document.getElementById('displaySetName').innerHTML = errMsg;
        document.getElementById('displaySetTheme').innerHTML = errMsg;
        document.getElementById('displaySetReferenceNumber').innerHTML = errMsg;
        document.getElementById('displaySetPieceCount').innerHTML = errMsg;
        returnFields(displaySetName,displaySetTheme,displaySetReferenceNumber,displaySetPieceCount);        
    }

    /*This is for debugging*/
    this.consoleSets = function(){
        for (let j=0; j < legoSets.length; j++) {
            console.log(legoSets[j]);
        }
    }

}
