
//ACTIVIDAD PRINCIPAL
//* First string variable
// Create a variable, message, that stores the string: "You have tree new notifications"
// Create a variable, messageToUser, that contains the message we have logged
let username = "per";
let message = "You have tree new notifications";
let messageToUser = message +", "+ username + "!";

console.log(messageToUser);




//1. Guardar la data del contador en una variable 
//* Variable let muestra la ultima asignacion a la variable
//1. Inciar el contador en o
let count = 0;
// camelCase
let countEl = document.getElementById("count-el") //funcion pasando argumentos
//2. listen for clicks en el boton incrementar

//3. Incrementar la variable count cuando el boton es presionado.

function increment(){
count += 1 // 5 + 1 = 6
//4. Cambiar el count-el en el html para reflejar el resultado
countEl.innerText = count;
}

increment();
// 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el");
// 5. Create a function, save(), which logs out the count when it's called
function save(){
     // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
     let concat = count + "  -  ";
    // 3. Render the variable in the saveEl using innerText *textcontent elimina los espacios
     saveEl.textContent += concat;
    // // NB: Make sure to not delete the existing content of the paragraph   

    count = 0;
    countEl.textContent = count;
    console.log(count);
}


//
 let firstBatch = 5
 let secondBatch = 7

// //*Sumar variables dintintas
 let count2 = firstBatch + secondBatch

// //2. Ver la información por consola
 //console.log(count2);

//ACTIVIDAD 1 VARIABLES
//1. Crear variable myAge y setearla con mi edad.

let myAge = 26;

//2. Mostrar el resultado por consola

console.log(myAge);

//ACTIVIDAD 2  OPERACIONES
//1. Create two variables, myAge and humanDogRatio
let myAge2 = 26;

let humanDogRatio = 7;

// //2. Multiply the two together and stroe teh result in myDogAge
let myDogAge = myAge*humanDogRatio;

// //3. Log myDogAge to the console

//console.log(myDogAge);

//ACTIVIDAD 3   COUNT

//1. Create a variable, bonusPoint
//* Initialize it as 50 , incrementar en 100, decrementar en 25, finalmente incrementar en 75
//* Console.log para ver el resultado de cada incremento
 let bonusPoint = 50

bonusPoint = bonusPoint + 50;

 //console.log(bonusPoint);

 bonusPoint = bonusPoint - 75;

 //console.log(bonusPoint);

 bonusPoint = bonusPoint + 45;

 //console.log(bonusPoint);

//ACTIVIDAD 5 funciones para escribir menos codigo = cada vez que vea un repetecion utilizar funcion
// Setting up the the race 🏎 🏎 🏎

 function countdown(){
     console.log(5)
     console.log(4)
     console.log(3)
     console.log(2)
     console.log(1)    
 }

 countdown()
// // GO! 🏁
// // Players are running the race 🏎 💨
// // Race is finished! 🍾

// // Get ready for a new race 🏎 🏎 🏎

countdown()

// Create a function (you decide the name) that logs out the number 42 to the console
function myLogger(){
    console.log(42);
}
// Call/invoke the function
myLogger();

let lap1 = 34
let lap2 = 33
let lap3 = 36

// Create a function that logs out the sum of all the lap times, si se define una variable dentro de una funcion solo
//* Existira dentro de la función

function totaLap(){
   let totalTime = lap1+lap2+lap3;
   console.log(totalTime);
}

totaLap();

let lapsCompleted = 0

// Create a function that increments the lapsCompleted variable with one
function incrementLaps()
{
    lapsCompleted = lapsCompleted + 1
}
// Run it three times
incrementLaps();
incrementLaps();
incrementLaps();

console.log(lapsCompleted)

//ACTIVIDAD 6
// Create two variables, name and greeting. The name variable should store your name,
// and the greeting should store e.g. "Hi, my name is "
// Create a third variable, myGreeting, that contatenates the two strings
let name = "Marcelits";
let greeting = "Hi my name is";
let myGreeting = greeting + " " + name;

//console.log(myGreeting);

// console.log(4 + 5) // 9
// console.log("2" + "4")// 24
// console.log("5" + 1)//51
// console.log(100 + "100")//100100

//ACTIVIDAD 7 
// Grab the welcome-el paragraph and store it in a variable called welcomeEl
// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page
// Render the welcome message using welcomeEl.innerText
// let welcomeE1 =  document.getElementById("welcome-el");
// let name2 = "Marcelits ";
// let greeting2 = "Welcome back "

// welcomeE1.innerText =  greeting2 + name2 ;

// // Add an emoji to the end! 👋
// // WRITE YOUR CODE BELOW HERE
// // HINT: count = count + 1
// //version corta concatenar
// welcomeE1.innerText += "👋";












