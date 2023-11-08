let homeCount = 0
let guestCount = 0

let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

function homeAdd1(){
    homeCount += 1
    homeScoreEl.textContent = homeCount
    highlightLeader()

}

function homeAdd2(){
    homeCount += 2
    homeScoreEl.textContent = homeCount
    highlightLeader()

}

function homeAdd3(){
    homeCount += 3
    homeScoreEl.textContent = homeCount
    highlightLeader()
}

function guestAdd1(){
    guestCount += 1
    guestScoreEl.textContent = guestCount
    highlightLeader()

}

function guestAdd2(){
    guestCount += 2
    guestScoreEl.textContent = guestCount
    highlightLeader()

}

function guestAdd3(){
    guestCount += 3
    guestScoreEl.textContent = guestCount
    highlightLeader()

}

function newGame(){
    homeCount = 0
    guestCount = 0
    homeScoreEl.textContent = homeCount
    guestScoreEl.textContent = guestCount
    homeScoreEl.style.color = ""
    guestScoreEl.style.color = ""
}

function highlightLeader() {
    if (homeCount > guestCount) {
        homeScoreEl.style.color = "green"
        guestScoreEl.style.color = ""
    }
    else if (homeCount < guestCount) {
        guestScoreEl.style.color = "green"
        homeScoreEl.style.color = ""
    }
    else {
        homeScoreEl.style.color = ""
        guestScoreEl.style.color = ""
    }
}
