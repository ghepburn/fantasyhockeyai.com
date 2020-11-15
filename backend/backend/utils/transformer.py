from .mapper import Mapper
from ..models import Player, Goalie

import pandas as pd
import copy

class Transformer:
    idCount = 0

    @classmethod
    def transformNHLData(cls, nhlData):
        print("transforming")

        # transform col names
        data = cls.transformColumnNames(nhlData)

        # transform value formats
        data = cls.transformValues(data)

        # transform to data model
        dataModel = cls.transformToDataModel(data)

        return dataModel
    
    @classmethod
    def transformColumnNames(cls, data):
        print("transforming column names")

        result = {}

        for colName in data.keys():

            try:
                # get mapped name
                mappedColName = Mapper.mapColumnName(colName)

                # add to result
                result[mappedColName] = data[colName]

            except:
                print("transformer map failed for col: " + colName)

        return result

    @classmethod
    def transformValues(cls, data):
        print("transforming values.")
        
        result = {}

        for key in data.keys():

            try:
                # get mapped name
                mappedValue = Mapper.mapValue(data[key])

                # add to result
                result[key] = mappedValue

            except:
                print("transformer map failed for col: " + colName)

        return result

    @classmethod
    def transformToDataModel(cls, data):

        # check if player
        isPlayer = cls.isPlayer(data)
        
        try:

            # place into db model
            if isPlayer:
                athlete = Player(**data)
            else:
                athlete = Goalie(**data)

            return athlete

        except:
            print("transformer failed to convert data into model")

    @classmethod
    def isPlayer(cls, data):

        if "plusMin" in data:
            return True
        if "toiEs" in data:
            return True
        if "fol" in data:
            return True

        return False