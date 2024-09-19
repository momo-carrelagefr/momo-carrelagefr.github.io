document.addEventListener('DOMContentLoaded', function() {
    const captchaImage = document.getElementById('captcha-image');
    const refreshButton = document.getElementById('refresh-captcha');
    const captchaInput = document.getElementById('captcha-input');

    // Refresh CAPTCHA when the button is clicked
    refreshButton.addEventListener('click', function() {
        captchaImage.src = 'captcha.php?' + new Date().getTime(); // Ajouter un paramètre unique pour éviter le cache
        captchaInput.value = ''; // Clear the input field
    });

    // Verify CAPTCHA on form submission
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        const captchaValue = captchaInput.value.trim();
        const captchaSession = '<?php echo $_SESSION['captcha']; ?>'; // Assure-toi que cette ligne est dans un fichier PHP
        if (captchaValue !== captchaSession) {
            alert('Le texte CAPTCHA est incorrect. Veuillez réessayer.');
            event.preventDefault(); // Prevent form submission
        }
    });
});
