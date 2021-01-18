var canvas = document.querySelector('canvas')
let innerWidth = window.innerWidth
let innerHeight = window.innerHeight

canvas.width = innerWidth
canvas.height = innerHeight

var c = canvas.getContext('2d')

/* c.fillStyle = 'rgba(255, 0, 0, .5)'
c.fillRect(500, 100, 100, 100)
c.fillStyle = 'rgba(0, 255, 0, .5)'
c.fillRect(700, 300, 100, 100)
c.fillStyle = 'rgba(0, 0, 255, .5)'
c.fillRect(500, 500, 100, 150)

c.strokeRect(700, 200, 50, 50)
c.clearRect(500, 300, 50, 50)
 */



// Canvas Lines
/* 
c.beginPath()
c.moveTo(100, 300)
c.lineTo(400, 270)
c.lineTo(250, 400)
c.lineTo(100, 300)
c.fillStyle = 'orange'
c.fill()
c.strokeStyle = 'red'
c.stroke()

 */

// Canvas Arcs
let colour;
function randomColour() {
    let hex = '0123456789ABCDEF'
    let hexCode = '#'

    for (let i = 0; i < 6; i++) {
        hexCode = hexCode + hex[Math.floor(Math.random() * hex.length)]
    }

    return hexCode
}

/*
for (let i = 0; i < 105; i++) {
    let x = Math.random() * innerWidth
    let y = Math.random() * innerHeight

    c.beginPath()
    c.arc(x, y, 50, 0, Math.PI * 2, false)
    c.strokeStyle = randomColour()
    c.stroke()

} */



// let x = Math.random() * window.innerWidth
// let y = Math.random() * window.innerHeight
// let dx = (Math.random() - 0.5) * 20
// let dy = (Math.random() - 0.5) * 20
// let radius = 30



function Circle(x, y, dx, dy, radius, time) {
    this.x = x
    this.y = y
    this.dx = dx
    this.dy = dy
    this.radius = radius
    this.bgColour = randomColour()
    

    this.draw = function() {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.fillStyle = this.bgColour
        c.fill()
        c.strokeStyle = 'transparent'
        c.stroke()
        
    }

    this.update = function() {
        if (this.x > innerWidth - this.radius || this.x < 0 + this.radius) {
            this.dx = -this.dx
        }

        if (this.y > innerHeight - this.radius || this.y < 0 + this.radius) {
            this.dy = -this.dy
        }
    
        this.x += this.dx
        this.y += this.dy

    }
    
}




let circleArray = []

for (let i = 0; i < 100; i++) {
    let radius = 12
    let x = Math.random() * (innerWidth - radius * 2) + radius
    let y = Math.random() * (innerHeight - radius * 2) + radius
    let dx = (Math.random() - 0.5) * 10
    let dy = (Math.random() - 0.5) * 10


    let circle = new Circle (x, y, dx, dy, radius)
    circleArray.push(circle)
}


function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, window.innerWidth, window.innerHeight)

    for (i = 0; i < circleArray.length; i++) {
        circleArray[i].draw()
        circleArray[i].update()
    }

}
animate()






