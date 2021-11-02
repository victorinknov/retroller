let pkl = document.getElementById('pkl')

document.addEventListener('click', (e) => {
    let elementId = e.srcElement.id
    switch (elementId) {
        case '1st-btn':
            // here you will define what 1st button must to do
            pkl.innerText = `${elementId} was clicked.`
            break;

        case '2nd-btn':
            pkl.innerText = `${elementId} was clicked.`
            break;

        case '1st-option-btn':
            pkl.innerText = `${elementId} was clicked.`
            break;

        case '2nd-option-btn':
            pkl.innerText = `${elementId} was clicked.`
            break;

        case '2nd-option-btn':
            pkl.innerText = `${elementId} was clicked.`
            break;

        case 'nav-up':
            pkl.innerText = `${elementId} was clicked.`
            break;

        case 'nav-left':
            pkl.innerText = `${elementId} was clicked.`
            break;

        case 'nav-right':
            pkl.innerText = `${elementId} was clicked.`
            break;

        case 'nav-down':
            pkl.innerText = `${elementId} was clicked.`
            break;
        default:
            pkl.innerText = 'press any key'
            break;
    }
})