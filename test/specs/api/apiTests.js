const axios = require('axios');
const { expect } = require('chai');

    describe('Todo API', async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        it('should return a list of todos', async () => {
          try {
            expect(response.status).to.equal(200);
            response.to.have.status(200);
            expect(response.data).to.be.an('array'); 
            expect(response.headers.get('Content-Type')).to.equals('application/json; charset=utf-8');
          } catch (error) {
            throw new Error(`Failed to fetch todos: ${error.message}`);
          }
        });
      });