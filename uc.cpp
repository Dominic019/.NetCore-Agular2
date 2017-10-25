// ConsoleApplication1.cpp: define el punto de entrada de la aplicación de consola.
//

#include "stdafx.h"
#include <iostream>
#include <string>
#include <utility>
#include <map>
#include <iomanip>
#include <cstdlib>
#include <stdio.h>
#include <string.h>
#include <vector>

using namespace std;

class State {
public:
	State() {};

	State(string name) {
		Name = name;
		IsFinal = false;
	};

	string Name;
	bool IsFinal;
};


class Transition {
public:
	Transition() {};

	Transition(string initState, char simbol, string finalState) {
		InitState = initState;
		Simbol = simbol;
		FinalState = finalState;
	};

	string InitState;
	char Simbol;
	string FinalState;
};

std::vector<std::string> split(std::string str, std::string sep) {
	char* cstr = const_cast<char*>(str.c_str());
	char* current;
	char *next_token2;
	std::vector<std::string> arr;
	rsize_t strmax = sizeof str;
	current = strtok_s(cstr, sep.c_str(), &next_token2);
	while (current != NULL) {
		arr.push_back(current);
		current = strtok_s(NULL, sep.c_str(), &next_token2);
	}
	return arr;
}

/*----------------------------------------*/
int main()
{
	string description = "";
	string language = "";
	
	
	string stringFinalStates = "";
	
	vector<State> setStates;
	vector<Transition> setTransitions;
	string currentState = "";
	bool evaluation = false;


	cout << "Automata" << endl;

	cout << "Descripcion del automata: " << endl;
	getline(cin, description);

	cout << "Lenguaje: " << endl;
	getline(cin, language);

	//** Se Establece el conjunto de estados **//
	string stringStates = "";
	cout << "Conjunto de estados separados por coma: " << endl;
	getline(cin, stringStates);
	vector<string> states = split(stringStates, ",");

	for (size_t i = 0; i < states.size(); i++)
		setStates.push_back(State(states[i]));
	//**  **//

	string initState = "";
	cout << "Estado inicial: " << endl;
	getline(cin, initState);

	//** Se Establece el conjunto de estados finales **//
	cout << "Estados finales separados por coma: " << endl;
	getline(cin, stringFinalStates);
	vector<string> finalStates = split(stringFinalStates, ",");

	for (size_t i = 0; i < finalStates.size(); i++) {
		for (size_t j = 0; j < setStates.size(); j++) {
			if (setStates[j].Name == finalStates[i])
				setStates[j].IsFinal = true;
		}
	}
	//**  **//

	int numberTransitions = 0;
	cout << "Numero de transiciones: " << endl;
	cin >> numberTransitions;

	string stringTransition = "";

	for (size_t i = 0; i < numberTransitions; i++) {
		cout << "trancision: " << i << endl;
		cin >> stringTransition;
		vector<string> finalStates = split(stringTransition, ",");
		setTransitions.push_back(Transition(finalStates[0], finalStates[1][0], finalStates[2]));
	}

	string stringTest = "";
	cout << "Cadena: " << endl;
	getline(cin, stringTest);

	currentState = initState;

	for (size_t i = 0; i < stringTest.size(); i++) {
		
		for (size_t j = 0; j < setTransitions.size(); j++) {

			if (setTransitions[j].InitState == currentState && setTransitions[j].Simbol == stringTest[i]) {
				currentState = setTransitions[j].FinalState;
			}
		}
	}

	for (size_t i = 0; i < setStates.size(); i++) {

		if (setStates[i].Name == currentState && setStates[i].IsFinal) {
			evaluation = true;
		}
	}

	return 0;
}



