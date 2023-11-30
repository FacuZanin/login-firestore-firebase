const postList = document.querySelector('.post')

export const setupPost = (data) => {
    if (data.length){
        let html = ''

        data.forEach(doc => {
            const post = doc.data()
            const li = `
            <li class = "list-group-item list-group-item-action list-group-item-dark">
            <h5> ${post.title} </h5>
            <p> ${post.content} </p>
            </li>
            `
            html += li
        });

        postList.innerHTML = html
    
    } else {
        postList.innerHTML = `<h1> No hay ningun post </h1> `
    }
}

