(function(window){
  var BYE={};
  var speakWord="Good Bye";
  BYE.speak=function(name){
    console.log(speakWord + " " + name);
  }
  window.BYE=BYE;
})(window);