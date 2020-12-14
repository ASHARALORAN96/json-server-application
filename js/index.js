'use strict';

const posts = document.querySelector('.posts');
const postContainer = posts.getElementsByClassName('post')
// console.log(postContainer)
const search = document.forms.searchBar;
// console.log(search);

search.addEventListener('keyup', (e) => {
    // console.log(e.target.value);
    // console.log(post)
    Array.from(postContainer).forEach(post => {
        // console.log(post)
        let titles = post.getElementsByTagName('h2');
        // console.log(title)
        Array.from(titles).forEach(title => {
            console.log(title.textContent);
            if (title.textContent.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1) {
                post.style.display = "block";
            } else {
                post.style.display = "none";
            }
        })
    })
})

let getPosts = async () => {
    let res = await fetch("http://localhost:3000/posts?_sort=likes&_order=desc"); // to sort the data depend on likes in Descending Order
    let postsData = await res.json(); // convert the data to json object
    //    console.log(post)
    let template = '';
    postsData.forEach(post => {
        // console.log(post.body);
        template += `
        <div name=${post.id} class="post">
        <h2 class="title">${post.title}</h2>
        <p><small>${post.likes} likes</small></p>
        <div>${post.body.slice(0, 100)}</div>
        <a href=/details.html?id=${post.id}>read more ....</a>
        </div>
        `
    })

    posts.innerHTML = template

}

window.addEventListener('DOMContentLoaded', () => getPosts());