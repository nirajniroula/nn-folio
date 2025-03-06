// pages/api/[endpoint].js

import { responseTemplates } from "../tools/utils/mockResponseTemplates";

export default function handler(req, res) {
  const { endpoint, method, scenario } = req.query;
  const template = responseTemplates[method]?.[scenario];
  
  // Build response
  let response;
  if (template) {
    response = {
      method,
      ...template.response,
    };
  } else {
    response = {
      method,
      scenario: 'None',
      message: 'No template selected. This is a generic response.',
    };
  }

  // Simulate delay
  const delay = parseInt(req.query.delay) || 0;

  return new Promise((resolve) => {
    setTimeout(() => {
      res.status(response.status || 200).json(response); // Always return JSON
      resolve();
    }, delay);
  });
}