let mainTitle = document.querySelector('#mainTitle');
let btnColor = document.querySelector('#btnColor');
let i=0;

btnColor.addEventListener('click', ()=>{
    let colors = ['red', 'black', 'green', 'blue', 'yellow'];
        mainTitle.style.color = colors[i % colors.length];
        i++;
})

/*
Traccia 3:
Avremo due elementi HTML:
un pulsante che ci consentira' di ordinare i contatti
un contenitore, in cui verranno visualizzati i contatti
<button id="btnAsc">Ordina in modo crescente</button>
<div class="wrapper"></div>

Ordinare in ordine alfabetico un elenco di contatti:
al primo click del pulsante, verranno ordinati dalla A alla Z
al secondo click del pulsante, verranno ordinati dalla Z alla A
dato un'array di partenza:
contacts = [
    { 'id': 1, 'name': 'Nicola'},
    { 'id': 2, 'name': 'Fabio'},
    { 'id': 3, 'name': 'Luca'},
    { 'id': 4, 'name': 'Giulia'}
] 

EXTRA:
Inserire un secondo pulsante che permetta di ordinarli in base all'id del contatto
Inserire un terzo pulsante che permetta di nascondere o visualizzare tutta la lista dei contatti
*/
let wrapper = document.querySelector('.wrapper');
let btnAsc = document.querySelector('#btnAsc');
let btnId  = document.querySelector('#btnId');
let btnHidden = document.querySelector('#btnHidden');

let contacts = [
    { 'id': 1, 'name': 'Nicola'},
    { 'id': 2, 'name': 'Fabio'},
    { 'id': 3, 'name': 'Luca'},
    { 'id': 4, 'name': 'Giulia'}
] 

let isAZ = true;

function viewContacts() {
    wrapper.innerHTML = '';
    contacts.forEach(el => {
    let p = document.createElement('p');
        p.innerHTML = el.name;
        wrapper.appendChild(p);
    })

};

btnAsc.addEventListener('click', () => {
    if (isAZ) {
        contacts.sort((a, b) => a.name.localeCompare(b.name));
    } else {
        contacts.sort((a, b) => b.name.localeCompare(a.name));
    }
    isAZ = !isAZ;
    return viewContacts();
});

btnId.addEventListener('click', () => {
    if (isAZ) {
        contacts.sort((a, b) => a.id - b.id);
    } else {
        contacts.sort((a, b) => b.id - a.id); 
    }
    isAZ = !isAZ;
    return viewContacts();
});

btnHidden.addEventListener('click', () => {
    wrapper.classList.toggle('hidden');
});

viewContacts();
