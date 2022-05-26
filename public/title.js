var quoteval = Math.floor(Math.random() * 5);
var quote;

if(quoteval == 0)
{
  quote = name + ` - what do i put here?`
}
if(quoteval == 1)
{
  quote = name + ` - made by alek`
}
if(quoteval == 2)
{
  quote = name + ` - thank you very cool`
}
if(quoteval == 3)
{
  quote = name + ` - works with google`
}
if(quoteval == 4)
{
  quote = name + ` - now free`
}

document.querySelector('.title').innerHTML = quote;