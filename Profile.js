document.getElementById("openDialog").addEventListener("click", function () {
  document.getElementById("Changeimg").style.display = "block";
});

document.getElementById("closeDialog").addEventListener("click", function () {
  document.getElementById("Changeimg").style.display = "none";
});

function changeImage() {
  const preview = document.getElementById("mainIamge");
  const previewimage = document.getElementById("mainIamge1");
  preview.src = "./Images/ProfileImage.png";
  previewimage.src = "./Images/ProfileImage.png"
}

function UpdateImage(){
    const image = forms['editimage'].querySelector('input[type="file"]').value;
    const preview = document.getElementById("mainIamge");
    const previewimage = document.getElementById("mainIamge1");
    preview.src = image;
    previewimage.src = image;
  
}

document.addEventListener('DOMContentLoaded', function(){

  const list = document.querySelector('#por-club ul');
  const forms = document.forms;
  list.addEventListener('click', (e) => {
    if(e.target.className == 'deleteitem'){
      const li = e.target.parentElement;
      li.parentNode.removeChild(li);
    }
  });

  const addForm = forms['add-por'];
  addForm.addEventListener('submit', function(e){
    e.preventDefault();

    
    const value = addForm.querySelector('input[type="text"]').value;
    const li = document.createElement('li');
    const porName = document.createElement('div');
    const deleteBtn = document.createElement('div');

    porName.textContent = value;
    deleteBtn.textContent = 'X';

    porName.classList.add('name');
    deleteBtn.classList.add('deleteitem');

    li.appendChild(porName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
  });


})



document.addEventListener('DOMContentLoaded', function(){

  const list = document.querySelector('#skilladd ul');
  const forms = document.forms;
  list.addEventListener('click', (e) => {
    if(e.target.className == 'deleteskill'){
      const li = e.target.parentElement;
      li.parentNode.removeChild(li);
    }
  });

  const addForm = forms['add-skill'];
  addForm.addEventListener('submit', function(e){
    e.preventDefault();

    
    const value = addForm.querySelector('#skilllist').value;
    const li = document.createElement('li');
    const skillName = document.createElement('div');
    const deleteBtn = document.createElement('div');

    skillName.textContent = value;
    deleteBtn.textContent = 'X';

    skillName.classList.add('skillname');
    deleteBtn.classList.add('deleteskill');

    li.appendChild(skillName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
  });


})

