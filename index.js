(function() {
  function speak(name, message) {
    return ["You turn to", name, "and say,", ["'", message, "'"].join('')].join(" ");
  }

  console.log(speak("Jim", "Lets write some code today!"));
}());
