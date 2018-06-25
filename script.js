console.log('js is working');
let counter = 0;
$(document).ready(pageReady);

function pageReady(){
    console.log('jq is working');
    clickHandler();
}

function clickHandler() {
    $('#generateButton').on('click', generateElement);
    $('body').on('click','.swap', swapColor);
    $('body').on('click','.delete', deleteLine);
}

function generateElement(){
    console.log('in generateElement');
    let  $div= $('<div>flatulance</div>')
    $div.append('<p>'+counter+'</p>')
    $div.append('<button class="swap">Swap</button>')
    $div.append('<button class="delete">Delete</button>')
    $('body').append($div);
    counter++;
}

function swapColor() {
    console.log('in swapColor');
    $(this).parent().toggleClass('yellow');
}

function deleteLine(){
    console.log('in deleteLine');
    $(this).parent().empty();
}