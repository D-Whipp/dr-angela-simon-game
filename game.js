let buttonColors = ['red', 'blue', 'green', 'yellow'];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;
let started = false;

function playSound(name) {
    let audio = new Audio('./sounds/' + name + '.mp3');
    audio.play();
}

function animatePress(currentColor) {
    $('#' + currentColor).addClass('pressed');
    setTimeout(function () {
        $('#' + currentColor).removeClass('pressed');
    }, 100);
}

function checkAnswer(currentLevel) {
    console.log('Current Level: ', currentLevel.length);
    console.log('Game Pattern: ', gamePattern.length);
    if (
        currentLevel[currentLevel.length - 1] ===
        gamePattern[gamePattern.length - 1]
    ) {
        console.log('Success!');
    } else {
        console.log('Wrong!');
    }
}

$('.btn').click(function () {
    nextSequence();
    let userChosenColor = $(this).attr('id');
    playSound(userChosenColor);
    animatePress(userChosenColor);
    userClickedPattern.push(userChosenColor);
    checkAnswer(userClickedPattern);
});

function nextSequence() {
    console.log('Next Sequence Fired');
    level++;
    $('#level-title').text('Level ' + level);

    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    console.log('next sequence game pattern: ', gamePattern);
    $('#' + randomChosenColor)
        .fadeIn(100)
        .fadeOut(100)
        .fadeIn(100);

    playSound(randomChosenColor);
}

$(document).keypress(function () {
    if (!started) {
        $('#level-title').text('Level ' + level);
        nextSequence();
        started = true;
    }
});
