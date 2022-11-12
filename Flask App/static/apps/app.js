function make_pred(){
    let walmart_store_count= document.getElementById("walmart_store_count").value;
    let Trader_Joes_count= document.getElementById("TJs_store_count").value;
    let bed= document.getElementById("bed").value;
    let bath= document.getElementById("bath").value;
    let acre_lot= document.getElementById("acre_lot").value;
    let house_size= document.getElementById("house_size").value;
    let zip_code= document.getElementById("zip_code").value;
    console.log("walmart_store_count",walmart_store_count) 
    console.log("TJs_store_count",TJs_store_count)
    console.log("bed",bed)
    console.log("bath",bath)
    console.log("house_size",house_size)
    console.log("zip_code",zip_code)  
    fetch("/predict", {
        method: "POST", 
        body: JSON.stringify({
            walmart_store_count: walmart_store_count,
            TJs_store_count: TJs_store_count,
            bed: bed,
            bath: bath,
            acre_lot: acre_lot,
            house_size: house_size,
            zip_code: zip_code


        }),
        headers:{
            "Content-type":"application/json;charset=UTF-8"

        } 
    }).then(resp=>{
        return resp.json()
    }).then(resp=>{
        console.log(resp)
        document.getElementById("prediction").innerHTML=resp.Prediction
        console.log(resp.Prediction)
    })
}
