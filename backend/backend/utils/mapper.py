from ..models import Player, Goalie

class Mapper:
    
    @classmethod
    def getPlayerCols(cls):
        playerCols = []
        for col in Player.__table__.columns:
            colList = str(col).split(".")
            colName = colList[1]
            playerCols.append(colName)
        return playerCols

    @classmethod
    def getGoalieCols(cls):
        goalieCols = []
        for col in Goalie.__table__.columns:
            colList = str(col).split(".")
            colName = colList[1]
            goalieCols.append(colName)
        return goalieCols

    @classmethod
    def isPlayer(cls, data):
        
        playerCols = cls.getPlayerCols()

        for key in data:
            if key not in playerCols:
                return False
        return True

    @classmethod
    def isGoalie(cls, data):
        
        goalieCols = cls.getGoalieCols()

        for key in data:
            if key not in goalieCols:
                return False
        return True