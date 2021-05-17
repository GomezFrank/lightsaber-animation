let sable = document.getElementById('sable')
let active = false

function sableTransition() {
    active = !active
    sable.style.transform= active ? "scaleY(1)" : "scale(0)"
}

const handle = document.getElementById('handle')
handle.addEventListener('click', sableTransition)
