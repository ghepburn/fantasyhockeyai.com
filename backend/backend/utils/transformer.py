from .mapper import Mapper
from ..models import Player, Goalie

import pandas as pd

class Transformer:

    @classmethod
    def transformNHLData(cls, nhlData):
        print("transforming")

        # if player data
        if Mapper.isPlayer(nhlData[0]):
            nhlPlayers = []
            for key in nhlData:
                player = cls.tranaformPlayer(nhlData[key])
                nhlPlayers.append(player)
            return nhlPlayers

        # if goalies
        elif Mapper.isGoalie(nhlData[0]):
            nhlGoalies = []
            for key in nhlData:
                goalie = cls.tranaformGoalie(nhlData[key])
                nhlGoalies.append(goalie)
            return nhlGoalies

        # otherwise
        else:
            return None

    # individual player transformations
    @classmethod
    def transformPlayer(cls, playerData):
        # create player
        player = Player()

        # iterate through player cols
            # map cols to appropriate names
            # apply info to new player

        # return player

    
        # return Player()

    @classmethod
    def transformGoalie(cls, goalieData):
        pass

        # return Goalie()
