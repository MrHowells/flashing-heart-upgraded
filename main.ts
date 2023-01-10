function fastest () {
    for (let index = 0; index < 5; index++) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sawtooth, 1, 0, 255, 255, 50, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
        basic.showLeds(`
            . # . # .
            # . # . #
            # . . . #
            . # . # .
            . . # . .
            `)
        basic.showLeds(`
            . # . # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
    }
    basic.clearScreen()
}
input.onButtonPressed(Button.A, function () {
    start()
})
function faster () {
    for (let index = 0; index < 5; index++) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sawtooth, 1, 0, 255, 255, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
        basic.pause(50)
        basic.showLeds(`
            . # . # .
            # . # . #
            # . . . #
            . # . # .
            . . # . .
            `)
        basic.pause(50)
        basic.showLeds(`
            . # . # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
    }
    basic.clearScreen()
}
input.onButtonPressed(Button.AB, function () {
    fastest()
})
input.onButtonPressed(Button.B, function () {
    faster()
})
function slower () {
    for (let index = 0; index < 5; index++) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sawtooth, 1, 0, 255, 255, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
        basic.pause(350)
        basic.showLeds(`
            . # . # .
            # . # . #
            # . . . #
            . # . # .
            . . # . .
            `)
        basic.pause(350)
        basic.showLeds(`
            . # . # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
    }
    basic.clearScreen()
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    slower()
})
function start () {
    for (let index = 0; index < 5; index++) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sawtooth, 1, 0, 255, 255, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
        basic.pause(200)
        basic.showLeds(`
            . # . # .
            # . # . #
            # . . . #
            . # . # .
            . . # . .
            `)
        basic.pause(200)
        basic.showLeds(`
            . # . # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
    }
    basic.clearScreen()
}
start()
