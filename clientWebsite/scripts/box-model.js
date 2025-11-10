 const box = document.getElementById('box');
        const paddingRange = document.getElementById('paddingRange');
        const marginRange = document.getElementById('marginRange');
        const borderRange = document.getElementById('borderRange');

        const paddingValue = document.getElementById('paddingValue');
        const marginValue = document.getElementById('marginValue');
        const borderValue = document.getElementById('borderValue');

        paddingRange.addEventListener('input', e => {
            const val = e.target.value + 'px';
            box.style.padding = val;
            paddingValue.textContent = val;
        });

        marginRange.addEventListener('input', e => {
            const val = e.target.value + 'px';
            box.style.margin = val;
            marginValue.textContent = val;
        });

        borderRange.addEventListener('input', e => {
            const val = e.target.value + 'px';
            box.style.borderWidth = val;
            borderValue.textContent = val;
        });