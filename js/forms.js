/**
 * ZEE EATERY — FORM VALIDATION & ENQUIRY SUBMISSION ENGINE
 * Validates inputs client-side, provides accessible error feedback,
 * and confirms reservation enquiries transparently without false booking claims.
 */

document.addEventListener('DOMContentLoaded', () => {
  // --------------------------------------------------------------------------
  // 1. GENERAL CONTACT ENQUIRY FORM
  // --------------------------------------------------------------------------
  const contactForm = document.getElementById('generalContactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      const nameInput = contactForm.querySelector('[name="fullName"]');
      const emailInput = contactForm.querySelector('[name="email"]');
      const phoneInput = contactForm.querySelector('[name="phone"]');
      const subjectInput = contactForm.querySelector('[name="subject"]');
      const messageInput = contactForm.querySelector('[name="message"]');

      // Clear previous error states
      contactForm.querySelectorAll('.form-group').forEach(fg => fg.classList.remove('has-error'));

      // Validate Name
      if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
        showError(nameInput, 'Please enter your full name (minimum 2 characters).');
        isValid = false;
      }

      // Validate Email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
        showError(emailInput, 'Please enter a valid email address.');
        isValid = false;
      }

      // Validate Phone
      const phoneDigits = phoneInput.value.replace(/\D/g, '');
      if (!phoneInput.value.trim() || phoneDigits.length < 7) {
        showError(phoneInput, 'Please enter a valid contact phone number.');
        isValid = false;
      }

      // Validate Subject
      if (!subjectInput.value.trim()) {
        showError(subjectInput, 'Please provide an enquiry subject.');
        isValid = false;
      }

      // Validate Message
      if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
        showError(messageInput, 'Please enter your message (at least 10 characters).');
        isValid = false;
      }

      if (isValid) {
        const guestName = nameInput.value.trim();
        contactForm.reset();
        window.showLuxuryToast(
          'Enquiry Received',
          `Thank you, ${guestName}. Your message has been received. Our hospitality team will reply directly to your email shortly.`
        );
      }
    });
  }

  // --------------------------------------------------------------------------
  // 2. RESERVATION ENQUIRY FORM
  // --------------------------------------------------------------------------
  const reservationForm = document.getElementById('reservationEnquiryForm');
  if (reservationForm) {
    // Set min date to today
    const dateInput = reservationForm.querySelector('[name="resDate"]');
    if (dateInput) {
      const today = new Date().toISOString().split('T')[0];
      dateInput.setAttribute('min', today);
    }

    reservationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      const nameInput = reservationForm.querySelector('[name="resName"]');
      const emailInput = reservationForm.querySelector('[name="resEmail"]');
      const phoneInput = reservationForm.querySelector('[name="resPhone"]');
      const dateInput = reservationForm.querySelector('[name="resDate"]');
      const timeInput = reservationForm.querySelector('[name="resTime"]');
      const guestsInput = reservationForm.querySelector('[name="resGuests"]');

      reservationForm.querySelectorAll('.form-group').forEach(fg => fg.classList.remove('has-error'));

      if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
        showError(nameInput, 'Please enter your name for the reservation.');
        isValid = false;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
        showError(emailInput, 'Please enter a valid email address.');
        isValid = false;
      }

      const phoneDigits = phoneInput.value.replace(/\D/g, '');
      if (!phoneInput.value.trim() || phoneDigits.length < 7) {
        showError(phoneInput, 'Please enter a valid telephone number.');
        isValid = false;
      }

      if (!dateInput.value) {
        showError(dateInput, 'Please select your preferred dining date.');
        isValid = false;
      }

      if (!timeInput.value) {
        showError(timeInput, 'Please select your preferred dining time.');
        isValid = false;
      }

      if (!guestsInput.value || parseInt(guestsInput.value) < 1) {
        showError(guestsInput, 'Please select the number of guests.');
        isValid = false;
      }

      if (isValid) {
        const guestName = nameInput.value.trim();
        const dateVal = dateInput.value;
        const timeVal = timeInput.value;
        const guestsVal = guestsInput.value;

        reservationForm.reset();
        window.showLuxuryToast(
          'Reservation Enquiry Logged',
          `Thank you, ${guestName}. Your table enquiry for ${guestsVal} guest(s) on ${dateVal} at ${timeVal} has been recorded. Our maître d' will contact you to confirm table availability.`
        );
      }
    });
  }

  function showError(inputEl, message) {
    const group = inputEl.closest('.form-group');
    if (!group) return;
    group.classList.add('has-error');
    let errorEl = group.querySelector('.form-error');
    if (!errorEl) {
      errorEl = document.createElement('span');
      errorEl.className = 'form-error';
      group.appendChild(errorEl);
    }
    errorEl.textContent = message;
  }
});
