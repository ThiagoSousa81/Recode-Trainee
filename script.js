document.getElementById("frmPassagens").addEventListener("submit", function(event){ 
    event.preventDefault();
    
    let formData = new FormData(this);

    var origem = formData.get("txtorigem");

    console.log(origem);
   
});