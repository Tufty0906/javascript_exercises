const runCalculations = new function(){

    this.calculateFinalValues = function(){

        let calcInitialAmount = 0;
        let calcInterestRate = 0;
        let calcLoanTenure = 0;        

        //let formFields = document.getElementById("initialValues").elements; this gets all elements in the form, including the buttons
        let formFields = document.querySelectorAll("#initialValues input[type=number]");
        for (let i=0; i < formFields.length; i++) { 
            if ((+document.getElementById(formFields[i].id).value) > 0) {
                console.log(formFields[i].id + " = " + formFields[i].value);
                    if(formFields[i].id === "initialAmount"){
                        calcInitialAmount = +document.getElementById(formFields[i].id).value;
                    }
                    if (formFields[i].id === "interestRate") {
                        calcInterestRate = +document.getElementById(formFields[i].id).value;
                    }
                    if (formFields[i].id === "loanTenure") {
                        calcLoanTenure = +document.getElementById(formFields[i].id).value;
                    }
                calcSimple(calcInitialAmount,calcInterestRate,calcLoanTenure);
                calcAnnualCompound(calcInitialAmount,calcInterestRate,calcLoanTenure);
                calcMonthlyCompound(calcInitialAmount,calcInterestRate,calcLoanTenure);
                calcDailyCompound(calcInitialAmount,calcInterestRate,calcLoanTenure);
            } else {
                alert("Please add non-zero values to " + formFields[i].id);
            }
        }


        function calcSimple(calcInitialAmount,calcInterestRate,calcLoanTenure){
            let simpleFinalTotal = 0;
            simpleFinalTotal = calcInitialAmount + ((calcInitialAmount * (calcInterestRate/100) * calcLoanTenure));
            document.getElementById('simpleResult').innerHTML = simpleFinalTotal.toFixed(2);
            return document.getElementById('simpleResult').innerHTML;
        }

        function calcAnnualCompound(calcInitialAmount,calcInterestRate,calcLoanTenure){
            let annualFinalTotal = 0;
            annualFinalTotal = calcInitialAmount + calcCompoundInterest(calcInitialAmount,calcInterestRate,calcLoanTenure,1);
            document.getElementById('finalAnnualResult').innerHTML = annualFinalTotal.toFixed(2);
            return document.getElementById('finalAnnualResult').innerHTML;
        }

        function calcMonthlyCompound(calcInitialAmount,calcInterestRate,calcLoanTenure){
            let monthFinalTotal = 0;
            monthFinalTotal = calcInitialAmount + calcCompoundInterest(calcInitialAmount,calcInterestRate,calcLoanTenure,12);
            document.getElementById('finalMonthlyResult').innerHTML = monthFinalTotal.toFixed(2);
            return document.getElementById('finalMonthlyResult').innerHTML;            
        }

        function calcDailyCompound(calcInitialAmount,calcInterestRate,calcLoanTenure){
            let dailyFinalTotal = 0;
            dailyFinalTotal = calcInitialAmount + calcCompoundInterest(calcInitialAmount,calcInterestRate,calcLoanTenure,365);
            document.getElementById('finalDailyResult').innerHTML = dailyFinalTotal.toFixed(2);
            return document.getElementById('finalDailyResult').innerHTML;             
        }

        function calcCompoundInterest(calcInitialAmount,calcInterestRate,calcLoanTenure,compPerYear){
            compInterestTotal = calcInitialAmount*(((1+((calcInterestRate/100)/compPerYear))**(calcLoanTenure*compPerYear))-1);
            return compInterestTotal;
        }

    }

}
