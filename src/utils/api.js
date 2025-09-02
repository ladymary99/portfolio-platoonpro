// API utility functions for backend communication

const API_BASE_URL = "/api"; // This will be proxied to http://localhost:4000/api by Vite

/**
 * Submit contact form data to the backend
 * @param {Object} contactData - Object containing name, email, and message
 * @returns {Promise<Object>} Response from the backend
 */
export async function submitContactForm(contactData) {
  try {
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to submit contact form");
    }

    return await response.json();
  } catch (error) {
    console.error("Contact form submission error:", error);
    throw error;
  }
}

/**
 * Submit subscription email to the backend
 * @param {string} email - Email address to subscribe
 * @returns {Promise<Object>} Response from the backend
 */
export async function submitSubscription(email) {
  try {
    const response = await fetch(`${API_BASE_URL}/subscribe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to subscribe");
    }

    return await response.json();
  } catch (error) {
    console.error("Subscription error:", error);
    throw error;
  }
}
