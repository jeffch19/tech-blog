// public/signin.js

document.addEventListener('DOMContentLoaded', () => {
  const signinForm = document.getElementById('signinForm');

  // Define the signin function
  const signin = async () => {
    // Get the values from the form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
      // Send a POST request to your server with the signin data
      const response = await fetch('/api/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Redirect to the dashboard page after successful signin
        document.location.replace('/dashboard');
      } else {
        // Handle errors, e.g., display an error message
        console.error('Error during signin:', response.statusText);
      }
    } catch (error) {
      console.error('Error during signin:', error);
    }
  };

  // Attach the signin function to the button click event
  const signinButton = document.querySelector('button[type="button"]');
  signinButton.addEventListener('click', signin);
});
