function editProfile() {
    const fields = document.querySelectorAll('.profile-info span');
    fields.forEach(field => {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = field.innerText;
        field.parentNode.replaceChild(input, field);
    });
    document.querySelectorAll('.profile-info a').forEach(anchor => {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = anchor.innerText;
        anchor.parentNode.replaceChild(input, anchor);
    });

    // Make bio section editable
    const bioText = document.getElementById('bio-text');
    const bioInput = document.createElement('textarea');
    bioInput.value = bioText.innerText;
    bioText.parentNode.replaceChild(bioInput, bioText);

    document.getElementById('change-photo-btn').style.display = 'inline-block';
    document.querySelector('.save-btn').style.display = 'block';
}

function saveChanges() {
    const inputs = document.querySelectorAll('.profile-info input');
    inputs.forEach(input => {
        const span = document.createElement('span');
        span.innerText = input.value;
        input.parentNode.replaceChild(span, input);
    });
    document.querySelectorAll('.profile-info a').forEach(input => {
        const span = document.createElement('span');
        span.innerText = input.value;
        input.parentNode.replaceChild(span, input);
    });

    // Save bio section changes
    const bioInput = document.querySelector('.bio-section textarea');
    const bioText = document.createElement('p');
    bioText.id = 'bio-text';
    bioText.innerText = bioInput.value;
    bioInput.parentNode.replaceChild(bioText, bioInput);

    document.getElementById('change-photo-btn').style.display = 'none';
    document.querySelector('.save-btn').style.display = 'none';
}

function uploadPic() {
    const fileInput = document.getElementById('upload-pic');
    fileInput.click();
}

document.getElementById('upload-pic').addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('profile-pic').src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
});
