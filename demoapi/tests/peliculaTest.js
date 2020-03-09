const mongoose = require('mongoose');

const chai = require('chai');
const expect = chai.expect;


const { Schema } = mongoose;
// Create a new schema that accepts a 'name' object.
// 'name' is a required field
const testSchema = new Schema({
    name: { type: String, required: true }
});

//Create a new collection called 'Name'
const Name = mongoose.model('Name', testSchema);


describe('Database Tests', function() {
    //Before starting the test, create a sandboxed database connection
    //Once a connection is established invoke done()
    before(function(done) {
        const dbTest = mongoose.connection;
        dbTest.on('error', console.error.bind(console, 'Error de conexión'));
        dbTest.once('open', function() {
            console.log('Conexión a la bbdd de test!');
            done();
        });
    });
    describe('Test Database', function() {
        //Save object with 'name' value of 'Mike"
        it('New name saved to test database', function(done) {
            var testName = Name({
                name: 'Mike'
            });

            testName.save(done);
        });
        it('Dont save incorrect format to database', function(done) {
            //Attempt to save with wrong info. An error should trigger
            var wrongSave = Name({
                notName: 'Not Mike'
            });
            wrongSave.save(err => {
                if (err) { return done(); }
                throw new Error('Should generate error!');
            });
        });
        it('Should retrieve data from test database', function(done) {
            //Look up the 'Mike' object previously saved.
            Name.find({ name: 'Mike' }, (err, name) => {
                if (err) { throw err; }
                if (name.length === 0) { throw new Error('No data!'); }
                done();
            });
        });
    });


    //After all tests are finished drop database and close connection
    // after(function(done) {
    //     mongoose.connection.db.dropDatabase(function() {
    //         mongoose.connection.close(done);
    //     });
    // });
});