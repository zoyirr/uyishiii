async function getData() {
    const javob = await fetch('https://ipinfo.io/json');
    const data = await javob.json();
    console.log(data);
    chizish(data); 
}

const box = document.getElementById('box');
const btn = document.getElementById('btn');

function chizish(malumot) {
    box.innerHTML = `
        <h1>Foydalanuvchi joylashuvini aniqlash</h1>
        <button id="btn">Joylashuvni ko'rsat</button>
        <p>Kenglik: ${malumot.loc.split(',')[0]}</p>
        <p>Uzunlik: ${malumot.loc.split(',')[1]}</p>
        <p>Mamlakat: ${malumot.country}</p>
        <p>Shahar: ${malumot.city}</p>
        <p>IP manzil: ${malumot.ip}</p>
        <p>Internet provayder: ${malumot.org}</p>
        <div id="map">
        <iframe 
    width="100%"
    height="300"
    frameborder="0" style="border: 0; border-radius: 20px;"
    src="https://www.google.com/maps?q=${
        malumot.loc.split(',')[0]
        },${malumot.loc.split(',')[1]}&output=embed" allowfullscreen></iframe>
        </div>
    `;

    const newBtn = document.getElementById('btn');
    newBtn.addEventListener('click', getData);
}

btn.addEventListener('click', getData);