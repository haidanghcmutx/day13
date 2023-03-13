var upload = document.querySelector('#mypicture')
var preview = document.querySelector('.preview')
var error = document.querySelector('.error')

upload.addEventListener('change', function(e) {
    var file = upload.files[0]
    if(!file)
    return
    if(!file.name.endsWith('.jpg')) {
        error.innerHTML = `Hinh anh thuoc dinh danh jpeg`
    } else {
        error.innerHTML = ``
    }

    if(!file.size / (1024 * 1024) > 5) {
        error.innerHTML = `Chi upload dc anh duoi 5mb`
    } else {
        error.innerHTML = ''
    }
     var fileReader = new FileReader()
     fileReader.readAsDataURL(file)
     fileReader.onloadend = function(e) {
         // img.src = URL.createObjectURL(file)
         img.src = e.target.result
     }
    var img = document.createElement('img')
    preview.appendChild(img)
})