from flask import Flask, request
import json
from .app import app
from .models import Player, Goalie

from .utils.transformer import Transformer
from .utils.validator import Validator
from .utils.loader import Loader


@app.route("/")
def home():
    return "HOME PAGE BABY"

@app.route("/api/nhl", methods=['POST'])
def inputData():

    # recieve
    nhlData = json.loads(request.data)
    print("recieved")
    print(nhlData["name"])

    # validate
    isValid = Validator.validateNHLData(nhlData)
    
    if isValid:
 
        # transform
        transformedNHLData = Transformer.transformNHLData(nhlData)

        # load
        Loader.loadNHLData(transformedNHLData)

        # return
        return json.dumps(transformedNHLData)

    else:
        return "Input data is not formatted correctly."