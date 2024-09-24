
document.getElementById('donate-btn').addEventListener('click', function(){
    showSectionById('card-container');
   
    document.getElementById('donate-btn').classList.add('bg-customGreen');
    document.getElementById('history-btn').classList.remove('bg-customGreen');

})

document.getElementById('history-btn').addEventListener('click', function(){
    showSectionById('history-list');
    document.getElementById('history-btn').classList.add('bg-customGreen');
    document.getElementById('donate-btn').classList.remove('bg-customGreen');

})