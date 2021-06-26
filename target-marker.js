AFRAME.registerComponent("target-marker", {
  init: function() {
    let el = this.el;
    
    this.addMarker = function(e) {
       let scene = document.querySelector("a-scene");
      let ground = document.querySelector("#ground");
      let mark = document.querySelector("#mark");
      let modelName = document.querySelector('#model').getAttribute("class");
      
      let p = e.detail.intersection.point;
      //let p = mark.object3D.getWorldPosition(mark.object3D.position);
      //console.log(p);
     
      let modelObj = "obj:#"+modelName + "-obj; mtl:#" +modelName +"-mtl;"
      //console.log(modelObj);
      let newMark = document.createElement("a-entity");
      newMark.setAttribute(
        "obj-model",
        modelObj
      );
      let randRotation= Math.floor(Math.random()*360);
      newMark.setAttribute("rotation", "0 "+randRotation+" 0");
      newMark.setAttribute("scale", "0.0001 0.0001 0.0001");
      newMark.setAttribute("shadow", "cast: true");
      newMark.setAttribute("position", p);
      newMark.setAttribute("class", "placed");
      scene.appendChild(newMark);
      newMark.addEventListener('model-loaded', () => {

        // Once the model is loaded, we are ready to show it popping in using an animation

        newMark.setAttribute('visible', 'true');

        newMark.setAttribute('animation', {

          property: 'scale',

          to: '0.3 0.3 0.3',

          easing: 'easeOutElastic',

          dur: 800,

        })

      })

      mark.setAttribute("scale", "1 1 1");

      
    };
    this.el.addEventListener("click", this.addMarker);
  },
  remove: function() {
    this.el.removeEventListener("click", this.addMarker);
  }
});

