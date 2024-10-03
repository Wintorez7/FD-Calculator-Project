function calculateMaturityAmount(){
    //get input value from the form element
    const principal = parseFloat(document.getElementById('principal').value);
    const interstRate = parseFloat(document.getElementById('interest').value);
    const tenure = parseFloat(document.getElementById('tenure').value);

    //perform the calculation 
    const maturityAmount = principal * (principal * interstRate * tenure)/100;

    //display the result

    document.getElementById('result').innerText = `Maturity Amount: ${maturityAmount.toFixed(2)}`;

}

let CalculateBtn = document.getElementById('Calculate-btn');

CalculateBtn.addEventListener('click',calculateMaturityAmount);


