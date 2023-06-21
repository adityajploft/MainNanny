import axios from 'axios';

const axiosInstance = axios.create({
  
  baseURL: '', // Set the base URL for all requests
  // timeout: 5000, // Set the timeout for requests (in milliseconds)
  headers: {
    'Content-Type': 'application/json', // Set common headers for all requests
    // You can also set authentication headers or other custom headers here
  }
});
