(function(window){
  var Bye={};
  var speakWord="Good Bye";
  Bye.speak=function(name){
    console.log(speakWord + " " + name);
  };
  window.Bye=Bye;
})(window);