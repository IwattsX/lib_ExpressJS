const request = require('supertest');
require('dotenv').config()
const app = require('../app'); // Assuming app.js exports your Express app

describe('Books API', () => {
  
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
      .get(`/books/${bookId}`)
      .expect(200); // Expecting a 200 status code

    expect(res.body).toHaveProperty('_id', bookId);
    expect(res.body.title).toBe('The Great Gatsby');
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

    expect(res.body.title).toBe('The Great Gatsby (Updated)');
    expect(res.body.year).toBe(1926);
  });

  // // Test: Delete a book
  it('should delete a book', async () => {
    const res = await request(app)
      .delete(`/books/${bookId}`)
      .expect(200); // Expecting a 200 status code for deletion

    expect(res.body).toHaveProperty('_id', bookId);
    expect(res.body.title).toBe('The Great Gatsby (Updated)');
  });
});
