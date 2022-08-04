var btn = document.querySelector('.searchbutton');

btn.addEventListener('click', function() {
    var search = document.querySelector('.searchbox');
        window.location = `/search?=${search.value}`;
});