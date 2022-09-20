'use strict';

//request the value from the user
//let string1 = "";

document.querySelector(".btnClick").addEventListener("click", function(){
  
    //store the value that the user provided
    let string1 = document.querySelector(".string1TxtBox").value;

    //ignore the spaces between words
    let result = string1.split(" ").join("");

    //expand individual letters in an array with spread syntax
    let strTable = [...result];

    //print the legth of the sentence
    document.querySelector(".counterResult").textContent = `You typed ${strTable.length} characters.`;

    //find the unique characters with Set
    let uniqueCharacters = new Set (result);
    document.querySelector(".uniqueCharacters").textContent = `Your sentence / word has ${uniqueCharacters.size} unique characters`;

    //print to the user the characters that he/she typed with spread
    document.querySelector(".Characters").textContent = `The characters you typed are: ${strTable}`;        
    
    //print to the user the unique characters that he/she typed with spread
    document.querySelector(".UniqueCharacters").textContent = `The unique characters you typed are: ${[...uniqueCharacters]}`;
  
})

//clear values button

document.querySelector(".clearBtnClick").addEventListener("click", function(){

    document.querySelector(".string1TxtBox").value = "";
    document.querySelector(".counterResult").textContent = "Characters typed";
    document.querySelector(".uniqueCharacters").textContent = "Unique Characters";
    document.querySelector(".Characters").textContent = "The Characters you typed";
    document.querySelector(".UniqueCharacters").textContent = "The Unique Characters you typed";
})
