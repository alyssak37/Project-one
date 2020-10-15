
//constants

//const API_KEY = '86398dfa2dd7428ab1572271f2048f4c';
//const BASE_URL = 'https://api.spoonacular.com/recipes/complexSearch';


const key = 'b3aa6bfee94a6040ffc0197c9eb92a1b';
const id = '52c30435';
const url = 'https://api.edamam.com/search'

const $input = $('input[type="text"}');
let recipeData;
//variables


//cached references


//event listeners 
$form.on('submit', handleGetData);



// functions
init();
 function init() {
     getData();
 }
     
 recipeData = data;

 function getData(detailURL){

     $.ajax(url + '?q=chocolate&app_id=' + id + '&app_key=' + key)
     .then(data => console.log(data))
     .then(error => console.log(error))

 };
 