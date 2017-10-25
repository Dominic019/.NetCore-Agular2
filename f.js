let commands = [];

$("#upload").change(event => {
        openFile(event);
 });

function openFile(event) {
	debugger;
  var input = event.target;

  var reader = new FileReader();
  reader.onload = function(){
    var text = reader.result;
    let commands = [];
   	commands = text.split('\n');
    
    let description = commands[0];//window.prompt('Ingresa la descripcion del automata');
    let language = commands[1];//window.prompt('Ingresa el lenguaje');
    let stringStates = commands[2];//window.prompt('Ingresa el conjunto de estados separados por coma');

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
	
    states.forEach((item) => {
      objectStates.push(new State(item));
    });

    let initialState = commands[3];//window.prompt('Ingresa el estado inicial');

    objectStates.find( item => {
    	debugger;
      if(initialState === item.name){
        item.isInitial = true;
      }
    });

    let stringfinalStates = commands[4];//window.prompt('Ingresa los estados finales separados por coma');

    let finalStates = stringfinalStates.split(',');

    finalStates.forEach(itemFinal => {

      objectStates.find( itemState => {
      if(itemFinal === itemState.name)
          itemState.isFinal = true;
      });
    });

    debugger;
    let numberTrasitions = commands[5];//window.prompt('Ingresa el numero de trancisiones');

    for(let i = 0; i < numberTrasitions; i++ ){
      let stringTrasitions = commands[6 + i];//window.prompt('Transicion: ' + (i + 1));
      let tr = stringTrasitions.split(',');
      objectTransitions.push(new Transitions(tr[0], tr[1], tr[2]))
    }

    let string = commands[5 + numberTrasitions];//window.prompt('Ingresa una cadena');
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
  };
  reader.readAsText(input.files[0]);
};


 <body>
  <input id="upload" type='file' accept='text/plain'/><br/>
</body>
 
