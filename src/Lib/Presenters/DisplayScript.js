// Set web store
if (typeof(Storage) !== "undefined")
{
    if( ! localStorage.performanceToolDisplay)
        localStorage.performanceToolDisplay = 'show';

    if(localStorage.performanceToolDisplay == 'hide')
        performanceDisplayToggle(false);
}


function performanceDisplayToggle(show)
{
    x = document.getElementById('hiddenContent');
    y = document.getElementById('performance-tool');
    z = document.getElementById('performance-btn-close');
    status = null;
    if( x.style.display == 'none' || show == true)
    {
        x.style.display = 'block';
        y.style.height = 300;
        y.style.maxWidth = 500;
        z.innerHTML = '&#9660;';
        status = 'show';
    }
    else
    {
        x.style.display = 'none';
        y.style.height = 40;
        y.style.maxWidth = 36;
        z.innerHTML = '&#9650;';
        status = 'hide';
    }

    if(typeof(Storage) !== "undefined" && show == null)
        localStorage.performanceToolDisplay = status;
}