

const billAmountInput = document.querySelector("#bill-amnt");
const cashGivenInput = document.querySelector("#cash-given");
const checkBtn = document.querySelector("button");
const numOfNote = document.querySelectorAll(".num-of-note");

const noteList = [2000,500,200,100,50,20,10,5,2,1];

function calculateChanges(diff){
    // console.log(diff)
    for(let i = 0; i<noteList.length; i++){

        
        var varOne =  Math.trunc(diff / noteList[i]);
        // console.log(varOne);
        var varTwo =  diff % noteList[i];
        // console.log(varTwo);
        numOfNote[i].innerText = varOne;
        // console.log(numOfNote[i]);
        diff = varTwo;
        // console.log(diff);
    }
}






checkBtn.addEventListener("click", function clickHandler(){
    // first condition validate bill amount
    if (billAmountInput.value >= 0 ){
        // second condition
        if(cashGivenInput.value >= billAmountInput.value){
            // calculate diff
            let diff = cashGivenInput.value - billAmountInput.value;
            calculateChanges(diff);

        }else{
            console.log("Oops you're short on cash to pay the bill !!")
        }

    }else{
        console.log("Bill Amount is less than zero")
    }

})