function saturdayFun(activity = 'roller-skate'){
        return `This Saturday, I want to ${activity}!`;
   
        
}



let mondayWork = function(activity = 'go to the office'){
        return `This Monday, I will ${activity}.`;
    
}



function wrapAdjective(specialChar = '*'){
    return function(text = 'special'){
        return `You are ${specialChar}${text}${specialChar}!`;
    }
}

//function wrapAdjective(){
    //const innerFunction = function (name, lang = "Python") {
        //return `${greeting}, ${name}! ${msg} ${lang}`;
    //};
    //return innerFunction("student", "JavaScript");
//}
//outer("Hello")("student", "JavaScript");