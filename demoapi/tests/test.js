//inside tests/test_helper.js

const mongoose = require('mongoose');

//tell mongoose to use es6 implementation of promises
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/pokemons');

mongoose.connection
    .once('open', () => console.log('Connected!'))
    .on('error', (error) => {
        console.warn('Error : ', error);
    });

//Called hooks which runs before something.
beforeEach((done) => {
    mongoose.connection.collections.pokemons.drop(() => {
        //this function runs after the drop is completed
        done(); //go ahead everything is done now.
    });
});