// This script handles the contact form submission and notification system.
// It manages form submission, validation, and user feedback through notifications.

function showNotification(message, type = "success") {
  // Remove existing notification if any
  const existingNotification = document.querySelector(".notification");
  if (existingNotification) {
    existingNotification.remove();
  }

  // Create new notification
  const notification = document.createElement("div");
  notification.className = `notification ${type}`;
  notification.textContent = message;
  document.body.appendChild(notification);

  // Show notification
  setTimeout(() => notification.classList.add("show"), 100);

  // Remove notification after 5 seconds
  setTimeout(() => {
    notification.classList.remove("show");
    setTimeout(() => notification.remove(), 300);
  }, 5000);
}

const form = document.getElementById("contactForm");
const submitButton = form.querySelector('button[type="submit"]');

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Disable button and show spinner
  submitButton.classList.add("loading");
  submitButton.disabled = true;
  
  // Collect form data
  const formData = new FormData(form);
  const data = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    message: formData.get("message")
  };
  
  // Hit up the API
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        // Sending some headers to the server so it knows we're sending a JSON etc.
        "Content-Type": "application/json",
        "Accept": "application/json",
        "X-Requested-With": "XMLHttpRequest",
      },
      // The body is the data we collected from the form
      body: JSON.stringify(data)
    });

    // If the API returned a 200 OK response, show success message
    if (response.ok) {
      showNotification("Děkujeme za Vaši zprávu! Co nejdříve se ozveme.", "success");
      // Then the form resets
      form.reset();

      // If the API returned an error, show error message
    } else {
      showNotification("Omlouváme se, při odesílání zprávy došlo k chybě. Zkuste to prosím později.", "error");
    }
  } catch (error) {
    showNotification("Omlouváme se, při odesílání zprávy došlo k chybě. Zkuste to prosím později.", "error");
  } finally {
    // Re-enable button and hide the spinner
    submitButton.classList.remove("loading");
    submitButton.disabled = false;
  }
});