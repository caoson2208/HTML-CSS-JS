const upload = document.querySelector("#mypicture");
const preview = document.querySelector(".preview");
const error = document.querySelector(".error");

upload.addEventListener("change", e => {
  var file = upload.files[0];
  if (!file) return;

  if (!file.name.endsWith(".jpg")) {
    error.innerHTML = `Hình ảnh phải thuộc định dạng Jpg`;
    return;
  } else {
    error.innerHTML = ``;
  }

  if (file.size / (1024 * 1024) > 5) {
    error.innerHTML = `Chỉ được Upload ảnh < 5MB`;
    return;
  } else {
    error.innerHTML = ``;
  }

  var img = document.createElement("img");
  var fileReader = new FileReader();
  fileReader.readAsDataURL(file);
  fileReader.onloadend = e => {
    // console.log(e.target.result);
    img.src = e.target.result;
  };

//   img.src = URL.createObjectURL(file);
  preview.appendChild(img);
});
