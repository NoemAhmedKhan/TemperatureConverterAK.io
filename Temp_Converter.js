// Temperature Converter

// Variables To Store The Value Of Selected Temperature ( Select 1 & Select 2 )
let Sel_1_Val;
let Sel_2_Val;

// Variables & Functions To Get The Value Of Selected Temperature 
let Select_1 = document.getElementById('select-1');
let Select_2 = document.getElementById('select-2');

function select_1(){

    if(Select_1.value == "celsius" || Select_1.value == "fahrenheit" || Select_1.value == "kelvin"){
        Sel_1_Val = Select_1.value;
    }

 };

function select_2(){

    if(Select_2.value == "celsius" || Select_2.value == "fahrenheit" || Select_2.value == "kelvin"){
        Sel_2_Val = Select_2.value;
    }

};


// Function For Convert Temperature
let Input_box_1 = document.getElementById('input-box-1');
let Input_box_2 = document.getElementById('input-box-2');

let Inp_Val_1;
let Inp_Val_2;


Input_box_1.addEventListener('input', call_input_1);
Input_box_2.addEventListener('input', call_input_2);


// Change Formula
let Formula = document.getElementById('formula');

function call_input_1(){

    
    // Pre defined temerature on website visit
    if(Sel_1_Val == null && Sel_2_Val == null){
        Inp_Val_1 = Input_box_1.value;
        Input_box_2.value = ( (Inp_Val_1 * 9/5) + 32 ).toFixed(2);

        // Formula
        Formula.innerText = ` (${Inp_Val_1} x 9/5 + 32)  = ${Input_box_2.value}`;
    }


    if(Sel_1_Val == 'celsius' && Sel_2_Val == 'celsius'){
        Input_box_2.value = Input_box_1.value;

        // Formula
        Formula.innerText = `${Input_box_1.value} = ${Input_box_2.value}`;
    }
    else if(Sel_1_Val == 'celsius' && Sel_2_Val == 'fahrenheit'){
        Inp_Val_1 = Input_box_1.value;
        Input_box_2.value = ( (Inp_Val_1 * 9/5) + 32 ).toFixed(2);

        // Formula
        Formula.innerText = `(${Inp_Val_1} x 9/5) + 32 ) = ${Input_box_2.value}`;
    }
    else if(Sel_1_Val == 'celsius' && Sel_2_Val == 'kelvin'){
        Inp_Val_1 = Input_box_1.value;
        Input_box_2.value = ( Number(Inp_Val_1 ) + 273.15 ).toFixed(2);

        // Formula
        Formula.innerText = `${Inp_Val_1} + 273.15 = ${Input_box_2.value}`;
    }


    else if(Sel_1_Val == 'fahrenheit' && Sel_2_Val == 'celsius'){
        Inp_Val_1 = Input_box_1.value;
        Input_box_2.value = ( (Inp_Val_1 - 32) * 5/9 ).toFixed(2);

        // Formula
        Formula.innerText = `(${Inp_Val_1} - 32) x 5/9 = ${Input_box_2.value}`;
    }
    else if(Sel_1_Val == 'fahrenheit' && Sel_2_Val == 'fahrenheit'){
        Input_box_2.value = Input_box_1.value;

        // Formula
        Formula.innerText = `${Input_box_1.value} = ${Input_box_2.value}`;
    }
    else if(Sel_1_Val == 'fahrenheit' && Sel_2_Val == 'kelvin'){
        Inp_Val_1 = Input_box_1.value;
        Input_box_2.value = ( (Inp_Val_1 - 32) * 5/9 + 273.15 ).toFixed(2);

        // Formula
        Formula.innerText = `{ (${Inp_Val_1} - 32) x 5/9 } + 273.15 = ${Input_box_2.value}`;
    }


    else if(Sel_1_Val == 'kelvin' && Sel_2_Val == 'celsius'){
        Inp_Val_1 = Input_box_1.value;
        Input_box_2.value = (Inp_Val_1 - 273.15).toFixed(2);

        // Formula
        Formula.innerText = `${Inp_Val_1} - 273.15 = ${Input_box_2.value}`;
    }
    else if(Sel_1_Val == 'kelvin' && Sel_2_Val == 'fahrenheit'){
        Inp_Val_1 = Input_box_1.value;
        Input_box_2.value = ( ( (Inp_Val_1 - 273.15) * 9/5 ) + 32 ).toFixed(2);

        // Formula
        Formula.innerText = `{ (${Inp_Val_1} - 273.15) x 9/5 } + 32  = ${Input_box_2.value}`;
    }
    else if(Sel_1_Val == 'kelvin' && Sel_2_Val == 'kelvin'){
        Input_box_2.value = Input_box_1.value;

        // Formula
        Formula.innerText = `${Input_box_1.value} = ${Input_box_2.value}`;
    }

};


