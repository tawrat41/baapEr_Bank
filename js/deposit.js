document.getElementById('btn-deposit').addEventListener('click', function () {
    ////////
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;

    const newDepositAmount = parseFloat(newDepositAmountString);

    depositField.value = '';

    if(isNaN(newDepositAmount)){
        alert('Please provide a valid amount!')
        return;
    }

    ////////
    const depositTotalElement = document.getElementById('deposit-total')
    const previousDespositTotalString = depositTotalElement.innerText;

    const previousDespositTotal = parseFloat(previousDespositTotalString);

    ////////
    const currentDepositTotal = previousDespositTotal + newDepositAmount;

    depositTotalElement.innerText = currentDepositTotal;

    

    ////////

    const balanceTotalElement = document.getElementById('balance-total')
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    ///////
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

})



document.getElementById('btn-withdraw').addEventListener('click', function () {
    ////withdraw
    const balanceTotalElement = document.getElementById('balance-total')
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    withdrawField.value = '';

    if(isNaN(newWithdrawAmount)){
        alert('Please provide a valid amount!')
        return;
    }

    const withdrawTotalElement = document.getElementById('withdraw-total')
    const previousWithdrawTotalString = withdrawTotalElement.innerText;

    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    

    if(newWithdrawAmount > previousBalanceTotal){
        alert("Sorry! Not enough Balance.");
        return;
    }


    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    withdrawTotalElement.innerText = currentWithdrawTotal;

    


    ///////
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = currentBalanceTotal;
})





