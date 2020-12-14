const form = document.forms.createPost;

// console.log("form", form)

const createPost = async (e) => {
    e.preventDefault();

    let doc = {
        title : form.title.value,
        body : form.body.value,
        likes : 0
    }

    await fetch('http://localhost:3000/posts' , {
        method : "POST",
        body : JSON.stringify(doc),
        headers : {"Content-Type" : "application/json"}
    });
    window.location.replace("/");

}

form.addEventListener("submit" , createPost)

