window.onload = () => {
    let canvas = new Signature("#signature")

    document.querySelector("#effacer").addEventListener("click", (e) => {
        e.preventDefault()
        canvas.effacer()
    })

    document.querySelector("#enregistrer").addEventListener("click", (e) => {
        e.preventDefault()
        
        let data = {
            image: canvas.genererImage()
        }

        fetch("signature.php", {
            method: "POST",
            body: JSON.stringify(data)
        }).then((reponse) => {
            console.log(reponse)
        })
    })
}