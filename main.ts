TimeEvents.onChunkElapsed(function () {
    music.play(soundlist[sound_index], music.PlaybackMode.InBackground)
    basic.showNumber(sound_index)
    sound_index += 1
    if (sound_index >= soundlist.length) {
        sound_index = 0
    }
})
function createSoundList () {
    soundlist = []
    soundlist.push(music.createSoundExpression(
    WaveShape.Sine,
    5000,
    0,
    255,
    0,
    500,
    SoundExpressionEffect.None,
    InterpolationCurve.Linear
    ))
    soundlist.push(music.createSoundExpression(
    WaveShape.Square,
    5000,
    0,
    255,
    0,
    500,
    SoundExpressionEffect.None,
    InterpolationCurve.Linear
    ))
    soundlist.push(music.createSoundExpression(
    WaveShape.Sawtooth,
    5000,
    0,
    255,
    0,
    500,
    SoundExpressionEffect.None,
    InterpolationCurve.Linear
    ))
    soundlist.push(music.createSoundExpression(
    WaveShape.Triangle,
    5000,
    0,
    255,
    0,
    500,
    SoundExpressionEffect.None,
    InterpolationCurve.Linear
    ))
    soundlist.push(music.createSoundExpression(
    WaveShape.Noise,
    5000,
    0,
    255,
    0,
    500,
    SoundExpressionEffect.None,
    InterpolationCurve.Linear
    ))
}
let soundlist: SoundExpression[] = []
let sound_index = 0
sound_index = 0
createSoundList()
TimeEvents.setUpClock(36000, 1)
TimeEvents.startClock()
music.play(soundlist[sound_index], music.PlaybackMode.InBackground)
basic.forever(function () {
	
})
