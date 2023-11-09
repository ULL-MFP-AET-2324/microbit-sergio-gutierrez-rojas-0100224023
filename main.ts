input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(1, 6))
    music.play(music.builtinPlayableSoundEffect(soundExpression.spring), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("- E D C5 C5 F D C5 ", 418), music.PlaybackMode.UntilDone)
})
