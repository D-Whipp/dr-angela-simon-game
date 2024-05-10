let buttonColors = ['red', 'blue', 'green', 'yellow'];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;
let started = false;

$(document).keypress(function () {
    if (!started) {
        $('#level-title').text('Level ' + level);
        nextSequence();
        started = true;
    }
});

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
    console.log('Current Level: ', currentLevel);
    if (
        userClickedPattern[currentLevel] === gamePattern[currentLevel]
    ) {
        console.log('Success!');

        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    } else {
        console.log('Wrong!');
    }
}

$('.btn').click(function () {
    let userChosenColor = $(this).attr('id');
    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
});

function nextSequence() {
    userClickedPattern = [];
    level++;
    $('#level-title').text('Level ' + level);

    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $('#' + randomChosenColor)
        .fadeIn(100)
        .fadeOut(100)
        .fadeIn(100);

    playSound(randomChosenColor);
}
