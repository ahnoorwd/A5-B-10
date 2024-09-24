
function getInputFieldValueById(id){
    const addInput = document.getElementById(id).value;
    const addAmount = parseFloat(addInput);
    return addAmount;
}

function getTextFieldValueById(id){
    const accountBalance = document.getElementById(id).innerText;
    const balance = parseFloat(accountBalance);
    return balance;
}


function showSectionById(id){
    // hide the section
    document.getElementById('card-container').classList.add('hidden');
    document.getElementById('history-list').classList.add('hidden');

    // show the section
    document.getElementById(id).classList.remove('hidden');
}