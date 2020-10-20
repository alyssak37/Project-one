
//constants

//const key = 'b3aa6bfee94a6040ffc0197c9eb92a1b'; first key
//const id = '52c30435'; second key
//const key = '7b5d37d71ff0cd6ec5ff345da2707fd1'; daniel's
//const id = '4be09ebb'; daniel's
const key = '4108a648b77483595316cba0cc6ae440';
const id = '76446193';
const BASE_URL = 'https://api.edamam.com/search'

//variables
let recipeData, recipeDetail;

//cached references
const $input = $('input[type="text"]');
const $form = $('form');
const userInput = $input.val();
//event listeners 
$form.on('submit', handleClick);


// functions
init();
 function init() {
     getData();
 }
    
 
 function getData(detailURL){
 const url = detailURL ? detailURL :BASE_URL
     $.ajax(BASE_URL + '?q=' + userInput + '&app_id=' + id + '&app_key=' + key)
      .then(function(data) {
         console.log('Data:', data)
         if(detailURL) {

             recipeDetail = data;
            render(true);
             
         } else {
             recipeData = data; 
             renderRecipes();
         }
     }, function(error) {
        console.log('Error:', error);
     });
 }

 function handleGetData(event) {
    event.preventDefault();
 }
 
function handleClick() {
    const url = this.dataset.url;
    getData(url);
};


function renderRecipes(){
   $input.html(`Recipes For: ${recipeData.hits.length}`)
}