let popularTag = [
    'Aesthetics',
    'Art',
    'Apple',
    'Amazing',
    'Beach',
    'Beautiful',
    'Baby',
    'Birthday',
    'Cat',
    'Cool',
    'Cute',
    'Christmas',
    'Dance',
    'December',
    'Dog',
    'Dubai',
    'England',
    'Eyes',
    'Explore',
    'Europe',
    'Earthfocus ',
    'Family',
    'Followme',
    'Food',
    'Friends',
    'Fun',
    'Girl',
    'Gymmotivation',
    'Happy',
    'Hair',
    'Healthy',
    'Healthylifestyle',
    'Hot',
    'Instadaily',
    'Instalike',
    'Instagram',
    'Iphoneonly',
    'Instajob',
    'Jobs',
    'Journey',
    'Joke',
    'Lifestyle ',
    'Lol',
    'Life',
    'Like',
    'Love',
    'Makeup',
    'Me',
    'Model',
    'Music',
    'Mylook',
    'Nature',
    'Night',
    'Nofilter',
    'Ocean',
    'Office',
    'Officemate',
    'Official',
    'Rarty',
    'Rretty',
    'Rhoto',
    'Repost',
    'Style',
    'Selfie',
    'Smile',
    'Summer',
    'Swag',
    'Tagsforlikes',
    'Tflers',
    'Travel',
    'Photooftheday',
    'Paper',
    'Vscocam',
    'Vacation',
    'Work',
    'Workout',
    'Zoo',
]

let input = document.querySelector('input')
let wrap_words = document.querySelector('.wrap-words')
let select = document.querySelector('.select')

function createTag(textOfTag) {
    return (
        wrap_words.innerHTML += `<div class="word">
                            <span class="del">&#x2716;</span>
                            #${textOfTag}
                        </div>`
        )
}


input.addEventListener('keyup', addTagOnKey)
function addTagOnKey(event) {
    if (event.key == "," && input.value.length > 1) {
        let textTagOfInput = input.value.slice(0, input.value.length - 1)
        createTag(textTagOfInput)
        input.value = '';
    }
}



select.addEventListener('click', addTagbyClick)
function addTagbyClick() {
    createTag(select.value)
    resetAfterAddTag()
}



input.addEventListener('input', showPopularTag)
function showPopularTag() {
    let targetTags = [];
    select.innerHTML = ''
    if (input.value.length) {
        targetTags = popularTag.filter(item => item.toUpperCase().slice(0, input.value.length) === input.value.toUpperCase());
    }

    if (targetTags.length) {
        targetTags.map(item => select.innerHTML += `<option value="${item}">${item}</option>`)
    }

    changeVisibilitySelect('1', 'visible')
}



input.addEventListener('keydown', focusSelectList)
function focusSelectList(event) {
    if (event.key == "ArrowDown") {
        select.childNodes[0].setAttribute('selected', 'selected');
        select.focus();
    }
}



select.addEventListener('keydown', getSelectedTag)

function getSelectedTag(event) {
    if (event.key == "Enter") {
        createTag(select.value)
        resetAfterAddTag()
    }
}



document.addEventListener('click', deleteTag)
function deleteTag(event) {
    let parsed = event.target;
    if (parsed.classList.contains('del')) {
        parsed.parentElement.remove()
    }
}


function changeVisibilitySelect(valueOpacity = '0', valueVisibility = 'hidden') {
    select.style.visibility = valueVisibility
    select.style.opacity = valueOpacity
}

function resetAfterAddTag() {
    changeVisibilitySelect()
    input.value = '';
    input.focus()
}

select.addEventListener('blur', () => { changeVisibilitySelect()})

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        changeVisibilitySelect()
        input.focus()
    }
})


