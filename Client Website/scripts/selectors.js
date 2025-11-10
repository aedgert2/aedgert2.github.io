// Toggle hidden class
        const hiddenStyle = document.createElement('style');
        hiddenStyle.innerHTML = '.hidden { display: none; }';
        document.head.appendChild(hiddenStyle);

        // Quiz feedback function
        function checkAnswer(button, correct) {
            const feedback = document.getElementById('quizFeedback');
            if(correct){
                feedback.textContent = "✅ Correct!";
                feedback.style.color = "var(--color-green)";
            } else {
                feedback.textContent = "❌ Try again!";
                feedback.style.color = "red";
            }
        }