let scoreHome = 0
let scoreGuest = 0

function update() {
    document.getElementById("score-home").textContent = scoreHome
    document.getElementById("score-guest").textContent = scoreGuest
}


function add1Home() {
    scoreHome += 1
    update()

}

function add2Home() {
    scoreHome += 2
    update()
}

function add3Home() {
    scoreHome += 3
    update()
}

function add1Guest() {
    scoreGuest += 1
    update()
}

function add2Guest() {
    scoreGuest += 2
    update()
}

function add3Guest() {
    scoreGuest += 3
    update()
}

function reset() {
    scoreHome = 0
    scoreGuest = 0
    update()
}
