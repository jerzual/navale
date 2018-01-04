import * as React from "react";
import * as ReactDOM from "react-dom";
import App from './App';
import * as BABYLON from 'babylonjs';
import 'picnic/src/picnic.scss';
import './index.scss';
import { Provider } from 'react-redux';
import store from './reducers';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

// Get the canvas element from our HTML below
const canvas = document.querySelector("#canvas");
// Load the BABYLON 3D engine
const engine = new BABYLON.Engine(canvas, true);
// -------------------------------------------------------------
// Here begins a function that we will 'call' just after it's built
const createScene = function () {
      // Now create a basic Babylon Scene object
    const scene = new BABYLON.Scene(engine);
      // Change the scene background color to green.
      scene.clearColor = new BABYLON.Color4(0, 1, 0, 1);
      // This creates and positions a free camera
    const camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);
      // This targets the camera to scene origin
      camera.setTarget(BABYLON.Vector3.Zero());
      // This attaches the camera to the canvas
      camera.attachControl(canvas, false);
      // This creates a light, aiming 0,1,0 - to the sky.
    const light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
      // Dim the light a small amount
      light.intensity = .5;
      // Let's try our built-in 'sphere' shape. Params: name, subdivisions, size, scene
    const sphere = BABYLON.Mesh.CreateSphere("sphere1", 16, 2, scene);
      // Move the sphere upward 1/2 its height
      sphere.position.y = 1;
      // Let's try our built-in 'ground' shape. Params: name, width, depth, subdivisions, scene
    const ground = BABYLON.Mesh.CreateGround("ground1", 6, 6, 2, scene);
      // Leave this function
      return scene;
}; // End of createScene function
// -------------------------------------------------------------
// Now, call the createScene function that you just finished creating
var scene = createScene();
// Register a render loop to repeatedly render the scene
engine.runRenderLoop(function () {
      scene.render();
});
// Watch for browser/canvas resize events
window.addEventListener("resize", function () {
      engine.resize();
});