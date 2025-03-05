// pages/api/[endpoint].js
export default function handler(req, res) {
  const { endpoint, method, scenario } = req.query;

  let response;

  switch (scenario) {
    case 'auth':
      response = {
        endpoint,
        method,
        scenario: 'Authentication',
        token: 'mock-jwt-token',
        user: { id: 1, username: 'testuser' },
        message: 'Authentication successful',
      };
      break;

    case 'list':
      response = {
        endpoint,
        method,
        scenario: 'Fetch List',
        data: [
          { id: 1, name: 'Item 1' },
          { id: 2, name: 'Item 2' },
          { id: 3, name: 'Item 3' },
        ],
        message: 'List fetched successfully',
      };
      break;

    case 'details':
      response = {
        endpoint,
        method,
        scenario: 'Fetch Details',
        data: { id: 1, name: 'Item 1', description: 'This is a detailed description of Item 1' },
        message: 'Details fetched successfully',
      };
      break;

    default:
      response = {
        endpoint,
        method,
        scenario: 'None',
        message: 'This is a generic mock API response',
      };
      break;
  }

  // Simulate a delay to mimic real API behavior
  const delay = parseInt(req.query.delay) || 0;

  return new Promise((resolve) => {
    setTimeout(() => {
      res.status(200).json(response);
      resolve();
    }, delay);
  });
}