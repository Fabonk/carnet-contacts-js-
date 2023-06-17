
let btnAdd = document.getElementById('btn-add');
let listView = document.querySelector('.contact-list')
let forme=document.getElementById('form');
let btnCancel = document.getElementById('btn-cancel');
let btnAjouter = document.getElementById('btn-submit');

let contacts =[];

btnAdd.addEventListener('click',(e)=>{
    btnAdd.style.display="none";
    form.style.display="block";
})

btnCancel.addEventListener('click', (e) =>{
    btnAdd.style.display="block";
    form.style.display="none";
})
function clearInput(){
    document.getElementById("nom").value="";
    document.getElementById("prenom").value="";
    document.getElementById("pays").value="";
    document.getElementById("genre").value="";
    document.getElementById("phone").value="";
    document.getElementById("email").value="";
    Date.parse(document.getElementById("birthday").value="")
}
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let pays = document.getElementById("pays").value;
    let genre = document.getElementById("genre").value;
    let telephone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let timestamp = Date.parse(document.getElementById("birthday").value)
    let dateBirth = new Date(timestamp);
    let ladate = new Date();
    let age= parseInt(ladate.getFullYear())-parseInt(dateBirth.getFullYear())
    let temp = `
        <div class="contact-item" >
        <table>
        <tr>
            <td><img src="img/avatar.png" alt="" width="70px"></td>
            <td><span class="nomIdentite" >${nom+" "}</span>
            <span class="prenomIdentite" >${" "+prenom}</span>
                <p class="paysIdentite">${pays}</p>
                <p class="phoneIdentite">${telephone}</p>
                <p class="emailIdentite">${email}</p>
                <span class="genreIdentite" >${genre+" "}</span>
                <span >(${age} ans)</span>
            <td><button class="btnModif" onClick="editContact()">Mod</button></td>
            <td><button id="btnSupp" onClick="deleteContact()">Sup</button></td>
            <br>
        </tr>
        </table>
        </div>`;
        listView.innerHTML += temp;
        clearInput();
});


      

function editContact(){
    let nom = document.querySelector('.nomIdentite').textContent;
    let prenom = document.querySelector('.prenomIdentite').textContent;
    let pays = document.querySelector('.paysIdentite').textContent;
    let email = document.querySelector('.emailIdentite').textContent;
    let genre = document.querySelector('.genreIdentite').textContent;
    let phone= document.querySelector('.phoneIdentite').textContent;
  

    document.getElementById("nom").value=nom;
    document.getElementById("prenom").value=prenom;
    document.getElementById("pays").value=pays;
    document.getElementById("email").value=email;
    document.getElementById("genre").value=genre;
    document.getElementById("phone").value=phone;

    document.getElementById("btn-submit").textContent="Modifier contact";
    document.getElementById("btn-submit").style.backgroundColor="orange";
    document.getElementById("TitreAjoutContact").textContent="Modifier Contact";
}

function deleteContact(){
    let nom = document.querySelector('.nomIdentite');
     nom.parentElement.parentElement.remove();
     btnAdd.style.display="block";
     form.style.display="none";
}


/*form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let data = new FormData(e.target);
    let timestamp = Date.parse(data.get('birthday'))
    let dateBirth = new Date(timestamp);
    let ladate = new Date();

    let contact = {
        'nom':data.get('nom'),
        'prenom':data.get('prenom'),
        'pays':data.get('pays'),
        'genre':data.get('genre'),
        'telephone':data.get('phone'),
        'birthday':data.get('birthday'),
        'email':data.get('email'),
        'age':parseInt(ladate.getFullYear())-parseInt(dateBirth.getFullYear())
        // 'avatar':data.get('avatar'),
        
    }
    contacts.push(contact);
    renderListView();
})

function renderListView(){
    for (let index=0;index<contacts.length;index++) {
        let temp = `
        <div class="contact-item" >
        <table>
        <tr>
            <td><img src="img/avatar.png" alt="" width="70px"></td>
            <td><h3>${contacts[index].nom +" "+ contacts[index].prenom}</h3>
                <p>${contacts[index].pays}</p>
                <p>${contacts[index].telephone}</p>
                <p>${contacts[index].email}</p>
                <p>${contacts[index].genre} (${contacts[index].age} ans)</p></td>
            <td><button class="btnModif" onClick="editContact(${index})">Mod</button></td>
            <td><button class="btnSupp" onClick="deleteContact(${index})">Sup</button></td>
        </tr>
        </table>
        </div>`;
        listView.innerHTML += temp
    }
}


function deleteContact(index){
    contacts.splice(index, 1)
    renderListView();
    console.log(index+1)
}
// function showMore(){
//     let more = e.getElementsByClassName('more');
//     for (const m of more) {
        
//         m.classList.toggle('info')
     }
 }*/

