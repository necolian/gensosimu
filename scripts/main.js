let zoom;

setZoom();

// 設定用変数 jsonで設定
let config = {
  type: Phaser.AUTO,
  width: 800, // 横サイズ
  height: 600, // 縦サイズ
  autoCenter: Phaser.Scale.Center.CENTER_BOTH, // 中央に配置
  zoom: zoom,
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

// インスタンス作成
var game = new Phaser.Game(config);

window.addEventListener("resize",() => {
  setZoom();
  scene.scale.setZoom(zoom);
});

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

function setZoom() {
  if (window.innerWidth <= window.innerHeight / 3 * 4) {
    zoom = window.innerWidth / 800
  }else{
    zoom = window.innerHeight / 600;
  }
}