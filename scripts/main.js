//画面サイズを4:3に設定
let height = window.innerHeight - 5;
let width = height / 3 * 4;

//設定用変数 jsonで設定
var config = {
  type: Phaser.AUTO,
  width: width, //横サイズ
  height: height, //縦サイズ
  autoCenter: "Phaser.Scale.Center.CENTER_BOTH", //中央に配置
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