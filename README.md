# Library Express.js:
An express.js app that uses mongoDB to create a books, members, and staffs table. It uses mongoose for the database and Node.js as well. 

# installation
prereqs: 
**nvm**: Useful for using the latest latest node.js versions found here https://github.com/nvm-sh/nvm 

1) Switch to the latest node.js and NPM versions or just download the latest version from node.js
```
nvm use 
```
**Version INFO**: Versions as of now (output): 
Found '~/.nvmrc' with version <lts/jod>
Now using node v22.11.0 (npm v10.9.0)

2) Install dependencies
```
npm install
```
3) copy the .env_example as .env for the dotenv req
```
cp .env_example .env
```

# How to use

**Running:**
- Run the server: 
```
npm run server 
```

**Testing:**
```
npm test
```

# Using curl to test the endpoints
This all will update the DB. You can visualize it using mongosh

- members
1) POST 
```
curl -X POST http://localhost:5000/members \
-H "Content-Type: application/json" \
-d '{"ID":"1", "name":"Joe Doe"}'
```

2) PUT
```
curl -X PUT http://localhost:5000/members/<_id> \
-H "Content-Type: application/json" \
-d '{"ID":"1", "name":"Jane Doe"}'
```

3) GET
```
curl -X GET http://localhost:5000/members
```

4) DELETE
```
curl -X DELETE http://localhost:5000/members/<_id>
```
<hr>

- staffs
1) POST
```
curl -X POST http://localhost:5000/staffs \
-H "Content-Type: application/json" \
-d '{"ID":"1", "name":"Joe Doe"}'
```

2) PUT
```
curl -X PUT http://localhost:5000/staffs/<_id> \
-H "Content-Type: application/json" \
-d '{"ID":"1", "name":"Jane Doe"}'
```

3) GET
```
curl -X GET http://localhost:5000/staffs
```

4) DELETE
```
curl -X DELETE http://localhost:5000/staffs/<_id>
```


<hr>

- books
1) POST
```
curl -X POST http://localhost:5000/books -H "Content-Type: application/json" -d '{"ISBN" : "111222333", "author" : "George Orwell", "title" : "1984", "is_checked_out" : false, "genre" : "fiction"}'
```

2) PUT
```
curl -X PUT http://localhost:5000/books/<_id> \
-H "Content-Type: application/json" \
-d '{"ISBN" : "111222333", "author" : "George Orwell", "title" : "1984", "is_checked_out" : true, "genre" : "fiction"}'
```

3) GET
```
curl -X GET http://localhost:5000/books
```

4) DELETE
```
curl -X DELETE http://localhost:5000/books/<_id>
```

<hr>

**NOTE**: You can get <_id> either from mongosh or using the GET request
Ex:
```
$ curl -X GET http://localhost:5000/books
```
ouputs:
[{"_id":<b>"673ccdce17add2901dfb62c0"</b>,"ISBN":"111222333","title":"1984","author":"George Orwell","genre":"fiction","is_checked_out":false,"__v":0}]

**NOTE**: 
- CRUD corresponds to each of the request types IE (create, read, update, delete) => (POST, GET, PUT, DELETE)

status codes:
- 201 for creation
- 200 good request
- 500 internal server issues