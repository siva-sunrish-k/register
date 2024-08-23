


    function validateForm() {
        // Prevent form from submitting automatically
        event.preventDefault();

        // Get form elements
        const firstname = document.getElementById('firstname').value;
        const lastname = document.getElementById('lastname').value;
        const age = document.getElementById('age').value;
        const email = document.getElementById('email').value;
        const address = document.getElementById('address').value;
        const city = document.getElementById('city').value;

        // Clear any previous error messages
        let valid = true;

        // Validate First Name
        if (firstname.trim() === "") {
            alert("First Name is required.");
            valid = false;
        }

        // Validate Last Name
        if (lastname.trim() === "") {
            alert("Last Name is required.");
            valid = false;
        }

        // Validate Age
        if (age.trim() === "" || isNaN(age) || age <= 0) {
            alert("Please enter a valid Age.");
            valid = false;
        }

        // Validate Email
        if (email.trim() === "" || !validateEmail(email)) {
            alert("Please enter a valid Email address.");
            valid = false;
        }

        // Validate Address (optional field, but can be validated if needed)
        // Example: Check if length is less than 5 characters
        if (address.trim().length > 0 && address.trim().length < 5) {
            alert("Address should be at least 5 characters long.");
            valid = false;
        }

        // Validate City (optional field, but can be validated if needed)
        // Example: Check if length is less than 2 characters
        if (city.trim().length > 0 && city.trim().length < 2) {
            alert("City should be at least 2 characters long.");
            valid = false;
        }

        // If all validations pass, show success alert
        if (valid) {
            alert("Registration successful!");
            registerSuccess();
        }
    }

    // Helper function to validate email format
    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    // Dummy function for registration success (you can replace this with actual logic)
    function registerSuccess() {
        // Logic for handling successful registration (e.g., redirect, submit data)
        console.log("Registration logic goes here.");
    }


