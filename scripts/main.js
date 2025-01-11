//設定用変数 jsonで設定
var config = {
  type: Phaser.AUTO,
  width: 800, //横サイズ
  height: 600, //縦サイズ
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

//インスタンス作成
var game = new Phaser.Game(config);

//画像プリロード
function preload() {
  
}

//描画
function create() {

}

//更新
function update() {

}