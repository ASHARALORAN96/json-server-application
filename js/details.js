const id = new URLSearchParams(window.location.search).get('id');

const detailsContainer = document.querySelector('.detail');
const deleteBtn = document.querySelector('.delete');

// console.log(id)

const showDetails = async (e) => {
    const res = await fetch(`http://localhost:3000/posts/` + id);
    if (!res.ok) {
        window.location.replace("/");
    }
    
    const post = await res.json();
    const postContent = `
  <h2>${post.title}</h2>
  <p>${post.body}</p>
  
  `
    detailsContainer.innerHTML = postContent;
};

deleteBtn.addEventListener('click' ,async ()=> {
    console.log('delete')
    await fetch(`http://localhost:3000/posts/` + id , {
        method : "DELETE"
    })
    window.location.replace('/')
})


window.addEventListener('DOMContentLoaded', showDetails);