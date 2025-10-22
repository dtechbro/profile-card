(function () {
  // Cached DOM nodes
  const form = document.getElementById('contact-form');
  const nameInput = document.querySelector('[data-testid="test-contact-name"]');
  const emailInput = document.querySelector('[data-testid="test-contact-email"]');
  const subjectInput = document.querySelector('[data-testid="test-contact-subject"]');
  const messageInput = document.querySelector('[data-testid="test-contact-message"]');
  const submitBtn = document.querySelector('[data-testid="test-contact-submit"]');
  const successBox = document.querySelector('[data-testid="test-contact-success"]');

  const errors = {
    name: document.getElementById('test-contact-error-name'),
    email: document.getElementById('test-contact-error-email'),
    subject: document.getElementById('test-contact-error-subject'),
    message: document.getElementById('test-contact-error-message'),
  };

  // Validation helpers
  function isEmpty(value) {
    return !value || !value.trim();
  }

  // Basic, sensible email regex (not perfect but fits typical validation)
  function isValidEmail(email) {
    // This checks: something@something.something (reasonable)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function showError(fieldName, message) {
    const el = errors[fieldName];
    if (!el) return;
    el.textContent = message;
    el.style.display = 'block';
    // attach aria-describedby to the related input
    const input = getInputForField(fieldName);
    if (input) {
      input.setAttribute('aria-describedby', el.id);
      input.setAttribute('aria-invalid', 'true');
    }
  }

  function clearError(fieldName) {
    const el = errors[fieldName];
    if (!el) return;
    el.textContent = '';
    el.style.display = 'none';
    const input = getInputForField(fieldName);
    if (input) {
      input.removeAttribute('aria-describedby');
      input.removeAttribute('aria-invalid');
    }
  }

  function clearAllErrors() {
    Object.keys(errors).forEach(clearError);
  }

  function getInputForField(fieldName) {
    switch (fieldName) {
      case 'name': return nameInput;
      case 'email': return emailInput;
      case 'subject': return subjectInput;
      case 'message': return messageInput;
      default: return null;
    }
  }

  function validateField(fieldName) {
    const val = (getInputForField(fieldName).value || '').trim();
    clearError(fieldName);

    if (isEmpty(val)) {
      showError(fieldName, 'This field is required.');
      return false;
    }

    if (fieldName === 'email' && !isValidEmail(val)) {
      showError(fieldName, 'Please enter a valid email address (e.g. name@example.com).');
      return false;
    }

    if (fieldName === 'message' && val.length < 10) {
      showError(fieldName, 'Message must be at least 10 characters.');
      return false;
    }

    return true;
  }

  function validateAll() {
    let ok = true;
    ['name', 'email', 'subject', 'message'].forEach(field => {
      const fieldOk = validateField(field);
      if (!fieldOk) ok = false;
    });
    return ok;
  }

  // Live validation: validate on input/blur
  [['input', 'name'], ['input', 'email'], ['input', 'subject'], ['input', 'message']].forEach(
    ([evt, field]) => {
      const input = getInputForField(field);
      input.addEventListener(evt, () => {
        // only show error after user has typed or blurred once
        validateField(field);
      });
      input.addEventListener('blur', () => validateField(field));
    }
  );

  // Form submit
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    clearAllErrors();
    successBox.hidden = true;
    successBox.style.display = 'none';

    const valid = validateAll();

    if (!valid) {
      // Focus the first invalid field for keyboard users
      const firstInvalid = form.querySelector('[aria-invalid="true"]');
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    // Simulate "send" — here you would call fetch() to your backend API
    // For this example we'll just show the success confirmation.
    // Keep submit button disabled briefly to prevent double submits
    submitBtn.disabled = true;

    // Simulate async operation with setTimeout (instant UX here)
    setTimeout(() => {
      // clear form
      form.reset();
      clearAllErrors();

      // show success message and move keyboard focus to it
      successBox.hidden = false;
      successBox.style.display = 'block';
      successBox.focus();

      // re-enable button
      submitBtn.disabled = false;
    }, 250);
  });

  // Accessibility: allow "Escape" to clear success message while focused
  successBox.addEventListener('keydown', (ev) => {
    if (ev.key === 'Escape') {
      successBox.hidden = true;
      successBox.style.display = 'none';
    }
  });

  // On page load ensure error elements are hidden and inputs have required attributes for AT
  (function init() {
    Object.keys(errors).forEach(k => {
      const el = errors[k];
      el.style.display = 'none';
    });
    // Add aria-required attributes already set in markup, ensure tabindex for success box handled
  })();

})();
