const text = document.getElementById('text');
const author = document.getElementById('author');
const give= document.querySelectorAll("#givesColor");
const newQuote = document.querySelector('#new-quote');

newQuote.addEventListener('click',quoteChange)



var colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
  ];


 let myQuote = new Promise((resolve,reject)=>{
     const jsonUrl = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'

     let request = new XMLHttpRequest;
     request.open('get',jsonUrl);
     request.responseType ='json';
     request.send();

     request.onload = function(){
         const response = request.response;
         if(response){
             resolve(response)
         }else{
             reject("error in fetching data")
         }
     }

 })

 async function theQuote(){
     try{
     let result = await myQuote;
      let  quote =result['quotes'][Math.floor(Math.random()* result['quotes'].length)];
      console.log(quote);
       document.querySelector("#text-in").textContent = " " + quote['quote'];
      author.textContent = '- ' + quote['author'];
      

     }
     catch(err){
         console.log(err)
     }
 };


 function calorSetter(){
     let selectedColor= colors[Math.floor(Math.random()* colors.length)]
     document.body.style.backgroundColor = selectedColor;
     text.style.color=selectedColor;
     author.style.color=selectedColor;
     Array.from(give).map(x=>{
       x.style.color =selectedColor;
    });

     document.querySelector("#new-quote").style.backgroundColor = selectedColor;
     document.querySelector("#text-in").style.opacity = '1';
    
     console.log(selectedColor);
     theQuote();


     
 }


 theQuote();
calorSetter();

 function quoteChange(){
     theQuote();
     calorSetter();
 }
 
 
 
