async function showLinkPreview() {
    var url = document.getElementById("name").value;
    
    try {
        const data = await fetch("https://api.linkpreview.net?key=b189df4ada1ca44c9b3cf7337a886e86&q=https://" + url + ".com");
        const dataJson = await data.json();
    
        const profileShow = document.getElementById('cont');
        profileShow.innerHTML = `
        <center>
            <br><strong>Title: ${dataJson.result}</strong>
            <br><br><strong>Description: ${dataJson.description}</strong>
            <br><br><img src="${dataJson.image}" width="100px" heigth="100px">
            <br><br><strong>URL: ${dataJson.url}</strong>
        </center>
        `    
    } catch (err) {
        alert('Algo deu errado, tente novamente');
    }   
}