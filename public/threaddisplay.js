function getThread() {
    fetch(`/threadsapi/${window.location.search.slice(4)}`)
    .then(response => response.json())
    .then(data => 
        
        data.forEach(item =>
        {
            
            var text = document.querySelector('.threadcontents');
            var userhtml = `
            <div class="titlethread">${item.title} <a role="button"><img src="editicon.png"></a></div>
            <div class="titletime">by <a href="/users/${item.creator.toLowerCase()}" class="link">${item.creator}</a>, ${item.threadtime}</div>
            <div style="margin: 2px 10px;font-size: 13px;color:rgb(50, 50, 50);">${item.content}</div>
            `
            text.insertAdjacentHTML('beforeend', userhtml);
            
        }
    )
    
    );
    
}

function editMode()
{
    var text = document.querySelector('.threadcontents');
            var userhtml = `
           <input placeholder="aaaa">
            `
            text.insertAdjacentHTML('beforeend', userhtml);
}
    getThread();
