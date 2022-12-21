// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

const teamMembers = [
    {name:'Wayne Barnnet', role: 'Founder & CEO', photo: 'wayne-barnett-founder-ceo.jpg'},
    {name:'Angela Caroll', role: 'Chief Editor', photo: 'angela-caroll-chief-editor.jpg'},
    {name:'Walter Gordon', role: 'Office Manager', photo: 'walter-gordon-office-manager.jpg'},
    {name:'Angela Lopez', role: 'Social Media Manager', photo: 'angela-lopez-social-media-manager.jpg'},
    {name:'Scott Estrada', role: 'Developer', photo: 'scott-estrada-developer.jpg'},
    {name:'Barbara Ramos', role: 'Graphic Designer', photo: 'barbara-ramos-graphic-designer.jpg'},
]

const textArea = document.getElementById('card-area')

let finalHTML = ''

for (let member of teamMembers){
finalHTML = `
<div class="col py-4 d-flex justify-content-center">
    <div class="card" style="width: 18rem;">
        <img src="img/${member.photo}" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">${member.name}</h5>
            <p class="card-text fw-light">${member.role}</p>
        </div>
    </div>
</div>`

textArea.innerHTML += finalHTML
}