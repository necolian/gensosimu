function preload() {
  alert("preload");
  this.load.image("background","./assets/background.png");
}

function pre_alert(){
  alert("pre-alert");
}

export {preload,pre_alert}