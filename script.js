  var models = [
                "rose", 
                "bush",
                "fern",
                "buttercup",
               ""]

  var modelIndex=0;





function toggleReady() {
  document.querySelector(".splash2").classList.toggle("ready");
  //document.querySelector(".splash").classList.toggle("hidden");
  console.log("clicked");
}

function clearInfo(){
  document.querySelector(".splash").classList.toggle("hidden");
}

function download(){
  var download=this.el;
  var canvas = document.querySelector('a-scene').components.screenshot.getCanvas('equirectangular');
  var image = canvas.toDataURL("image/png");
  download.setAttribute("href", image);
}

  
document.addEventListener('DOMContentLoaded', function() {

  

  //var camera = document.querySelector('a-camera');
  //var assets = document.querySelector('a-assets');
  console.log("dom loaded");
  
  var btn = document.querySelector('.btn');
  var scene = document.querySelector('a-scene');
  if (navigator.share) {
    document.querySelector("#share-button").classList.toggle("hidden");
      document.querySelector("#share-button").addEventListener("click", function() {
         
            navigator.share({
              title: "Re: Growth",
              url: "https://qpcd.glitch.me/"
            }).then(() => {
              console.log('Thanks for sharing!');
            })
            .catch(console.error);
          
	});
 }


      scene.addEventListener('renderstart', run);
  
     scene.addEventListener('touchend', function () {
            
      console.log("touchEnd");
        var preview = document.querySelector('#preview');
        var model = document.querySelector('#model');
       preview.removeChild(model);
       var newModel = document.createElement("a-entity");
       modelIndex++;
       var newIndex = modelIndex % models.length;
       if (models[newIndex].length) { // if it's not the empty option
        
        var modelObj = "obj:#"+ models[newIndex] + "-obj;";
        newModel.setAttribute("obj-model", modelObj);
        newModel.setAttribute("class", models[newIndex]);
        
        newModel.setAttribute("scale", "0.02 0.02 0.02");
        newModel.setAttribute("animation", "property: rotation; to: 0 360; dur: 10000; easing: linear; loop: true");
        newModel.setAttribute("material", "shader: flat; color: #71B2C9; transparent:true; opacity: 0.5; wireframe: true; wireframeLinewidth:1 ")

       }
       else {
         newModel.setAttribute("class", "hidden");
       }
       newModel.setAttribute("id", "model");
       preview.appendChild(newModel);
      });
      
  function run(){
    
    btn.disabled=false;
  }


  
  });



function resizeCanvas(origCanvas, width, height) {
	let resizedCanvas = document.createElement("canvas");
	let resizedContext = resizedCanvas.getContext("2d");

	resizedCanvas.height = width;
	resizedCanvas.width = height;

	resizedContext.drawImage(origCanvas, 0, 0, width, height);
	return resizedCanvas.toDataURL();
}


