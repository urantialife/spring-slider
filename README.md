# Spring Slider

Sliders are cool, but if you're using them to illustrate a relationship between
variables, a sudden jump in value when interacting can make it hard to understand.
Spring slider aims to help with this by providing customisable canvas based sliders
that smoothly transition from one value to another using either eases or spring-like motion.

Check out the [examples!](https://spaciecat.github.io/spring-slider/examples)

# TODO

- [ ] Support mobile and touch

# Documentation

## Main function

SpringSlider consists of only one function, the `SpringSlider` function, it returns the canvas element associated with a new slider instance:

```javascript
const sliderCanvas = SpringSlider({
  // Options go here...
})

// The slider can be added to the page using regular DOM APIs
document.querySelector('#slider-1').appendChild(sliderCanvas)
```

The `SpringSlider` function takes a single options object as its only parameter, the rest of the documentation will explain each option.

## Options

### Output

Default value: `null`

If not null, the value of the output option is assumed to be a function and will be called every frame with the slider's current value.

```javascript
// Log the current slider value to the console every frame
SpringSlider({
    output: value => console.log(value)
})
```

### Min & max

Default values: `min = 0` and `max = 1`

The min and max options set the minimum and maxumim output values for the slider.

```javascript
// Logs values between 1 and 100
SpringSlider({
    min: 1,
    max: 100,
    output: value => console.log(value)
})
```

Default value: `0`

The value option sets the default value for the slider, between `min` and `max`.

```javascript
// Start the slider out in the middle, between default values of min (0) and max (1)
SpringSlider({
    value: 0.5
})
```

### Acceleration

Default value: `0.05`

The acceleration option determines what fraction of the gap between the target and current slider values will
be added to the current velocity of the slider head. Essentially, how fast does the value approach the target value
between `0` being never approaching and `1` being immediately snapping to the target value.

```javascript
// This slider quickly approaches the target value
SpringSlider({
    acceleration: 0.1
})
```

### Elastic

Default value: `0.8`

The elastic option is the fraction of the slider head's velocity remains after each frame, or how elastic the slider is, between `0` (no elasticity, just eases toward the target) and `1` (100% elastic, will orbit the target value and never come to rest).

```javascript
// This slider has no elasticity and will just ease toward the target
SpringSlider({
    elastic: 0
})
```

### Walls

Default value: `true`

If true, the slider's head will not be able to pass the lower and upper bounds of the slider track and will be stopped if it collides with these bounderies. If false, the slider head is free to continue moving past the bounderies if it has the velocity to do so, allowing values less than `min` and greater than `max`.

```javascript
// This slider is super springy and has no walls
SpringSlider({
    acceleration: 0.05,
    elastic: 0.9,
    walls: false
})
```

### Width & height

Default values: `width = 800` and `height = 100`

The width and height options define the size of the slider's canvas.

```javascript
// Create a short slider
SpringSlider({
    width: 400,
    height: 100
})
```

### Color

Default value: `"#333"`

The color option determines the colour that slider components are rendered.
It also sets the `--slider-color` css variable to this color to allow for additional
styling in css, as the inbuilt styling is extremely minimalistic.

```javascript
// Create a red slider
SpringSlider({
    color: 'red'
})
```

### Padding

Default value: `15`

The padding value is the number of pixels between the edge of the slider track and the slider head.

```javascript
// Create a slider with no padding
SpringSlider({
    padding: 0
})
```
