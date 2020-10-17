
//constants

const key = 'b3aa6bfee94a6040ffc0197c9eb92a1b';
const id = '52c30435';
const BASE_URL = 'https://api.edamam.com/search'

//variables
let recipeData, recipeDetail;

//cached references
const $input = $('input[type="text"]');
const $form = $('form');

//event listeners 
$form.on('submit', handleGetData);


// functions
init();
 function init() {
     getData();
 }
    
 
 function getData(detailURL){
 const url = detailURL ? detailURL :BASE_URL
     $.ajax(BASE_URL + '?q=avocado&app_id=' + id + '&app_key=' + key)
     .then(data => console.log(data))
     
     .then(error => console.log(error))
  

 };

 function handleGetData(event) {
    event.preventDefault();
 }
