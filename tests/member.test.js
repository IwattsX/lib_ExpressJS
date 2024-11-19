const request = require('supertest');
require('dotenv').config()
const app = require('../app'); // Assuming app.js exports your Express app

describe('Members API', () => {
  
  let memberID;

  // Test: Create a new book
  it('should create a new member', async () => {
    const res = await request(app)
      .post('/members')
      .send({
        ID : "12",
        name: 'Jane Doe',
      })
      .expect(201); // Expecting a 201 status code for resource creation

    // Save the book ID for further tests
    memberID = res.body._id;
    expect(res.body).toHaveProperty('_id');
    expect(res.body.name).toBe('Jane Doe');
  });

  // // Test: Get all members
  it('should get all members', async () => {
    const res = await request(app)
      .get('/members')
      .expect(200); // Expecting a 200 status code for successful retrieval

    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });

  // // Test: Get a specific book from endpoint
  it('should get a single member by ID', async () => {
    const res = await request(app)
      .get(`/members`)
      .expect(200); // Expecting a 200 status code

    let memberToFind = undefined;
    for(let i = 0; i<res.body.length; i++){
      if(res.body[i]._id === memberID){
        memberToFind = res.body[i];
      }
    }
    expect(memberToFind.name).toBe('Jane Doe');
  });

  // // Test: Update a book
  it('should update a member', async () => {
    const res = await request(app)
      .put(`/members/${memberID}`)
      .send({
        ID : "987",
        name: 'Jane Doe',
      })
      .expect(200); // Expecting a 200 status code for update

    expect(res.body.name).toBe('Jane Doe');
    expect(res.body.ID).toBe('987');
  });

  // // Test: Delete a book
  it('should delete a member', async () => {
    const res = await request(app)
      .delete(`/members/${memberID}`)
      .expect(200); // Expecting a 200 status code for deletion

    
    expect(res.body.message).toBe(`Member deleted successfully`);
  });
});
