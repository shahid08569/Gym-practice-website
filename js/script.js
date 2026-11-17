function handleSubmit(event) {
    event.preventDefault(); // Prevent form submission
    const form = document.getElementById('registrationForm');
    if (form.checkValidity()) {
      // Close Registration Modal
      const registerModal = bootstrap.Modal.getInstance(document.getElementById('registerModal'));
      registerModal.hide();

      // Show Success Modal
      const successModal = new bootstrap.Modal(document.getElementById('successModal'));
      successModal.show();
    }
  }