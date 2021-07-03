(function(window){
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  for(var i= 0; i < names.length; i++) {
    var firstLetter;
    firstLetter=names[i].charAt(0);
    if (firstLetter=='J' || firstLetter=='j') {
      byeSpeaker.speak(names[i]);
    } else {
      HelloSpeaker.speak(names[i]);
    }
  }
  window.names= names;
})(window); 