const axios = require('axios');
const { expect } = require('chai');

    describe('Todo API', () => {
        it('should return a list of todos', async () => {
          try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
            expect(response.status).to.equal(200);
            expect(response.data).to.be.an('array'); 
            expect(response.headers.get('Content-Type')).to.equals('application/json; charset=utf-8');
          } catch (error) {
            throw new Error(`Failed to fetch todos: ${error.message}`);
          }
        });
      });