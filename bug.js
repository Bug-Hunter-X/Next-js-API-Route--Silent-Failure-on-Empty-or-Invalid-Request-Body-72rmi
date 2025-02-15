```javascript
// pages/api/hello.js
export default function handler(req, res) {
  // Check if the request method is POST
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    // Accessing req.body here will cause an error
    // if req.body is empty, or not properly parsed
    console.log(req.body);
    res.status(200).json({ message: 'Success' });
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
```