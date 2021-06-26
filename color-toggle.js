AFRAME.registerComponent('color-toggle',
                        {
  init: function(){
    let el = this.el;
    this.togglecolor = function(){
      el.setAttribute('color', 'blue');
    }
    this.el.addEventListener('click', this.togglecolor);
  },
  remove: function(){
    this.el.removeEventListener('click', this.togglecolor);
  }
})