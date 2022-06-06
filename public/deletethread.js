function testfunc(text, text2)
{
    fetch('/deletethread', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({newthreadno: text, id: text2}),
    }) 
    window.location.reload();
}