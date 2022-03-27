var btn = document.querySelector('button');
btn.addEventListener('click', function() {
    var textval = document.querySelector('textarea');
    updateUsers(textval.value);
    fetch('/addCustomer', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({username: 'user', content: textval.value, msgtime: new Date().toLocaleString()}),
    }) 
    textval.value = '';
})

function updateUsers(name) {
    var text = document.querySelector('.text');
    var texthtml = `
         <p>user: ${name}</p>
    `
    text.insertAdjacentHTML('beforeend', texthtml);
}

function getUsers() {
    fetch('/customers')
    .then(response => response.json())
    .then(data =>
        data.forEach(item => 
            {var text = document.querySelector('.text');
            var userhtml = `

                 <p><div class="time">${item.msgtime}</div>${item.username}: ${item.content}<p>
            `
            text.insertAdjacentHTML('beforeend', userhtml);}
    ));
}
getUsers();