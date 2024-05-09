AFRAME.registerComponent("play-on-click", {
 //Add code here
  schema: {
    isPlaying: {type:"boolean", default: false}
  },
  init:function(){
    this.videoel= this.el.getAttribute("material").src;
    this.onClick= this.onClick.bind(this);
  },
  play: function(){
    window.addEventListener("click", this.onClick);
  },
  onClick: function(evt){
    if(!this.videoel){
        return;
    }
    var isplaying = this.el.getAttribute("play-on-click").isPlaying;
    this.el.object3D.visible= true;
    if(!isplaying){
        this.el.setAttribute("play-on-click", {
            isPlaying: true
        });
        this.videoel.play();
    }
    else{
        this.el.setAttribute("play-on-click", {
            isPlaying: false
        });
        this.videoel.pause()
    }
  }
});
