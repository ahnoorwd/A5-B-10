
// about all info noakali 

document.getElementById('donate-noakhali-btn').addEventListener('click', function (event) {
    event.preventDefault();

    const addAmount = getInputFieldValueById('input-noakhali-amount');

    if (isNaN(addAmount) || addAmount <= 0) {
        alert('Wrong input! Please try again.');
        return;
    }

    const balance = getTextFieldValueById('my-balance');
    if (balance >= addAmount) {
        const noakhaliBalance = getTextFieldValueById('noakhali-balance');
        console.log('Noa', noakhaliBalance);
        const myNewBalance = balance - addAmount;
        const noakhaliNewBalance = addAmount + noakhaliBalance;


        document.getElementById('my-balance').innerText = myNewBalance;
        document.getElementById('noakhali-balance').innerText = noakhaliNewBalance;

        console.log('Noakhali Bal', noakhaliBalance);
        // modals-bar
        document.getElementById('success-modal').classList.add('modal-open');


        
        // Create div element
        const div = document.createElement('div');
        div.classList.add('w-[50%]', 'mx-auto', 'h-[100px]', 'border', 'border-5', 'border-gray-800');

       
        // Get the current date and time
        const currentDate = new Date();

        // Format the inner HTML with the donation message and the date
        div.innerHTML = `
        <p> ${noakhaliNewBalance} Taka is Donated for Noakhali-2024, Bangladesh </p>
        <p>Date: ${currentDate}</p>
    `;

        // Append the div to the history-container
        document.getElementById('history-container').appendChild(div);


    }
    else {
        alert('You have no sufficient balance');
    }



});



// Feni

document.getElementById('donate-feni-btn').addEventListener('click', function (event) {
    event.preventDefault();

    const addAmount = getInputFieldValueById('input-feni-amount');

    if (isNaN(addAmount) || addAmount <= 0) {
        alert('Wrong input! Please try again.');
        return;
    }

    const balance = getTextFieldValueById('my-balance');
    if (balance >= addAmount) {
        const feniBalance = getTextFieldValueById('feni-balance');

        const myNewBalance = balance - addAmount;
        const feniNewBalance = addAmount + feniBalance;

        document.getElementById('my-balance').innerText = myNewBalance;
        document.getElementById('feni-balance').innerText = feniNewBalance;

        // modal
        document.getElementById('success-modal').classList.add('modal-open');


      
        // Create div element
        const div = document.createElement('div');
        div.classList.add('w-[50%]', 'mx-auto', 'h-[100px]', 'border', 'border-5', 'border-gray-800');

        // Get the current date and time
        const currentDate = new Date();

        // Format the inner HTML with the donation message and the date
        div.innerHTML = `
        <p> ${feniNewBalance} Taka is Feni-2024, Bangladesh </p>
        <p>Date: ${currentDate}</p>
    `;

        // Append the div to the history-container
        document.getElementById('history-container').appendChild(div);

    }
    else {
        alert('You have no sufficient balance');
    }

});


// quota movement

document.getElementById('donate-quota-btn').addEventListener('click', function (event) {
    event.preventDefault();

    const addAmount = getInputFieldValueById('input-quota-amount');

    if (isNaN(addAmount) || addAmount <= 0) {
        alert('Wrong input! Please try again.');
        return;
    }

    const balance = getTextFieldValueById('my-balance');
    if (balance >= addAmount) {
        const quotaBalance = getTextFieldValueById('quota-balance');

        const myNewBalance = balance - addAmount;
        const quotaNewBalance = addAmount + quotaBalance;

        document.getElementById('my-balance').innerText = myNewBalance;
        document.getElementById('quota-balance').innerText = quotaNewBalance;

        // modal
        document.getElementById('success-modal').classList.add('modal-open');

        // Create div element
        const div = document.createElement('div');
        div.classList.add('w-[50%]', 'mx-auto', 'h-[100px]', 'border', 'border-5', 'border-gray-800');

        // Get the current date and time
        const currentDate = new Date();

        // Format the inner HTML with the donation message and the date
        div.innerHTML = `
        <p> ${quotaNewBalance} Taka is Quota Movement help, Bangladesh </p>
        <p>Date: ${currentDate}</p>
    `;

        // Append the div to the history-container
        document.getElementById('history-container').appendChild(div);

        

    }
    else {
        alert('You have no sufficient balance');
    }

});

// event handler of the modal
document.getElementById('close-modal').addEventListener('click', function () {
    document.getElementById('success-modal').classList.remove('modal-open');
});