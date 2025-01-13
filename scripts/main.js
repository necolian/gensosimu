let auto_center;
let zoom;

if (window.innerWidth < window.innerHeight) {
  zoom = window.innerHeight / 600
  auto_center = Phaser.Scale.Center.CENTER_VERTICALLY;
}else if (window.innerWidth === window.innerHeight) {
  zoom = window.innerHeight / 600;
  auto_center = Phaser.Scale.Center.CENTER_BOTH;
}else{
  zoom = window.innerHeight / 600;
  auto_center = Phaser.Scale.Center.CENTER_HORIZONTALLY;
}

// 設定用変数 jsonで設定
let config = {
  type: Phaser.AUTO,
  width: 800, // 横サイズ
  height: 600, // 縦サイズ
  autoCenter: auto_center, // 中央に配置
  zoom: zoom,
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
  const background = this.add.image(400, 300, "background");
  const title = this.add.image(400,300,"title");
  
}

// 更新
function update() {
  
}

/* ------------------------------- */