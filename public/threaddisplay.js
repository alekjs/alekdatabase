function getThread() {
    fetch('/getthreads')
    .then(response => response.json())
    .then(data => 
           {var text = document.querySelector('.threadcontents');
            var id = data[window.location.search.slice(4)-1];
            var userhtml = `
            <div class="titlethread">${id.title}</div>
            <div class="titletime">by <a href="#" style="text-decoration: none; color: rgb(100,48,144);">${id.creator}</a>, ${id.threadtime}</div>
            `
            text.insertAdjacentHTML('beforeend', userhtml);}
    );
}
getThread();