// Loreal Paris 
// by Linto Thomas :: @lintothoma77

// WHAT HAS CHANGED FROM PREVIOUS VERSIONS//

// In order to load Textures, Materials, and Objects, we must 
// now use something in Javascript called "Promises". The basic
// concept is Spark AR now wants to make sure these assets are 
// available to the script to manipulate before executing any code.

// When loading assets, find() has been changed to findFirst() and findAll()

// Load the modules
const Scene = require('Scene');
const NativeUI = require('NativeUI');
const Textures = require('Textures');

// First, we create a Promise and load all the assets we need for our scene
// The following example shows how to load Textures, Materials, and an Object.

Promise.all([

    // Loading Textures for the buttons
    Textures.findFirst('1'),
    Textures.findFirst('2'),
    Textures.findFirst('3'),
    Textures.findFirst('4'),
    Textures.findFirst('5'),

    // Loading the facemesh
    Scene.root.findFirst('faceMesh0'),
    Scene.root.findFirst('faceMesh1'),
    Scene.root.findFirst('faceMesh2'),
    Scene.root.findFirst('faceMesh3'),
    Scene.root.findFirst('faceMesh4'),

    Scene.root.findFirst('plane0'),
    Scene.root.findFirst('plane1'),
    Scene.root.findFirst('plane2'),
    Scene.root.findFirst('plane3'),
    Scene.root.findFirst('plane4'),
// Now, we wait for a "go ahead" from the script to let us know when
// we can start using our assets and creating the NativeUI Picker

]).then(function(results){

    // Assets are loaded, so let's set them all so we can use them later in the script.
    // The assets are all returned in an object called "results" in the order that we 
    // loaded them. Remember, the index starts at 0 so the first asset is always results[0],
    // the next is results[1], etc.

    // First, we set the buttons for the NativeUI Picker
    const button1 = results[0];
    const button2 = results[1];
    const button3 = results[2];
    const button4 = results[3];
    const button5 = results[4];

    // Finally, we set the facemeshs
    const facemesh0 = results[5];
    const facemesh1 = results[6];
    const facemesh2 = results[7];
    const facemesh3 = results[8];
    const facemesh4 = results[9];

    // Finally, we set the facemeshs
    const plane0 = results[10];
    const plane1 = results[11];
    const plane2 = results[12];
    const plane3 = results[13];
    const plane4 = results[14];


    // Now, we can finally start building the NativeUI Picker
    const configuration = {

      // This index controls where the NativeUI Picker starts.
      // Let's keep things simple for now and start on the first 
      // button, so we keep it at 0. Remember most things start at 0, not 1.
      selectedIndex: 0,

      // These are the image textures to use as the buttons in the NativeUI Picker
      items: [
        {image_texture: button1},
        {image_texture: button2},
        {image_texture: button3},
        {image_texture: button4},
        {image_texture: button5}
      ]

    };

    // Create the NativeUI Picker
    const picker = NativeUI.picker;

    // Load our configuration
    picker.configure(configuration);

    // Show the NativeUI Picker
    picker.visible = true;

    // This is a monitor that watches for the picker to be used.
    picker.selectedIndex.monitor().subscribe(function(val) {

      // First, hide all the facemesh and plane
      facemesh0.hidden = true;
      facemesh1.hidden = true;
      facemesh2.hidden = true;
      facemesh3.hidden = true;
      facemesh4.hidden = true;

      plane0.hidden = true;
      plane1.hidden = true;
      plane2.hidden = true;
      plane3.hidden = true;
      plane4.hidden = true;

      // When a button is selected, we show the corresponding facemesh.
      // Using the index of the selected button (0,1,2,etc), we can
      // use build switches all sorts of ways.
      // In this example, we are going to keep it dead simple with a JS switch.

      // Pass the index to the switch to determine which facemesh should be visible
      switch(val.newValue) {
        case 0: {
           facemesh0.hidden = false;
           plane0.hidden = false;
           break;
        }
        case 1: {
           facemesh1.hidden = false;
           plane1.hidden = false;
           break;
        }
        case 2: {
           facemesh2.hidden = false;
           plane2.hidden = false;
           break;
        }
        case 3: {
          facemesh3.hidden = false;
          plane3.hidden = false;
          break;
        }
        case 4: {
          facemesh4.hidden = false;
          plane4.hidden = false;
          break;
        }
      }

    });

});

//HELP AND NOTES

// If you do not see your NativeUI icons on the screen make sure
// compression is disabled on any textures that you are using for
// the NativeUI. Sometimes they can get switched back.

// Remember, everything starts at a 0 index, not 1. Sometimes this
// can be tricky and you might load an incorrect asset.