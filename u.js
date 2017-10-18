let description = window.prompt('Ingresa la descripcion del automata');
let language = window.prompt('Ingresa el lenguaje');
let stringStates = window.prompt('Ingresa el conjunto de estados separados por coma');

let objectStates = [];
let objectTransitions = [];
let states = stringStates.split(',');

function State(name){
	this.name = name;
	this.isInitial = false;
  this.isFinal = false;
}

function Transitions(initState, simbol, finalState){
	this.initState = initState;
	this.simbol = simbol;
  this.finalState = finalState;
}

states.forEach(item => {
	objectStates.push(new State(item));
});

let initialState = window.prompt('Ingresa el estado inicial');

objectStates.find( item => {
	if(initialState === item.name)
  	item.isInitial = true;
});

let stringfinalStates = window.prompt('Ingresa los estados finales separados por coma');

let finalStates = stringfinalStates.split(',');

finalStates.forEach(itemFinal => {

	objectStates.find( itemState => {
  if(itemFinal === itemState.name)
      itemState.isFinal = true;
	});
});

debugger;
let numberTrasitions = window.prompt('Ingresa el numero de trancisiones');

for(let i = 0; i < numberTrasitions; i++ ){
  let stringTrasitions = window.prompt('Transicion: ' + (i + 1));
  let tr = stringTrasitions.split(',');
	objectTransitions.push(new Transitions(tr[0], tr[1], tr[2]))
}

let string = window.prompt('Ingresa una cadena');
console.log('Procesando la cadena: ' + string);

let message = '';
let currentState = null;
let end = false;

objectStates.find( itemState => {
  if(itemState.isInitial === true)
  		currentState = itemState.name;
});

let arrayString = Array.from(string);
arrayString.forEach(stringSimbol => {
	debugger;
  objectTransitions.find( itemTr => {
  	debugger;
    if(itemTr.initState === currentState && itemTr.simbol === stringSimbol){
        currentState = itemTr.finalState;
        message = currentState + ',' + string[0] + '=> ' + itemTr.finalState;
    }
  });
});

objectStates.find( currentState => {
	debugger;
  if(itemState.name === currentState && itemState.isFinal)
  		end = true;
});

debugger;
if(end)
	console.log('si pertenece');
else
	console.log('no pertenece');


console.log(objectStates);
console.log(objectTransitions);