function call_input_2(){


    // Pre defined temerature on website visit
    if(Sel_2_Val == null && Sel_1_Val == null){
        Inp_Val_2 = Input_box_2.value;
        Input_box_1.value = ( (Inp_Val_2 * 9/5) + 32 ).toFixed(2);
    
        // Formula
        Formula.innerText = `(${Inp_Val_2} x 9/5) + 32 = ${Input_box_1.value}`;
    }


    if(Sel_2_Val == 'celsius' && Sel_1_Val == 'celsius'){
        Input_box_1.value = Input_box_2.value;

        // Formula
        Formula.innerText = `${Input_box_2.value} = ${Input_box_1.value}`;
    }
    else if(Sel_2_Val == 'celsius' && Sel_1_Val == 'fahrenheit'){
        Inp_Val_2 = Input_box_2.value;
        Input_box_1.value = ( (Inp_Val_2 * 9/5) + 32).toFixed(2);

        // Formula
        Formula.innerText = `(${Inp_Val_2} x 9/5) + 32 = ${Input_box_1.value}`;
    }
    else if(Sel_2_Val == 'celsius' && Sel_1_Val == 'kelvin'){
        Inp_Val_2 = Input_box_2.value;
        Input_box_1.value = (Number(Inp_Val_2) + 273.15).toFixed(2);

        // Formula
        Formula.innerText = `${Inp_Val_2} + 273.15 = ${Input_box_1.value}`;
    }


    else if(Sel_2_Val == 'fahrenheit' && Sel_1_Val == 'celsius'){
        Inp_Val_2 = Input_box_2.value;
        Input_box_1.value = ((Inp_Val_2 - 32) * 5/9).toFixed(2);

        // Formula
        Formula.innerText = `(${Inp_Val_2} - 32) x 5/9 = ${Input_box_1.value}`;
    }
    else if(Sel_2_Val == 'fahrenheit' && Sel_1_Val == 'fahrenheit'){
        Input_box_1.value = Input_box_2.value;

        // Formula
        Formula.innerText = `${Input_box_2.value} = ${Input_box_1.value}`;
    }
    else if(Sel_2_Val == 'fahrenheit' && Sel_1_Val == 'kelvin'){
        Inp_Val_2 = Input_box_2.value;
        Input_box_1.value = ( ((Inp_Val_2 - 32) * 5/9) + 273.15).toFixed(2);

        // Formula
        Formula.innerText = `{ (${Inp_Val_2} - 32) x 5/9 } + 273.15 = ${Input_box_1.value}`;
    }


    else if(Sel_2_Val == 'kelvin' && Sel_1_Val == 'celsius'){
        Inp_Val_2 = Input_box_2.value;
        Input_box_1.value = (Inp_Val_2 - 273.15).toFixed(2);

        // Formula
        Formula.innerText = `${Inp_Val_2} - 273.15 = ${Input_box_1.value}`;
    }
    else if(Sel_2_Val == 'kelvin' && Sel_1_Val == 'fahrenheit'){
        Inp_Val_2 = Input_box_2.value;
        Input_box_1.value = ( ((Inp_Val_2 - 273.15) * 9/5) + 32).toFixed(2);

        // Formula
        Formula.innerText = `{ (${Inp_Val_2} - 273.15) x 9/5 } + 32 = ${Input_box_1.value}`;
    }
    else if(Sel_2_Val == 'kelvin' && Sel_1_Val == 'kelvin'){
        Input_box_1.value = Input_box_2.value;

        // Formula
        Formula.innerText = `${Input_box_2.value} = ${Input_box_1.value}`;
    }

};

