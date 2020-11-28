export class DisplaySettings {

    constructor() {
        this.setDefaults();
    }

    setDefaults() {
        
        // buttons
        this.buttonHighlightColor = "lightgreen";

        // forms
        this.formRowLength = this.getFormRowLength();
    }

    getFormRowLength = () => {
        // get window size
        const windowWidth = window.innerWidth; 

        // if phone === 4
        if (windowWidth < 900) {
            return 3
        } else if (windowWidth < 1200) {
            return 4
        } else {
            return 6
        }

    }
    

}
