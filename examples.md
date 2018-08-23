<script src='springslider.js'></script>
<link rel="stylesheet" href="springslider.css">
<style>
    .slider-canvas {
        width: 600px;
    }
</style>

# Examples

Default parameters:

<div id='slider-1'></div>
<script>
document.querySelector('#slider-1').appendChild(SpringSlider())
</script>

Zero percent elastic, acceleration only (ease):

<div id='slider-2'></div>
<script>
document.querySelector('#slider-2').appendChild(SpringSlider({
    elastic: 0,
    acceleration: 0.1
}))
</script>

Full acceleration and no elasticity, snaps to target value:

<div id='slider-3'></div>
<script>
document.querySelector('#slider-3').appendChild(SpringSlider({
    elastic: 0,
    acceleration: 1
}))
</script>


Really springy slider with no walls and no padding:

<div id='slider-4'></div>
<script>
document.querySelector('#slider-4').appendChild(SpringSlider({
  acceleration: 0.05,
  elastic: 0.9,
  walls: false,
  padding: 0
}))
</script>

Slider with walls and 100% elasticity:

<div id='slider-5'></div>
<script>
document.querySelector('#slider-5').appendChild(SpringSlider({
  elastic: 1,
  walls: true
}))
</script>
