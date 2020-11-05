export class FantasySettings {
    constructor() {
        this.PlayerSettings = new PlayerSettings();
        this.GoalieSettings = new GoalieSettings();
    }
}

export class PlayerSettings {
   goals = new Category("G", false, 3);
   assists = new Category("A", false, 1);
   shots = new Category("S", false, 0.25);
   hits = new Category("Hts", false, 0.25);
}

export class GoalieSettings {
    saves = new Category("S", false, 0.2);
    wins = new Category("W", false, 3);
} 

class Category {
    constructor(shortName, show, weight) {
        this.shortName = shortName;
        this.show = show;
        this.weight = weight;
    }
}