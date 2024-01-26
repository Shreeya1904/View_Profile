document.getElementById("openDialog").addEventListener("click", function () {
  document.getElementById("Changeimg").style.display = "block";
});

document.getElementById("closeDialog").addEventListener("click", function () {
  document.getElementById("Changeimg").style.display = "none";
});

function changeImage() {
  var preview = document.getElementById("mainIamge");
  var previewimage = document.getElementById("mainIamge1")
  preview.src = "./Images/ProfileImage.png";
  previewimage.src = "./Images/ProfileImage.png"
}

function UpdateImage() {
  var input = input.value;
  var preview = document.getElementById("mainImage");

  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function () {
      preview.src = reader.result;
    };

    reader.readAsDataURL(input.files[0]);
  }
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
    const bookName = document.createElement('div');
    const deleteBtn = document.createElement('div');

    bookName.textContent = value;
    deleteBtn.textContent = 'X';

    bookName.classList.add('name');
    deleteBtn.classList.add('deleteitem');

    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
  });


})


