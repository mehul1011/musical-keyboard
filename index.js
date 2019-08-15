const playingSound = (e) => {
    // console.log(e.keyCode);
const audio  = document.querySelector(`audio[data-key="${e.keyCode}"]`);
const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  // console.log(audio);
  if(!audio) {return;} // stops the function from running all together
  
  audio.currentTime = 0;
  audio.play(); 
  // console.log(key);

  key.classList.add("playing");
  // console.log(key);
  // key.classList.remove("playing");
  };


  window.addEventListener('keydown', playingSound);

  // const removeTransition = (e) => {
  //   // console.log(e);
  //   if (event.propertyName !== 'transform') {return;} // skip those properties we dont need it now 
  //   // console.log(e.propertyName);
  //   console.log(this);
  //   // this.classList.remove('playing');
  // }

  // we are not using arrow function as it doesn't have this defined in it so it uses its parent to get the value and its windows object but we want the target element so we will normal function which has this defined  (OR arrow function doesn't create its own scope so it has to refer to its parent) 

  function removeTransition(e) {
    // console.log(e);
    if (event.propertyName !== 'transform') {return;} // skip those properties we dont need it now 
    // console.log(e.propertyName);
    console.log(this);
    this.classList.remove('playing');
  }  // ( regular function creates its own scope so its have the value of this)

  const keys = document.querySelectorAll('.key');
  // since there are more than one key and querySelector gives a NodeList of all the keys to need to loop through all the keys and attach an eventListener to each keys so that we can check if the key is transitioned (have class of playing)


  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
