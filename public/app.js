document.addEventListener('click', event => {

    if (event.target.dataset.type === 'remove') {
        const id = event.target.dataset.id
        remove(id).then(() => {
            event.target.closest('li').remove()
        })
    }
    if (event.target.dataset.type === 'edit') {

        const id = event.target.dataset.id
        const divTitle = event.target.closest("li").children[0];

        let newTitle = prompt('Введите новое значение')
        if(newTitle){
            editTitle(newTitle, id)
            divTitle.innerHTML = newTitle
        }
    }
})

async function remove(id) {
    await fetch(`/${id}`, {method: 'DELETE'})
}

async function editTitle(newTitle, id) {
    await fetch(`/${id}`, {
        method: 'PUT',
        body:JSON.stringify({title: newTitle, id}),
        headers: {"Content-Type": "application/json; charset=utf-8"}
    });
}