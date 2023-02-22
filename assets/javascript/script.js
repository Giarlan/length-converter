let input = document.getElementById ("value");
let result = document.getElementById ("outcome");
let inputType = document.getElementById ("select1");
let resultType = document.getElementById ("select2");
let inputTypeValue, resultTypeValue;

input.addEventListener ("keyup", myResult);
inputType.addEventListener ("change", myResult);
resultType.addEventListener ("change", myResult);

inputTypeValue = inputType.value;
resultTypeValue = resultType.value;


function myResult() {
    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;

    if (inputTypeValue === "millimeter" && resultTypeValue === "kilometer") {
        result.value = Number (input.value) / 1000000 + " " + "km";
    }else if(inputTypeValue === "millimeter" && resultTypeValue === "meter") {
        result.value = Number (input.value) / 1000 + " " + "m";
    }else if(inputTypeValue === "millimeter" && resultTypeValue === "centimeter") {
        result.value = Number (input.value) / 10 + " " + "cm";
    }else if(inputTypeValue === "millimeter" && resultTypeValue === "millimeter") {
        result.value = input.value + " " + "mm";
    }

    if (inputTypeValue === "centimeter" && resultTypeValue === "kilometer") {
        result.value = Number (input.value) / 100000 + " " + "km";
    }else if(inputTypeValue === "centimeter" && resultTypeValue === "meter") {
        result.value = Number (input.value) / 100 + " " + "m";
    }else if(inputTypeValue === "centimeter" && resultTypeValue === "millimeter") {
        result.value = Number (input.value) * 10 + " " + "mm";
    }else if(inputTypeValue === "centimeter" && resultTypeValue === "centimeter") {
        result.value = input.value + " " + "cm";
    }

    if (inputTypeValue === "meter" && resultTypeValue === "kilometer") {
        result.value = Number (input.value) / 1000 + " " + "km";
    }else if(inputTypeValue === "meter" && resultTypeValue === "centimeter") {
        result.value = Number (input.value) * 100 + " " + "cm";
    }else if(inputTypeValue === "meter" && resultTypeValue === "millimeter") {
        result.value = Number (input.value) * 1000 + " " + "mm";
    }else if(inputTypeValue === "meter" && resultTypeValue === "meter") {
        result.value = input.value + " " + "m";
    }

    if (inputTypeValue === "kilometer" && resultTypeValue === "meter") {
        result.value = Number (input.value) * 1000 + " " + "m";
    }else if(inputTypeValue === "kilometer" && resultTypeValue === "centimeter") {
        result.value = Number (input.value) * 100000 + " " + "cm";
    }else if(inputTypeValue === "kilometer" && resultTypeValue === "millimeter") {
        result.value = Number (input.value) * 1000000 + " " + "mm";
    }else if(inputTypeValue === "kilometer" && resultTypeValue === "kilometer") {
        result.value = input.value + " " + "km";
    }
    
}

