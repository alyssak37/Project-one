//constants


//const key = '23ae21896dda4dd754b5755011b40c14';
//const id = '9ce5db68';
const key = '778bb74471ed83a168156b14aa172a62';
const id = '056208fe';
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