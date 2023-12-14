// script.js

function openForm() {
    document.getElementById('postForm').style.display = 'block';
}

function closeForm() {
    document.getElementById('postForm').style.display = 'none';
}

function addPost() {
    const title = document.getElementById('postTitle').value;
    const content = document.getElementById('postContent').value;

    if (!title || !content) {
        alert('Please fill in both title and content');
        return;
    }

    const postsContainer = document.getElementById('posts-container');

    // Create a new post element
    const postElement = document.createElement('div');
    postElement.classList.add('post');

    // Populate the post element with title and content
    postElement.innerHTML = `
        <h2>${title}</h2>
        <p>${content}</p>
    `;

    // Append the new post to the posts container
    postsContainer.appendChild(postElement);

    // Clear the form
    document.getElementById('postTitle').value = '';
    document.getElementById('postContent').value = '';

    // Close the form
    closeForm();
}
