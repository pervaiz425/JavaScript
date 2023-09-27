
function inIT()
{
    const refer = document.querySelector("form").elements;
    for(let i = 0 ; i < refer.length ; i++)
    {
        refer[i].onclick = saySomething;
    }
}

// Varsion: 2
// function inIT()
// {
//    document.getElementById("Lincoln").onclick = saySomething;
//    document.getElementById("Washington").onclick = saySomething;
//    document.getElementById("Roosevelt").onclick = saySomething;
// }

// Version: 3
// function inIT()
// {
//     document.querySelectorAll("input").onclick = saySomething;z
// }

function saySomething()
{
    switch(this.id){
        case 'Lincoln':
            alert('Lincoln');
            break;
        case 'Washington':
            alert('Washington');
            break;
        case 'Roosevelt':
            alert('Roosevelt');
            break;  
        default:
            alert('Error');
            break;
    }
}

inIT();