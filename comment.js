// Add comment on a post javaScript
document.getElementById('comment').addEventListener('click', function () {
    const newComment = document.getElementById('new-comment');
    var userComment = newComment.value;

    // Create new Comment
    // let i = 0;  i++;
    // const h = document.createElement('h4');
    // h.innerText = "User" + incrementValue();

    // function incrementValue() {
    //   var value = parseInt(document.getElementById("number").value, 10);
    //   value = isNaN(value) ? 0 : value;
    //   value++;
    //   document.getElementById("number").value = value;
    // }
    const p = document.createElement('p');
    p.innerText = userComment;



    // const commentContainer1 = document.getElementById('comments');
    // commentContainer1.appendChild(h);
    // newComment.value = "";

    const commentContainer = document.getElementById('comments');
    commentContainer.appendChild(p);
    newComment.value = "";

})
