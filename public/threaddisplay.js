function getThread() {
    fetch('/getthreads')
    .then(response => response.json())
    .then(data => 
           {var text = document.querySelector('.threadcontents');
            var id = data[window.location.search.slice(4)-1];
            var userhtml = `
            <div class="titlethread">${id.title}</div>
            <div class="titletime">by <a href="/users/${id.creator.toLowerCase()}" class="link">${id.creator}</a>, ${id.threadtime}</div>
            <div style="margin: 2px 10px;font-size: 13px;color:rgb(50, 50, 50);">${id.content}</div>
            `
            text.insertAdjacentHTML('beforeend', userhtml);}
    );
}
getThread();