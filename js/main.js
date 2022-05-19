const elList = document.querySelector(".list");

function renderPosts(arr, element){

  element.innerHTML = "";

  const postsFragment = document.createDocumentFragment();

  arr.forEach(post =>{
    let newItem = document.createElement("li");
    let newTopWrapper = document.createElement("div");
    let newImg = document.createElement("img");
    let newDiv = document.createElement("div");
    let newName = document.createElement("h2");
    let newUsername = document.createElement("h3");
    let newTitle = document.createElement("strong");
    let newText = document.createElement("p");
    let newLink = document.createElement("a");


    newName.textContent = post.user.name;
    newUsername.textContent = `@${post.user.username}`;
    newName.textContent = post.user.name;
    newTitle.textContent = post.title;
    newText.textContent = post.body;
    newLink.textContent = "Comments";


    newImg.setAttribute("src", "https://picsum.photos/50")
    newLink.setAttribute("href", "#")


    newItem.classList.add("list-item");
    newTopWrapper.classList.add("list-top");
    newImg.classList.add("list-img");
    newName.classList.add("list-name");
    newUsername.classList.add("list-username");
    newTitle.classList.add("list-title");
    newText.classList.add("list-text");


    newItem.appendChild(newTopWrapper);

    newTopWrapper.appendChild(newImg);
    newTopWrapper.appendChild(newDiv);

    newDiv.appendChild(newName);
    newDiv.appendChild(newUsername);

    newItem.appendChild(newTitle);
    newItem.appendChild(newText);
    newItem.appendChild(newLink);

    postsFragment.appendChild(newItem);
    element.appendChild(postsFragment);
  })
}


// function renderComments(arr, element){
//   element.innerHTML = "";

//   const commentFragment = document.createDocumentFragment();

//   arr.forEach(comment =>{
//     let newItem = document.createElement("li");
//     let newTitle = document.createElement("strong");
//     let newText = document.createElement("p");

//     newTitle.textContent = comment.comments.name;
//     newText.textContent = comment.comments.body;


//     newItem.appendChild(newTitle);
//     newItem.appendChild(newText);
//     newItem.appendChild(newLink);

//     commentFragment.appendChild(newItem);
//     element.appendChild(commentFragment);
// })
// }


// renderComments(posts, elList);
renderPosts(posts, elList);
