 AFRAME.registerComponent('cursor-listener', {
        init: function () {
          this.el.addEventListener('raycaster-intersected', evt => {
            this.raycaster = evt.detail.el;
          });
          this.el.addEventListener('raycaster-intersected-cleared', evt => {
            this.raycaster = null;
          });
        },
        tick: function () {
            let cursor = document.querySelector('#mark');
            if (!this.raycaster) { 
              cursor.setAttribute("material","opacity:0");
              return; }  // Not intersecting.
            let intersection = this.raycaster.components.raycaster.getIntersection(this.el);
            if (!intersection) { return; } // Not intersecting
            
            cursor.setAttribute("material","opacity:1");
            cursor.setAttribute("position", intersection.point);// intersecting
            //console.log(intersection);
        }
      });