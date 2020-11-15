from ..models import Player, Goalie

class Mapper:

    mappedColNameUtil = {
        "/": "Per",
        "%": "Percent",
        "es": "toiEs",
        "pp": "toiPp",
        "sh": "toiSh",
        "sh%": "shotPercent",
        "+/-": "plusMin"
        }

    mappedValueUtil = {
        ":": ".",
        "%": ""
    }

    @classmethod
    def mapColumnName(cls, colName):

        colName = colName.lower()

        # first try goalies
        if colName in Player.__table__.columns:
            return colName

        # second try players
        if colName in Goalie.__table__.columns:
            return colName   

        # third replace entire word
        if colName in cls.mappedColNameUtil:
            return cls.mappedColNameUtil[colName]

        # finally replace single character

        for i in range(len(colName)):
            if colName[i] in cls.mappedColNameUtil:
                
                # first captalize next character
                if i < len(colName)-1:
                    j = i + 1
                    k = j + 1
                    colName = colName[:j] + colName[j].upper() + colName[k:]  

                # then replace the character
                colName = colName.replace(colName[i], cls.mappedColNameUtil[colName[i]])

        return colName

    @classmethod
    def mapValue(cls, value):
        # iterate through characters
        for i in range(len(value)):
            if value[i] in cls.mappedValueUtil:
                j = i + 1
                value = value[:i] + cls.mappedValueUtil[value[i]] + value[j:] 
        return value