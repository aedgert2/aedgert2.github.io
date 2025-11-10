const flexContainer = document.getElementById('flexContainer');
        const justifySelect = document.getElementById('justifySelect');
        const alignSelect = document.getElementById('alignSelect');

        justifySelect.addEventListener('change', e => {
            flexContainer.style.justifyContent = e.target.value;
        });

        alignSelect.addEventListener('change', e => {
            flexContainer.style.alignItems = e.target.value;
        });