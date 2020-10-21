//constants

//const key = 'b3aa6bfee94a6040ffc0197c9eb92a1b'; first key
//const id = '52c30435'; first id
//const key = '7b5d37d71ff0cd6ec5ff345da2707fd1'; daniel's
//const id = '4be09ebb'; daniel's
//const key = '4108a648b77483595316cba0cc6ae440'; second key
//const id = '76446193'; second id
const key = '23ae21896dda4dd754b5755011b40c14';
const id = '9ce5db68';
const BASE_URL = 'https://api.edamam.com/search'

//variables
let recipeData, recipeDetail;

//cached references
const $input = $('input[type="text"]');
const $form = $('form');
const $title = $('#title');

//event listeners 
$form.on('submit', getData);


// functions
init();

function init() {

}

function getData(event) {
    event.preventDefault();

    const userInput = $input.val();
    $.ajax(BASE_URL + '?q=' + userInput + '&app_id=' + id + '&app_key=' + key)
        .then(function (data) {

            recipeData = data.hits
            renderRecipes();
        }, function (error) {
            console.log('Error:', error);
        });
}


function renderRecipes() {
    const html = recipeData.map(function ({
        recipe
    }) {
        return `
    <div>
    <h3>${recipe.label}</h3>
    <p>${recipe.calories}</p>
    <p>${recipe.ingredients.map(obj => obj['text']).join('<br> ')}</p>
    </div>`;
    });
    $title.html(html)
}