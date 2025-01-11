//画面サイズを4:3に設定
let height = window.innerHeight;
let width = height / 3 * 4;

// 設定用変数 jsonで設定
var config = {
  type: Phaser.AUTO,
  width: width, // 横サイズ
  height: height, // 縦サイズ
  autoCenter: Phaser.Scale.Center.CENTER_HORIZONTALLY, // 中央に配置
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

// インスタンス作成
var game = new Phaser.Game(config);

// 描画
function create() {

  //背景を設定
  const background = this.add.image(width/2, height/2, "background");
  resize(background); //画像をキャンバスに合わせてリサイズ

}

// 更新
function update() {
  
}

function resize(image) {
  image.setScale(width/800,height/600);
}

//画面サイズが変わったときに調整
window.addEventListener("resize",() => {
  height = window.innerHeight;
  scene.scale.resize(height/3*4, height);
});