// constants/mockResponseTemplates.js
const responseTemplates = {
  GET: {
    list: {
      description: 'Fetch a list of items (e.g., products, users)',
      response: {
        status: 200,
        data: [
          { id: 1, name: 'Product 1', price: 100 },
          { id: 2, name: 'Product 2', price: 200 },
          { id: 3, name: 'Product 3', price: 300 },
        ],
        pagination: {
          page: 1,
          limit: 10,
          totalItems: 3,
          totalPages: 1,
        },
      },
    },
    details: {
      description: 'Fetch details of a single item',
      response: {
        status: 200,
        data: {
          id: 1,
          name: 'Product 1',
          price: 100,
          description: 'This is a detailed description of Product 1.',
          createdAt: '2023-01-01T00:00:00.000Z',
          updatedAt: '2023-01-01T00:00:00.000Z',
        },
      },
    },
  },
  POST: {
    auth: {
      description: 'Authentication response with a JWT token',
      response: {
        status: 200,
        data: {
          token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
          user: {
            id: 1,
            username: 'testuser',
            email: 'testuser@example.com',
          },
        },
      },
    },
    create: {
      description: 'Create a new item',
      response: {
        status: 201,
        data: {
          id: 4,
          name: 'New Product',
          price: 400,
          message: 'Item created successfully',
        },
      },
    },
  },
  PUT: {
    update: {
      description: 'Update an existing item',
      response: {
        status: 200,
        data: {
          id: 1,
          name: 'Updated Product',
          price: 150,
          message: 'Item updated successfully',
        },
      },
    },
  },
  DELETE: {
    delete: {
      description: 'Delete an item',
      response: {
        status: 200,
        data: {
          id: 1,
          message: 'Item deleted successfully',
        },
      },
    },
  },
};
export default responseTemplates;