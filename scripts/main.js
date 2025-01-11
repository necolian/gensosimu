let auto_center;
let canvas_height;
let canvas_width;
let window_height = window.innerHeight;
let window_width = window.innerWidth;

//キャンバスサイズを調整
setCanvasConfig();

// 設定用変数 jsonで設定
var config = {
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

window.addEventListener("resize",() => {
  if (window_width === window.innerWidth) return

  window_width = window.innerWidth;
  window_height = window.innerHeight;

  setCanvasConfig();
});

/* ------------------------------- */

// 描画
function create() {

  //背景を設定
  const background = this.add.image(canvas_width/2, canvas_height/2, "background");
  resize(background); //画像をキャンバスに合わせてリサイズ

}

// 更新
function update() {
  
}

/* ------------------------------- */

function resize(image) {
  image.setScale(width/800,height/600);
}

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

  function set() {
    canvas_height = window.innerHeight;
    canvas_width = canvas_height / 3 * 4;
  }
  
}