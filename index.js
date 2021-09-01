let input = document.querySelector('input')
let div = document.querySelector('.wrap-words')


document.addEventListener('keyup', key)

let index = 0
let arr = []
function key() {
    if (event.key == "," && input.value.length > 1) {
        div.innerHTML += `<div class="word el-${++index}"> <span class="del" id=el-${index}>&#x2716;</span>
        ${input.value.slice(0, input.value.length - 1)}
        </div>
        `
        arr = [...arr, index]
        input.value = ''
    }
}

document.addEventListener('click', deleteTag)

function deleteTag(event) {
    let parsed = event.target.id;
    if (parsed) {
        let aim = document.querySelector(`.${parsed}`)
        aim.remove()
    }
}

document.addEventListener('mouseover', hover);

function hover() {
    let parsed = event.target.id;
    if (parsed) {
        let aim = document.querySelector(`.${parsed}`)
        aim.classList.add('red')
    }
}

document.addEventListener('mouseout', hoverTwo);

function hoverTwo() {
    let parsed = event.target.id;
    if (parsed) {
        let aim = document.querySelector(`.${parsed}`)
        aim.classList.remove('red')
    }
}
////////
function addEvent() {
    let parsed = event.target.id;
    if (parsed) {
        let aim = document.querySelector(`.${parsed}`)
        aim.classList.add('red')
    }
}
