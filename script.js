
function Send() {
    let inpName = document.getElementById('nameInput').value
    let inpCity = document.getElementById('cityInput').value

    if (inpName == '') {
        document.getElementById('name').innerHTML = 'nenhum valor digitado'
    } else if (inpCity == '') {
        document.getElementById('city').innerHTML = 'nenhum valor digitado'
    } else {
        
        document.getElementById('content').style.display = 'none';
        document.getElementById('pop').style.display = 'block'
        
        let nameText = 'Your Name: ' + inpName
        document.getElementById('name').innerHTML = nameText
        
        let cityText = 'Your City: ' + inpCity
        document.getElementById('city').innerHTML = cityText
    }

}
