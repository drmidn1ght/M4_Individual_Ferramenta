class EntryModel {
        constructor() {
            this.entry = [];
        }
    
        addEntry(propCss) {
            this.entry.push(propCss);
        }
    
        sortEntry() {
            return this.entry.sort();
        }
    }
    
    module.exports = EntryModel;
    