function () {
    window.close();
    }, 3000);
}())
function loaded()
{
    alert("Beep!");
    window.setTimeout(CloseMe, 500);
}

function CloseMe() 
{
    window.close();
}

