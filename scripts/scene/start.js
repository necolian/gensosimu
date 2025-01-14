class start extends Phaser.Scene {
    constructor () {
        super("start");
    }

    preload () {
        this.load.image("background","./assets/background.png");
        this.load.image("title","./assets/title.png");

    }

    create () {
        background = this.add.image(400, 300, "background");
        title = this.add.image(400,300,"title");
        title_version = this.add.text(480, 130, `${version} `, { fontFamily: '"游ゴシック","メイリオ","ヒラギノ角ゴ Pro W3","Hiragino Kaku Gothic Pro",sans-serif', fontSize: 16, color: '#000000' });
    }

    update () {

    }
}