var btn = document.querySelector('.comment_add');

btn.addEventListener('click', function() {
    var userinput = document.querySelector('.userinput');
    var contentinput = document.querySelector('.contentinput');
    fetch('/addcomment', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({username: userinput.value, content: contentinput.value, comment_time: new Date().toLocaleString(navigator.language, { hour12: false }), threadid: window.location.search.slice(4)}),
    }) 
    userinput.value = '';
    contentinput.value = '';
    window.location.reload();
})

function updateComments(commentcont, commentuser) {
    var text = document.querySelector('.text');
    var texthtml = `
    <p>${commentuser}: ${commentcont}</p>
    `
    text.insertAdjacentHTML('beforeend', texthtml);
}

function getComments() {
    fetch('/comments')
    .then(response => response.json())
    .then(data => 
        data.forEach(item => 
           {
            if(item.threadid == [window.location.search.slice(4)])
            {
            var text = document.querySelector('.text');
            var id = data[window.location.search.slice(4)-1];
            var userhtml = `
            <p>
            <div class="time"><a href="/users/${item.username.toLowerCase()}" class="link">${item.username}</a>, ${item.comment_time}</div>
            ${item.content}</p>
            `
            text.insertAdjacentHTML('beforeend', userhtml);
            }}
    ));
}
getComments();