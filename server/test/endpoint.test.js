const chai = require('chai');
const chaiHttp = require('chai-http');
const fs = require('fs');
const app = require('../index'); // Replace with the actual app file
const { describe } = require('mocha');
chai.use(chaiHttp);
const assert = chai.assert;
const expect = chai.expect;

// describe('/signup/auth', () => {
  
//   it('should return status 200 and accepted status when signup is successful', (done) => {
//     chai.request(app)
//       .post('/signup/auth')
//       .send({
//         username: 'testuser',
//         password: 'testpassword',
//         fullname: 'Test User',
//         birthday: '1990-01-01',
//         email: 'test@example.com',
//         phoneNum: '1234567890'
//       })
//       .end((err, res) => {
//         expect(res).to.have.status(200);
//         expect(res.body).to.deep.equal({
//           status: 'accepted',
//           field: {}
//         });
//         done();
//       });
//   });

//   it('should return status 404 and denied status with fields marked as same for duplicate user', (done) => {
//     chai.request(app)
//       .post('/signup/auth')
//       .send({
//         username: 'ducanh',
//         password: 'testpassword',
//         fullname: 'Existing User',
//         birthday: '1990-01-01',
//         email: 'ducanhmc24@gmail.com',
//         phoneNum: '0359314079'
//       })
//       .end((err, res) => {
//         expect(res).to.have.status(404);
//         expect(res.body).to.deep.equal({
//           status: 'denied',
//           field: {
//             username: 'same',
//             email: 'same',
//             phoneNum: 'same'
//           }
//         });
//         done();
//       });
//   });

// });


describe('POST /login/auth', () => {
  it('should return status 200 and "accepted" if valid credentials are provided', (done) => {
    chai.request(app)
      .post('/login/auth')
      .send({ username: 'ducanh', password: '1' })
      .end((err, res) => {
        assert.equal(res.status, 200);
        assert.equal(res.body.status, 'accepted');
        done();
      });
  });

  it('should return status 404 and "username" field error if username does not exist', (done) => {
    chai.request(app)
      .post('/login/auth')
      .send({ username: 'invalidUsername', password: '1' })
      .end((err, res) => {
        assert.equal(res.status, 404);
        assert.equal(res.body.field[0].name, 'username');
        assert.equal(res.body.field[0].msg, 'mis');
        done();
      });
  });

  it('should return status 404 and "password" field error if incorrect password is provided', (done) => {
    chai.request(app)
      .post('/login/auth')
      .send({ username: 'ducanh', password: '123' })
      .end((err, res) => {
        assert.equal(res.status, 404);
        assert.equal(res.body.field[0].name, 'password');
        assert.equal(res.body.field[0].msg, 'wrong');
        done();
      });
  });
});

describe("Profile", () => {

  describe('GET /profile/:userid', () => {
    it('should return user info if userid exists', (done) => {
      chai.request(app)
        .get('/profile/1') // Replace '1' with an existing userid in your database
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.status).to.equal('accepted');
          expect(res.body.field).to.be.an('object');
          // Assert other properties of the response body as needed
          done();
        });
    });

    it('should return 404 if userid does not exist', (done) => {
      chai.request(app)
        .get('/profile/999') // Replace '999' with a non-existing userid in your database
        .end((err, res) => {
          expect(res).to.have.status(404);
          expect(res.body.status).to.equal('denied');
          expect(res.body.field).to.be.an('object');
          // Assert other properties of the response body as needed
          done();
        });
    });
  });  

  describe('POST /profile/:userid/update', () => {
    it('should update user profile and return status "accepted"', (done) => {
      const requestBody = {
        fullname: 'John Doe',
        birthday: '1990-01-01',
        email: 'johndoe@example.com',
        phoneNum: '1234567890',
        address: '123 Main St',
        avatar: 'avatar-url'
      };
  
      chai.request(app)
        .post('/profile/1/update') // Replace '1' with an existing userid in your database
        .send(requestBody)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.status).to.equal('accepted');
          // Assert other properties of the response body as needed
          done();
        });
    });
  
    it('should return status "denied" and 404 if userid does not exist', (done) => {
      const requestBody = {
        fullname: 'John Doe',
        birthday: '1990-01-01',
        email: 'johndoe@example.com',
        phoneNum: '1234567890',
        address: '123 Main St',
        avatar: 'avatar-url'
      };
  
      chai.request(app)
        .post('/profile/999/update') // Replace '999' with a non-existing userid in your database
        .send(requestBody)
        .end((err, res) => {
          expect(res).to.have.status(404);
          expect(res.body.status).to.equal('denied');
          // Assert other properties of the response body as needed
          done();
        });
    });
  });

});

