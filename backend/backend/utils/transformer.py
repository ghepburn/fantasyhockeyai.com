from .mapper import Mapper
from ..models import Player, Goalie

import pandas as pd
import copy

class Transformer:

    @classmethod
    def transformNHLData(cls, nhlData, year):

        # add year
        nhlData['year'] = year

        # transform col names
        data = cls.transformColumnNames(nhlData)

        # transform value formats
        data = cls.transformValues(data)

        # create & insert id
        data = cls.addId(data)

        # transform to data model
        dataModel = cls.transformToDataModel(data)

        return dataModel
    
    @classmethod
    def transformColumnNames(cls, data):

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

    @classmethod
    def addId(cls, data):

        year = data['year']
        name = data['name']

        # re-format name w no spaces and no caps
        name = name.lower()
        nameList = name.split(" ")
        name = "".join(nameList)

        # combine name and year for id
        id = name + year

        data["id"] = id

        return data



