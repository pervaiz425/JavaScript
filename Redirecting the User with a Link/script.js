(function()
{
    document.getElementById("mySite").onclick = inIT;
    function inIT()
    {
        alert("We are not responsible for the Contents outside of this Website");
        window.location.href = this;
        console.log(this);
        return false;
    }
})();