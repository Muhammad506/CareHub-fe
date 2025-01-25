// utils/api.js

export const postApi = async (url:any, data:any) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      // Check if the response is ok (status 200-299)
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
  
      // Parse the response JSON data
      const result = await response.json();
      return result; // Return the result of the API call
    } catch (error) {
      console.error('API call error:', error);
      throw error; // Rethrow the error so that the caller can handle it
    }
  };
  