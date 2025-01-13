var config = new Object;
let auto_center;
let canvas_height;
let canvas_width;
let window_height = window.innerHeight;
let window_width = window.innerWidth;

//キャンバスサイズを調整
setCanvasConfig();

// 設定用変数 jsonで設定
config = {
  type: Phaser.AUTO,
  width: canvas_width, // 横サイズ
  height: canvas_height, // 縦サイズ
  autoCenter: Phaser.Scale.Center.CENTER_HORIZONTALLY, // 中央に配置
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

// インスタンス作成
var game = new Phaser.Game(config);

/* ------------------------------- */

// 描画
function create() {
  
  //背景を設定
  const background = this.add.image(canvas_width/2, canvas_height/2, "background");
  background.setScale(canvas_width/800,canvas_height/600);
  const title = this.add.image(canvas_width/2,canvas_height/2,"title");
  title.setScale(canvas_width/800,canvas_height/600);
  
}

// 更新
function update() {
  
}

/* ------------------------------- */

function setCanvasConfig () {
  if (window.innerWidth < window.innerHeight) {
    canvas_width = window.innerWidth;
    canvas_height = canvas_width /4 * 3
    auto_center = Phaser.Scale.Center.CENTER_VERTICALLY;
  }else if (window.innerWidth === window.innerHeight) {
    set();
    auto_center = Phaser.Scale.Center.CENTER_BOTH;
  }else{
    set();
    auto_center = Phaser.Scale.Center.CENTER_HORIZONTALLY;
  }

  config["width"] = canvas_width;
  config["height"] = canvas_height;
  config["autoCenter"] = auto_center;

  alert(JSON.stringify(config));

  function set() {
    canvas_height = window.innerHeight;
    canvas_width = canvas_height / 3 * 4;
  }
  
}
