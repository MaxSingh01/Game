import platform from '../img/platform (2).png';
import smallplateform from '../img/smallplateform.png'
import background from '../img/background.jpg'

import spriteRunLeft from '../img/spriteRunLeft.png';
import spriteRunRight from '../img/spriteRunRight.png'
import spriteStandLeft from '../img/spriteStandLeft.png';
import spriteStandRight from '../img/spriteStandRight.png'

console.log(platform, 'img')
let canvas = document.querySelector('canvas')
let c = canvas.getContext('2d')
console.log(c)

canvas.width = 1024
canvas.height = 576
let gravity = 1.5

class Player {
    constructor() {
        this.speed = 10
        this.position = {
            x: 100,
            y: 100

        }
        this.velocity = {
            x: 0,
            y: 1
        }
        this.width = 66,
            this.height = 150,
            this.image = createImage(spriteStandRight)
        this.frames = 0
        this.sprite = {
            stand: {
                right: createImage(spriteStandRight),
                left: createImage(spriteStandLeft),
                cropwidth: 177,
                width: 66
            },
            run: {
                right: createImage(spriteRunRight),
                left: createImage(spriteRunLeft),
                cropwidth: 341,
                width: 120.875
            }
        }
        this.current = this.sprite.stand.right
        this.currentwidth = 177
    }
    draw() {
        c.drawImage(
            this.current,
            this.currentwidth * this.frames,
            0,
            this.currentwidth,
            400,
            this.position.x,
            this.position.y,
            this.width,
            this.height)
    }
    update() {
        this.frames++
        if (this.frames > 59 && (this.current === this.sprite.stand.right || this.current === this.sprite.stand.left)) this.frames = 0
        else if (this.frames > 29 && (this.current === this.sprite.run.right || this.current === this.sprite.run.left))
            this.frames = 0
        this.draw()
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x
        if (this.position.y + this.height + this.velocity.y <= canvas.height) {
            this.velocity.y += gravity
        }

    }
}

class Plateform {
    constructor({ x, y, image }) {
        this.position = {
            x,
            y
        }
        this.image = image
        this.width = image.width
        this.height = image.height


    }
    draw() {
        c.drawImage(this.image, this.position.x, this.position.y)
    }

}
class GenericObject {
    constructor({ x, y, image }) {
        this.position = {
            x,
            y
        }
        this.image = image
        this.width = image.width
        this.height = image.height


    }
    draw() {
        c.drawImage(this.image, this.position.x, this.position.y)
    }

}

function createImage(imageSrc) {
    let image = new Image()
    image.src = imageSrc
    return image
}


let platformImage = createImage(platform)


let player = new Player()

let plateforms = [
]

let genericObjects = [

]
let lastkey
let key = {
    right: {
        pressed: false,
    },
    left: {
        pressed: false,
    },
    down: {
        pressed: false
    }
}

let scrollOff = 0

function init() {


    platformImage = createImage(platform)

    player = new Player()
    plateforms = [
        new Plateform({
            x: -1,
            y: 510,
            image: platformImage
        }),
        new Plateform({ x: platformImage.width + 200, y: 510, image: platformImage }),
        new Plateform({ x: platformImage.width * 2 + 550, y: 510, image: platformImage }),
        new Plateform({ x: platformImage.width * 2 + 90, y: 350, image: createImage(smallplateform) })

    ]

    genericObjects = [
        new GenericObject({
            x: -1,
            y: -1,
            image: createImage(background)
        })
    ]

    scrollOff = 0
}
function animation() {
    requestAnimationFrame(animation)
    c.fillStyle = "white"
    c.fillRect(0, 0, canvas.width, canvas.height)
    genericObjects.forEach(genericObject => {
        genericObject.draw()
    })
    plateforms.forEach(plateform => {
        plateform.draw()
    })
    player.update()

    if (key.right.pressed && player.position.x < 400) {
        player.velocity.x = player.speed
    }
    else if ((key.left.pressed && player.position.x > 100) || key.left.pressed && scrollOff == 0 && player.position.x > 0) {
        player.velocity.x = -player.speed
    } else {
        player.velocity.x = 0
        if (key.right.pressed) {
            scrollOff += player.speed
            plateforms.forEach(plateform => {
                plateform.position.x -= player.speed

            })
            genericObjects.forEach(genericObject => {
                genericObject.position.x -= player.speed * 0.66
            })
        } else if (key.left.pressed && scrollOff > 0) {
            scrollOff -= player.speed
            plateforms.forEach(plateform => {
                plateform.position.x += player.speed
            })
            genericObjects.forEach(genericObject => {
                genericObject.position.x += player.speed * 0.66
            })
        }
    }
    console.log(scrollOff)
    plateforms.forEach(plateform => {

        if (player.position.y + player.height <= plateform.position.y && player.position.y + player.height + player.velocity.y >= plateform.position.y && player.position.x + player.width >= plateform.position.x && player.position.x < plateform.position.x + plateform.width) {
            player.velocity.y = 0
        }
    })

    if (key.right.pressed && lastkey === 'right' &&
        player.current != player.sprite.run.right) {
        player.frames = 1
        player.current = player.sprite.run.right
        player.currentwidth = player.sprite.run.cropwidth
        player.width = player.sprite.run.width
    }
    else if (key.left.pressed && lastkey === 'left' &&
        player.current != player.sprite.run.left) {
        player.current = player.sprite.run.left
        player.currentwidth = player.sprite.run.cropwidth
        player.width = player.sprite.run.width
    }
    else if (key.left.pressed && lastkey === 'left' &&
        player.current != player.sprite.run.left) {

        player.current = player.sprite.stand.left
        player.currentwidth = player.sprite.stand.cropwidth
        player.width = player.sprite.stand.width
    }
    else if (key.right.pressed && lastkey === 'right' &&
        player.current != player.sprite.run.right) {

        player.current = player.sprite.stand.right
        player.currentwidth = player.sprite.stand.cropwidth
        player.width = player.sprite.stand.width
    }
    if (scrollOff > 2490) {
        console.log("YOu Won")
    }
    if (player.position.y > canvas.height) {
        console.log('You Lost')
        init()
    }
}
init()
animation()

window.addEventListener('keydown', ({ keyCode }) => {
    console.log(keyCode)
    switch (keyCode) {
        case 65:
            console.log('left');
            key.left.pressed = true;
        lastkey='left'
            break;
        case 83:
            console.log("down")
            key.down.pressed = true
            break;
        case 68:
            console.log('right')
            key.right.pressed = true
            lastkey = 'right'

            break;
        case 87:
            console.log('up');
            player.velocity.y -= 25
            break;
    }
})
window.addEventListener('keyup', ({ keyCode }) => {
    console.log(keyCode)
    switch (keyCode) {
        case 65:
            console.log('left');
            key.left.pressed = false
            player.current = player.sprite.stand.left
            player.currentwidth = player.sprite.stand.cropwidth
            player.width = player.sprite.stand.width
            break;
        case 83:
            console.log("down")
            key.down.pressed = false
            break;
        case 68:
            console.log('right')
            key.right.pressed = false;
            player.current = player.sprite.stand.right
            player.currentwidth = player.sprite.stand.cropwidth
            player.width = player.sprite.stand.width
            break;
        case 87:
            console.log('up');
            player.velocity.y = 0
            break;
    }
})