/**
 * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
 */

//==============================================================================
// Welcome to scripting in Spark AR Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//==============================================================================

// How to load in modules
const Scene = require('Scene');

// Use export keyword to make a symbol available in scripting debug console
export const Diagnostics = require('Diagnostics');

// To use variables and functions across files, use export/import keyword
// export const animationDuration = 10;

// Use import keyword to import a symbol from another file
// import { animationDuration } from './script.js'

// To access scene objects
// const directionalLight = Scene.root.find('directionalLight0');

// To access class properties
// const directionalLightIntensity = directionalLight.intensity;

// To log messages to the console
// Diagnostics.log('Console message logged from the script.');

//==============================================================================
// The following example demonstrates how to hide an object when capturing a
// photo or recording a video.
//
// Project setup:
// - Insert a plane
//==============================================================================

// Load in the required modules
const CameraInfo = require('CameraInfo');
const CamScene = require('Scene');

// Locate the plane in the Scene
const plane = CamScene.root.find('UI');

//==============================================================================
// Hide the plane when capturing a photo or recording a video
//==============================================================================

// Store references to the photo capture and video recording boolean signals
const isCapturingPhoto = CameraInfo.isCapturingPhoto;
const isRecordingVideo = CameraInfo.isRecordingVideo;

// Create a boolean signal that returns true if either boolean signal are true
const hidePlane = isCapturingPhoto.or(isRecordingVideo);

// Bind the hidePlane signal to the hidden property of the plane
plane.hidden = hidePlane;