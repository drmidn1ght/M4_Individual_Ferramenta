const readline = require('readline');
const EntryModel = require('../models/entryModel');

class EntryController {

    constructor() {
        this.entryModel = new EntryModel();
    }this.rl = readline.createInterface({

        input: process.stdin,

        output: process.stdout

    });

}


start() {

    this.rl.question('Digite a propriedade CSS ou "sair" para fechar: ', input => {
        if (input.toLowerCase () === 'sair') {
            this.rl.close(); 
            this.showSortedEntries();
        }

        else {
            this.entryModel.addEntry(input);

            this.start();
        }

    });

}

showSortedEntries(){

    const sortedEntries = this.entryModel.sortEntries();
    console.log('Propriedades CSS ordenadas: ', sortedEntries);

}

module.exports = EntryController;}
        }
    }
}
    })
}
