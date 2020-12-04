const request = require('supertest');

const app = require('../app');

//Fill this with many many tests YAY!! 😜😩


//Test '/facsters' endpiont
test('route "/facsters" which give me an array of all the facsters',(done)=>{
    request(app)
    .get('/facsters')
    .expect(200)
    .expect("Content-Type", /json/)
    .end((err,res)=>{
        if(err) return done(err)
        expect(res.body[0]).toEqual( { 
            id: 1, 
            firstname: 'Abdullah', 
            surname: 'Chaudry', 
            cohort: 11 
            })
        done()
    })
} )


//Test '/facsters/:name' endpiont
test('route /facsters/:name which give me the facster by their name ',(done)=>{
    request(app)
    .get('/facsters/Abdullah')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err,res)=>{
        if(err) return done(err)
        expect(res.body).toEqual({
            id: 1,
            firstname: "Abdullah",
            surname:'Chaudry',
            cohort:11
        })
        done()
    })
})


//Test '/facster/new' endpiont
test('route "/facter/new" which add new facster to data file',(done)=>{
      const newFacster = {
        firstname:'Sally',
        surname:'Sami',
        cohort:30
    }
    
    request(app)
    .post('/facster/new')
    .send(newFacster)
    .expect(201)
    .expect('Content-Type', /json/)
    .end((err,res)=>{
        if (err) return done(err)
        expect(res.body.firstname).toBe('Sally')
        done()
   
    })
})


//Test '/facsters/:name/hobby' endpiont
test("Find a facsters' hobbies", (done) => {
  request(app)
    .get(`/facsters/Amelie/hobby`)
    .expect(200)
    .expect("Content-Type", /json/)
    .end((err, res) => {
      if (err) return done(err);
      expect(res.body.hobby).toBe("baking french breads");
      done();
    });
});

//Test '/facsters/:name/superpower' endpiont
test("Returns a given facster's superpower", (done) => {
  request(app)
    .get(`/facsters/Amelie/superpower`)
    .expect(200)
    .expect("Content-Type", /json/)
    .end((err, res) => {
      if (err) return done(err);
      expect(res.body.superpower).toBe("this variable afficionado");
      done();
    });
})

