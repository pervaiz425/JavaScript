window.onload = initAll;
function initAll()
{
    document.getElementById("Link").onclick = inIT;
}

function inIT() {
    console.log(this);
    alert("We are not responsible for the Contents outside of this Website");
    window.location = this;
}