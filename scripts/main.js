import { preload } from "./assets-preload.js"

//設定用変数 jsonで設定
var config = {
  type: Phaser.AUTO,
  width: 800, //横サイズ
  height: 600, //縦サイズ
  autoCenter: "Phaser.Scale.Center.CENTER_BOTH", //中央に配置
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

//インスタンス作成
var game = new Phaser.Game(config);

//描画
function create() {
  
  //背景を設定
  this.add.image(400,300,"background");
  
}

//更新
function update() {

}