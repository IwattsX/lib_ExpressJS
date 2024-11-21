const request = require('supertest');
require('dotenv').config()
const app = require('../app'); // Assuming app.js exports your Express app
const mongoose = require('mongoose');
const connectDB = require('../config/db');

describe('Books API', () => {

  beforeAll(() => {
    connectDB();
  });
  
  afterAll(() => {
    mongoose.disconnect();
  });

  
  
  let bookId;

  // Test: Create a new book
  it('should create a new book', async () => {
    const res = await request(app)
      .post('/books')
      .send({
        ISBN : "100203",
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        genre: 'fiction',
        is_checked_out: true,
      })
      .expect(201); // Expecting a 201 status code for resource creation

    // Save the book ID for further tests
    bookId = res.body._id;
    expect(res.body).toHaveProperty('_id');
    expect(res.body.title).toBe('The Great Gatsby');
  });

  // // Test: Get all books
  it('should get all books', async () => {
    const res = await request(app)
      .get('/books')
      .expect(200); // Expecting a 200 status code for successful retrieval

    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });

  // // Test: Get a specific book from endpoint
  it('should get a single book by ID', async () => {
    const res = await request(app)
      .get(`/books`)
      .expect(200); // Expecting a 200 status code

    let bookToFind = undefined;
    for(let i = 0; i<res.body.length; i++){
      if(res.body[i]._id === bookId){
        bookToFind = res.body[i];
      }
    }
    // console.log(res.body)
    // expect(res.body).toHaveProperty('_id', bookId);
    expect(bookToFind.title).toBe('The Great Gatsby');
    // expect(res.body.title).toBe('The Great Gatsby');
  });

  // // Test: Update a book
  it('should update a book', async () => {
    const res = await request(app)
      .put(`/books/${bookId}`)
      .send({
        ISBN : "100203",
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        genre: 'fiction',
        is_checked_out: false,
      })
      .expect(200); // Expecting a 200 status code for update

    expect(res.body.title).toBe('The Great Gatsby');
    expect(res.body.is_checked_out).toBe(false);
  });

  // // Test: Delete a book
  it('should delete a book', async () => {
    const res = await request(app)
      .delete(`/books/${bookId}`)
      .expect(200); // Expecting a 200 status code for deletion

    
    expect(res.body.message).toBe(`Book deleted successfully with id = ${bookId} and ISBN = 100203 and title = The Great Gatsby`);
  });
});