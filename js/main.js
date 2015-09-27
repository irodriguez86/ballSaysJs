/**
 * Created by Socket on 27/09/2015.
 */
var BS = {
        game: new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update, render: render })
    };

function preload() {
    BS.game.load.image('ball', 'assets/ball.png');
}

function create() {

    BS.game.physics.startSystem(Phaser.Physics.ARCADE);
    BS.game.stage.backgroundColor = '#2d2d2d';



    BS.playersGroup = BS.game.add.group();
    BS.playersGroup.enableBody = true;
    BS.playersGroup.physicsBodyType = Phaser.Physics.ARCADE;

    BS.player = new Ball(BS.game.world.centerX - 100, BS.game.world.centerY/2);
    BS.playersGroup.addChild(BS.player.sprite);

    BS.npcsGroup = BS.game.add.group();
    BS.npcsGroup.enableBody = true;
    BS.npcsGroup.physicsBodyType = Phaser.Physics.ARCADE;

    // Create npc's ball
    BS.npc = new Ball(BS.game.world.centerX + 100, BS.game.world.centerY/2);
    BS.npcsGroup.addChild(BS.npc.sprite);


    console.log(BS.npcsGroup)
    console.log(BS.playersGroup)

}

function update() {
    BS.game.physics.arcade.overlap(BS.player.sprite, BS.npc.sprite, collisionHandler, null, this);

    //  only move when you click
    if (BS.game.input.mousePointer.isDown)
    {
        //  400 is the speed it will move towards the mouse
        BS.game.physics.arcade.moveToPointer(BS.player.sprite, 400);

        //  if it's overlapping the mouse, don't move any more
        if (Phaser.Rectangle.contains(BS.player.sprite, BS.game.input.x, BS.game.input.y))
        {
            BS.player.sprite.body.velocity.setTo(0, 0);
        }
    }
    else
    {
        BS.player.sprite.body.velocity.setTo(0, 0);
    }
}

function render() {
}

function collisionHandler(player, npc) {
    console.log('hit!')
}