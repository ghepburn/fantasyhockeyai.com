from ..app import db
from ..models import Player, Goalie


class Loader:

    @classmethod
    def loadNHLData(cls, dataModel):

        # exists in db
        exists = cls.existsInDb(dataModel)

        if exists: # update

            # is player or goalie
            isPlayer = dataModel.__table__.name == "player"

            # get
            if isPlayer:
                existingAthlete = Player.query.get(dataModel.id)
            else:
                existingAthlete = Goalie.query.get(dataModel.id)

            # update
            existingAthlete = dataModel

            # commit
            db.session.commit()

        else: # insert
 
            db.session.add(dataModel)
            db.session.commit()

        return dataModel

    @classmethod
    def existsInDb(cls, data):
        id = data.id
        
        result = None

        if data.__table__.name == "player":
            result = Player.query.get(id)
        else:
            result = Goalie.query.get(id)

        return result != None