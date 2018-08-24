
function SpringSlider({walls = true, min = 0, max = 1, output = null, value = 0.5, width = 800, height = 100, padding = 10, color = '#333', acceleration = 0.05, elastic = 0.8} = {}){

    // Take a number range and output another
    function map(x, inMin, inMax, outMin, outMax) {
      return (x - inMin) * (outMax - outMin) / (inMax - inMin) + outMin
    }

    // Set up elements and size them

    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    canvas.width = width
    canvas.height = height
    canvas.className = 'slider-canvas'
    canvas.style.setProperty('--slider-color', color)

    const radius = canvas.height / 2 - padding

    // Drawing
    let targetValue = value

    function draw(){
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        ctx.fillStyle = color
        ctx.strokeStyle = ctx.fillStyle
        ctx.lineCap = 'round'

        ctx.lineWidth = 5

        ctx.beginPath()
        ctx.arc(map(value, 0, 1, radius + padding, canvas.width - radius - padding), canvas.height / 2, radius, 0, 2 * Math.PI)
        ctx.fill()

        ctx.beginPath()
        ctx.moveTo(map(targetValue, 0, 1, radius + padding, canvas.width - radius - padding), 0)
        ctx.lineTo(map(targetValue, 0, 1, radius + padding, canvas.width - radius - padding), canvas.height)
        ctx.stroke()

        ctx.beginPath()
        ctx.moveTo(map(value, 0, 1, radius + padding, canvas.width - radius - padding), canvas.height / 2)
        ctx.lineTo(map(targetValue, 0, 1, radius + padding, canvas.width - radius - padding), canvas.height / 2)
        ctx.stroke()
    }

    // Interaction

    let dragging = false

    function updateFromEvent(event){
        if(!dragging) return
        const rect = canvas.getBoundingClientRect()
        let x = (event.clientX - rect.left ) * (canvas.width / canvas.clientWidth)
        if(x < padding + radius) x = padding + radius
        if(x > canvas.width - padding - radius) x = canvas.width - padding - radius
        targetValue = map(x, padding + radius, canvas.width - padding - radius, 0, 1)
    }

    canvas.addEventListener('mousedown', event => {
        dragging = true
        updateFromEvent(event)
    })
    canvas.addEventListener('mouseup', () => dragging = false)
    canvas.addEventListener('mousemove', updateFromEvent)

    // Smooth values and ad velocity

    let valV = 0

    function loop(){
        valV += (targetValue - value) * acceleration
        value += valV
        valV *= elastic
        if(walls){
            if(value <= 0) {
                value = 0
                valV *= -1
            }
            if(value >= 1) {
                value = 1
                valV *= -1
            }
        }
        draw()
        if(output){
            output(map(value, 0, 1, min, max))
        }
        requestAnimationFrame(loop)
    }

    loop()

    return canvas

}
