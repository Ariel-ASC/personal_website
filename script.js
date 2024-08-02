document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('colorChangeButton');
    
    if (button) {
        button.addEventListener('click', function() {
            // Function to generate a random color
            function getRandomColor() {
                const letters = '0123456789ABCDEF';
                let color = '#';
                for (let i = 0; i < 6; i++) {
                    color += letters[Math.floor(Math.random() * 16)];
                }
                return color;
            }

            // Generate new random colors
            const newBackgroundColor = getRandomColor();
            const newHeadingColor = getRandomColor();
            const newHeaderColor = getRandomColor();
            const newFooterColor = getRandomColor();

            // Change the background color of the whole page
            document.body.style.backgroundColor = newBackgroundColor;

            // Change the color of all headings
            const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
            headings.forEach(heading => {
                heading.style.color = newHeadingColor;
            });

            // Change the background color of the header
            const header = document.querySelector('header');
            if (header) {
                header.style.backgroundColor = newHeaderColor;
            }

            // Change the color of the footer text
            const footerText = document.querySelector('footer p');
            if (footerText) {
                footerText.style.color = newFooterColor;
            }

            // Log the new colors
            console.log('Button clicked');
            console.log('New background color:', newBackgroundColor);
            console.log('New heading color:', newHeadingColor);
            console.log('New header color:', newHeaderColor);
            console.log('New footer color:', newFooterColor);
        });
    } else {
        console.error('Button with ID "colorChangeButton" not found.');
    }
});