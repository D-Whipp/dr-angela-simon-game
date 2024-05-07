let buttonColors = ['red', 'blue', 'green', 'yellow'];
let gamePattern = [];
let userClickedPattern = [];

// 1. In the same way we played sound in nextSequence() , when a user clicks on a button, the corresponding sound should be played. e.g if the Green button is clicked, then green.mp3 should be played.

// 2. Create a new function called playSound() that takes a single input parameter called name.
function playSound(name) {
    // 3. Take the code we used to play sound in the nextSequence() function and move it to playSound().
    // 4. Refactor the code in playSound() so that it will work for both playing sound in nextSequence() and when the user clicks a button.
    let audio = new Audio('./sounds/' + name + '.mp3');
    audio.play();
}

$('.btn').click(function () {
    let userChosenColor = $(this).attr('id');
    playSound(userChosenColor);
    userClickedPattern.push(userChosenColor);
});

function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $('#' + randomChosenColor)
        .fadeIn(100)
        .fadeOut(100)
        .fadeIn(100);

    playSound(randomChosenColor);
}

nextSequence();
