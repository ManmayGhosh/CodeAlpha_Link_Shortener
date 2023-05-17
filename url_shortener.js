let btn = document.getElementById("shortener");
btn.addEventListener('click', short);

async function short(){
    let longUrl = document.getElementById('long_Url').value;
    let shortUrl = document.getElementById("short_Url");
    
    const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${longUrl}`);
    const data = await response.json();
    
    shortUrl.value = data.result.full_short_link2;
}

let shortUrl = document.getElementById("short_Url");
let copybtn = document.getElementById("copy");

copybtn.onclick= ()=>{
    shortUrl.select();
    window.navigator.clipboard.writeText(shortUrl.value).then(() => {
        alert('Copied to clipboard!');
    });    
}