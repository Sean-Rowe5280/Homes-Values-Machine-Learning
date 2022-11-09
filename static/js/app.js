function make_pred(){
    let age= document.getElementById("age").value;
    let religion= document.getElementById("religion").value;
    let family_size= document.getElementById("fam_size").value;
    let urban= document.getElementById("urban").value;
    let gender= document.getElementById("gender").value;
    let education= document.getElementById("education").value;
    let engant= document.getElementById("engant").value;
    let hand_orientation= document.getElementById("hand_orientation").value;
    let orientation= document.getElementById("orientation").value;
    let race= document.getElementById("race").value;
    let voted= document.getElementById("voted").value;
    let married= document.getElementById("married").value;
    console.log("age",age) 
    console.log("religion",religion)
    console.log("family_size",family_size)
    console.log("urban",urban)
    console.log("gender",gender)
    console.log("education",education)  
    console.log("engant",engant)
    console.log("hand_orientation",hand_orientation)
    console.log("orientation",orientation)
    console.log("race",race)
    console.log("voted",voted)
    console.log("married",married)
    fetch("/predict", {
        method: "POST", 
        body: JSON.stringify({
            age: age,
            religion: religion,
            family_size: family_size,
            urban: urban,
            gender: gender,
            education: education,
            engant: engant,
            hand_orientation: hand_orientation,
            orientation: orientation, 
            race: race,
            voted: voted,
            married: married



        }),
        headers:{
            "Content-type":"application/json;charset=UTF-8"

        } 
    }).then(resp=>{
        return resp.json()
    }).then(resp=>{
        console.log(resp)
        document.getElementById("prediction").innerHTML=resp.Prediction
        console.log(resp.Prediction);
        if (resp.Prediction=="Not a Conspiracy Theorist"){
            document.getElementById("dummy").src= "/static/images/scully.gif" 
        }
        else if (resp.Prediction=="Government Malfeasance"){
            document.getElementById("dummy").src="/static/images/washington.gif"
        }
        else if (resp.Prediction=="Malevolent Global Conspiracy"){
            document.getElementById("dummy").src="/static/images/theyre_watching.gif"
        }
        else if (resp.Prediction=="Extraterrestrial Cover-up"){
            document.getElementById("dummy").src="/static/images/aliens.gif"
        }
        else if (resp.Prediction=="Personal Well-being"){
            document.getElementById("dummy").src="/static/images/mind_control.gif"
        }
        else if (resp.Prediction=="Control of Information"){
            document.getElementById("dummy").src="/static/images/simpsons.gif"
        }
        else if (resp.Prediction){
            document.getElementById("dummy").src="/static/images/jackets.gif"
        }
    })
}