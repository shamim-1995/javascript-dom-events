console.log('This is separate file');
//  Option 1: Directly set o the HTML element.
// <button onclick="console.log(65)">Another button</button>

// Option 2: Add onclick function on the HTML element.

// IMPORTANT: We will use this.

// <button onclick="makeRed()">Make Red</button>

function makeRed(){
    document.body.style.backgroundColor = 'red';
}

// Option: 3

const makeBlueButton = document.getElementById('make-blue');
        makeBlueButton.onclick = makeBlue;

        function makeBlue(){
            document.body.style.backgroundColor = 'blue';
        }

 // Option: 3 another
 
 const purpleButton = document.getElementById('make-purple');
        purpleButton.onclick = function makePurple(){
            document.body.style.backgroundColor = 'purple';
        }


 // OPtion:4 
 const pinkButton = document.getElementById('make-pink');
 pinkButton.addEventListener('click',makePink );
 function makePink(){
     document.body.style.backgroundColor = 'pink';
 }

 // Option:4 another

 const makeGreenButton = document.getElementById('make-green');
 makeGreenButton.addEventListener('click', function makeGreen(){
     document.body.style.backgroundColor = 'green';
 })


 // Option: 4 Final.
 // IMPORTANT: We will use this sometimes.

 document.getElementById('make-goldenrod').addEventListener('click',function(){
    document.body.style.backgroundColor = 'goldenrod';

})




