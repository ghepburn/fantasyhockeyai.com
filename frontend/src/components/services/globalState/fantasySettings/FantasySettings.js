export class FantasySettings {
    constructor() {
        this.PlayerSettings = new PlayerSettings();
        this.GoalieSettings = new GoalieSettings();
    }
}

export class PlayerSettings {
   goals = new Category("G", false, 3);
   assists = new Category("A", false, 1);
   points = new Category("P", false, 0.25);
   shots = new Category("S", false, 0.25);
   hits = new Category("Hts", false, 0.25);
   pim = new Category("Pim", false, 0.25);
   "+/-" = new Category("+/-", false, 0.25);
   ppp = new Category("Ppp", false, 0.25);
   shp = new Category("Shp", false, 0.25);
   otg = new Category("Otg", false, 0.25);
   gwg = new Category("Gwg", false, 0.25);
}

export class GoalieSettings {
    saves = new Category("S", false, 0.2);
    wins = new Category("W", false, 3);
    awins = new Category("W", false, 3);
    bwins = new Category("W", false, 3);
    cwins = new Category("W", false, 3);
    dwins = new Category("W", false, 3);
} 

class Category {
    constructor(shortName, show, weight) {
        this.shortName = shortName;
        this.show = show;
        this.weight = weight;
    }
}