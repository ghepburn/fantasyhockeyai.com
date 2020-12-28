import axios from "axios";
import Cache from "./Cache";

export default class Client {
    static goalieEndpoint = "/api/goalies";
    static playerEndpoint = "/api/players";

    static playerCache = new Cache();
    static goalieCache = new Cache();

    static getPlayers = async () => {
        let players;

        //check cache
        if (this.playerCache.hasData()) {
            players = this.playerCache.getData()
        } else {
            const response = await axios.get(this.playerEndpoint);
            players = response.data.players;
            this.playerCache.setData(players);
        }
        return players;
    }

    static getGoalies = async () => {
        let goalies;

        //check cache
        if (this.goalieCache.hasData) {
            goalies = this.goalieCache.getData()
        } else {
            const response = await axios.get(this.GoalieEndpoint);
            goalies = response.data.goalies;
            this.goalieCache.setData(goalies);
        }
        return goalies;
    }
}