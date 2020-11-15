from ..app import db


class Loader:

    @staticmethod
    def loadNHLData(dataModel):
        print("Loading")

        try:

            # load dataModel into db   
            db.session.add(dataModel)
            db.session.commit()

        except:
            print("Backend loader could not save data model.")