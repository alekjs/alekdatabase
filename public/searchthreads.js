var results = 0;
function searchThreads() {
    fetch('/getthreads')
    
    .then(response => response.json())
    .then(data =>
        data.forEach(item =>
           {
            
            if(item.title.includes(window.location.search.slice(2)))
            {
                results += 1;
                
                var search = document.querySelector('.searchbox');
                var divb = document.querySelector('.posts');
                var divtext = `<a class="threadlink" href="/threads?id=${item.id}" title="${item.title}, id: ${item.id}" style="text-decoration: none"><div class="threadtitle">${item.title}</a></a></div><div class="threadinfo">by ${item.creator}</div>`;
                divb.insertAdjacentHTML('beforeend', divtext);
            }
            if(results===0)
            {
                var divb = document.querySelector('.posts');
                var divtext = `<span class="nothreads">we couldn't find any threads with that name..</span>`;
                divb.insertAdjacentHTML('beforeend', divtext);
                results = null;
            }
           }
           
           
           
           ))
           var divb = document.querySelector('.posts');
           var divtext = `${results} results for "${window.location.search.slice(2)}"`;
           divb.insertAdjacentHTML('beforeend', divtext);

           var title = document.querySelector('.title');
           var titlehtml = `search results for "${window.location.search.slice(2)}"`;
           title.insertAdjacentHTML('beforeend', titlehtml);
        }
        searchThreads();
        console.log(results);