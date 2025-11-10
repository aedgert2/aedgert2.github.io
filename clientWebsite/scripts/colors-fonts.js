// Live color picker
        const textColorInput = document.getElementById('textColor');
        const sampleText = document.getElementById('sampleText');

        textColorInput.addEventListener('input', e => {
            sampleText.style.color = e.target.value;
        });

        // Font selector
        const fontSelect = document.getElementById('fontSelect');
        const fontSample = document.getElementById('fontSample');

        fontSelect.addEventListener('change', e => {
            fontSample.style.fontFamily = e.target.value;
        });