import joblib
import pandas as pd
from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/", methods=["GET", 'POST'])
def index():
    return render_template("index.html") 

@app.route("/predict", methods=["GET", 'POST'])
def predict():
    output = "Your value here!"
    #If you have the user submit a form
    if request.method == 'POST': 
        """
        walmart_store_count: walmart_store_count,
            TJs_store_count: TJs_store_count,
            bed: bed,
            bath: bath,
            acre_lot: acre_lot,
            house_size: house_size,
            zip_code: zip_code
            
"""
        model= joblib.load('ExtraTreesRegressor.joblib')
        
        walmart_store_count=request.json.get("walmart_store_count")
        TJs_store_count=request.json.get("TJs_store_count")
        bed=request.json.get("bed")
        bath=request.json.get("bath")
        acre_lot=request.json.get("acre_lot")
        house_size=request.json.get("house_size")
        zip_code=request.json.get("zip_code")
        columns = ['bed', 'bath', 'acre_lot', 'zip_code', 'house_size', 'TJs_store_count', 'walmart_store_count']
        # test_data = [[education, urban, gender, engant, age, hand_orientation, religion, orientation, race, voted, married, family_size]]
        test_data = pd.DataFrame([[walmart_store_count, TJs_store_count, bed, bath, acre_lot, house_size, zip_code]], columns=columns)
        pred=model.predict(test_data)

        print(test_data)
        print(pred)

    return render_template('predictions.html', output=output)       

if __name__=="__main__":
    app.run(debug=True)