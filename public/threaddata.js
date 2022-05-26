var btn = document.querySelector('.newthread');

btn.addEventListener('click', function() {
    var nameinput = document.querySelector('.threadname');
    var authorinput = document.querySelector('.threadauthor');
    updateThreads(nameinput.value);
    fetch('/addthread', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({creator: authorinput.value, title: nameinput.value, threadtime: new Date().toLocaleString(navigator.language, { hour12: false })}),
    }) 
    nameinput.value = '';
    authorinput.value = '';
    window.location.reload();
})

function updateThreads(threadn, threadcreator) {
    var text = document.querySelector('.posts');
    var texthtml = `
    <a href="#">
    <img src="upvotearrow.png" height="8" width="8" title="upvote" class="upvote" style="float:left;padding: 5px 0;">
    </a>
    <a title="${threadn}" style="text-decoration: none"><div class="threadtitle">${threadcreator}</a></div><div class="threadinfo">by ${threadcreator}</div>
    </li>
    `
    text.insertAdjacentHTML('beforeend', texthtml);
}

function getThreads() {
    fetch('/getthreads')
    .then(response => response.json())
    .then(data =>
        data.forEach(item => 
           {var divb = document.querySelector('.posts');
            var divtext = `<li>
            <a href="">
            <img src="upvotearrow.png" height="8" width="8" title="upvote" class="upvote" style="float:left;padding: 5px 0;">
            </a>
            <a href="/threads?id=${item.id}" title="${item.title}, id: ${item.id}" style="text-decoration: none"><div class="threadtitle">${item.title}</a></div><div class="threadinfo">by ${item.creator}</div>
            </li>`;
        divb.insertAdjacentHTML('beforeend', divtext);}
    ));
}
getThreads();