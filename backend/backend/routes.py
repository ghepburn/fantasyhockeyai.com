from flask import Flask, request
import json
import sys

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

    print("got data")

    try:

        # recieve
        jsonData = json.loads(request.data)
        nhlData = jsonData['data']
        print(nhlData)

        # validate
        isValid = Validator.validateNHLData(nhlData)
        
        if isValid:

            result = []
            
            for athlete in nhlData:

                # transform
                transformedNHLData = Transformer.transformNHLData(athlete)

                print(transformedNHLData)

                # load
                loadedAthlete = Loader.loadNHLData(transformedNHLData)

                # append
                result.append(loadedAthlete)

            # return
            return json.dumps(result)

        else:
            return "Input data is not formatted correctly."

    except:
        print("Backend import failed.")
        print(str(sys.exc_info()[0]))
        return "Backend import failed."