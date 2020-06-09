const Scene = require("Scene");
const NativeUI = require("NativeUI");
const Textures = require("Textures");

Promise.all([
  Scene.root.find("plane0"),
  Scene.root.find("plane1"),
  Scene.root.find("plane2"),
  Scene.root.find("plane3"),
  Scene.root.find("plane4"),
  Scene.root.find("plane5"),
  Scene.root.find("plane6"),
  Scene.root.find("plane7"),
  Scene.root.find("plane8"),

  Scene.root.findFirst("faceMesh0"),
  Scene.root.findFirst("faceMesh1"),
  Scene.root.findFirst("faceMesh2"),
  Scene.root.findFirst("faceMesh3"),
  Scene.root.findFirst("faceMesh4"),
  Scene.root.findFirst("faceMesh5"),
  Scene.root.findFirst("faceMesh6"),
  Scene.root.findFirst("faceMesh7"),
  Scene.root.findFirst("faceMesh8"),
  Scene.root.findFirst("faceMeshBrlef0"),
  Scene.root.findFirst("faceMeshBrlef1"),
  Scene.root.findFirst("faceMeshBrlef2"),
]).then(function (results) {
  const plane0 = results[0];
  const plane1 = results[1];
  const plane2 = results[2];
  const plane3 = results[3];
  const plane4 = results[4];
  const plane5 = results[5];
  const plane6 = results[6];
  const plane7 = results[7];
  const plane8 = results[8];

  const facemesh0 = results[9];
  const facemesh1 = results[10];
  const facemesh2 = results[11];
  const facemesh3 = results[12];
  const facemesh4 = results[13];
  const facemesh5 = results[14];
  const facemesh6 = results[15];
  const facemesh7 = results[16];
  const facemesh8 = results[17];
  const facemesh9 = results[18];
  const facemesh10 = results[19];
  const facemesh11 = results[20];

  const configuration = {
    selectedIndex: 0,

    items: [
      { image_texture: Textures.get("shape0") },
      { image_texture: Textures.get("shape1") },
      { image_texture: Textures.get("shape2") },
      { image_texture: Textures.get("shape3") },
      { image_texture: Textures.get("shape4") },
      { image_texture: Textures.get("shape5") },
      { image_texture: Textures.get("shape6") },
      { image_texture: Textures.get("shape7") },
      { image_texture: Textures.get("shape8") },
    ],
  };
  const picker = NativeUI.picker;

  picker.configure(configuration);

  picker.visible = true;

  picker.selectedIndex.monitor().subscribe(function (val) {
    plane0.hidden = true;
    plane1.hidden = true;
    plane2.hidden = true;
    plane3.hidden = true;
    plane4.hidden = true;
    plane5.hidden = true;
    plane6.hidden = true;
    plane7.hidden = true;
    plane8.hidden = true;

    facemesh0.hidden = true;
    facemesh1.hidden = true;
    facemesh2.hidden = true;
    facemesh3.hidden = true;
    facemesh4.hidden = true;
    facemesh5.hidden = true;
    facemesh6.hidden = true;
    facemesh7.hidden = true;
    facemesh8.hidden = true;
    facemesh9.hidden = true;
    facemesh10.hidden = true;
    facemesh11.hidden = true;

    switch (val.newValue) {
      case 0: {
        facemesh0.hidden = false;
        facemesh9.hidden = false;
        plane0.hidden = false;
        break;
      }
      case 1: {
        facemesh1.hidden = false;
        facemesh9.hidden = false;
        plane1.hidden = false;
        break;
      }
      case 2: {
        facemesh2.hidden = false;
        facemesh9.hidden = false;
        plane2.hidden = false;
        break;
      }
      case 3: {
        facemesh3.hidden = false;
        facemesh10.hidden = false;
        plane3.hidden = false;
        break;
      }
      case 4: {
        facemesh4.hidden = false;
        facemesh10.hidden = false;
        plane4.hidden = false;
        break;
      }
      case 5: {
        facemesh5.hidden = false;
        facemesh10.hidden = false;
        plane5.hidden = false;
        break;
      }
      case 6: {
        facemesh6.hidden = false;
        facemesh11.hidden = false;
        plane6.hidden = false;
        break;
      }
      case 7: {
        facemesh7.hidden = false;
        facemesh11.hidden = false;
        plane7.hidden = false;
        break;
      }
      case 8: {
        facemesh8.hidden = false;
        facemesh11.hidden = false;
        plane8.hidden = false;
        break;
      }
    }
  });
});
