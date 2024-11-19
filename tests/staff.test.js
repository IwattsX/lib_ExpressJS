const request = require('supertest');
require('dotenv').config()
const app = require('../app'); // Assuming app.js exports your Express app

describe('Staffs API', () => {
  
  let staffID;

  // Test: Create a new book
  it('should create a new Staff', async () => {
    const res = await request(app)
      .post('/staffs')
      .send({
        ID : "12",
        name: 'Jane Doe',
      })
      .expect(201); // Expecting a 201 status code for resource creation

    // Save the book ID for further tests
    staffID = res.body._id;
    expect(res.body).toHaveProperty('_id');
    expect(res.body.name).toBe('Jane Doe');
  });

  // // Test: Get all Staffs
  it('should get all Staffs', async () => {
    const res = await request(app)
      .get('/staffs')
      .expect(200); // Expecting a 200 status code for successful retrieval

    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });

  // // Test: Get a specific book from endpoint
  it('should get a single staff by ID', async () => {
    const res = await request(app)
      .get(`/staffs`)
      .expect(200); // Expecting a 200 status code

    let staffToFind = undefined;
    for(let i = 0; i<res.body.length; i++){
      if(res.body[i]._id === staffID){
        staffToFind = res.body[i];
      }
    }
    expect(staffToFind.name).toBe('Jane Doe');
  });

  // // Test: Update a book
  it('should update a staff', async () => {
    const res = await request(app)
      .put(`/staffs/${staffID}`)
      .send({
        ID : "987",
        name: 'Jane Doe',
      })
      .expect(200); // Expecting a 200 status code for update

    expect(res.body.name).toBe('Jane Doe');
    expect(res.body.ID).toBe('987');
  });

  // // Test: Delete a book
  it('should delete a staff', async () => {
    const res = await request(app)
      .delete(`/staffs/${staffID}`)
      .expect(200); // Expecting a 200 status code for deletion

    
    expect(res.body.message).toBe(`Staff deleted successfully`);
  });
});
