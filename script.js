
(function(window){ // STEP 1

    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

    for( var i=0; i<names.length; i++){ // STEP 10
        
        var firstLetter = names[i].charAt(0).toLowerCase(); // STEP 11 :
      
        if(firstLetter === 'j'){ // STEP 12
            byeSpeaker.speak(names[i]);
        }
        else{
            helloSpeaker.speak(names[i]);
        }
    }
})();
