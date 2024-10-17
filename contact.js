document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();  // Prevent the form from submitting normally

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
      alert('Thank you, ' + name + '! Your message has been received.');
      // Here you can add AJAX request to send the form data to a server.
      document.getElementById('contact-form').reset();
  } else {
      alert('Please fill in all fields.');
  }
});
