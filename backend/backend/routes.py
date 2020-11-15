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

    try:

        # recieve
        jsonData = json.loads(request.data)
        nhlData = jsonData['data']
        year = jsonData['year']

        # validate
        isValid = Validator.validateNHLData(nhlData)
        
        if isValid:

            result = []
            
            for athlete in nhlData:

                # transform
                transformedNHLData = Transformer.transformNHLData(athlete, year)

                # load
                loadedAthlete = Loader.loadNHLData(transformedNHLData)

                # append
                result.append(athlete)

            # print
            print("Import complete.")

            # return
            return json.dumps(result)

        else:
            return "Input data is not formatted correctly."

    except:
        print("Backend import failed.")
        return "Backend import failed."