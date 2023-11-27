
 

 document.addEventListener("DOMContentLoaded", function () {
        const buttons = document.querySelectorAll('.buttons button');
        const tabs = document.querySelectorAll('.tabs .tab');

        // Hide all tabs initially
        tabs.forEach(tab => tab.style.display = 'none');

        buttons.forEach((button, index) => {
            button.addEventListener('click', () => {
                // Remove the 'active' class from all buttons
                buttons.forEach(btn => btn.classList.remove('active'));

                // Add the 'active' class to the clicked button
                button.classList.add('active');
``
                // Hide all tabs again
                tabs.forEach(tab => tab.style.display = 'none');

                // Show the clicked tab
                tabs[index].style.display = 'block';
            });

            // Add a mouseover event listener to add 'hover' class
            button.addEventListener('mouseover', () => {
                button.classList.add('hover');
            });

            // Add a mouseout event listener to remove 'hover' class
            button.addEventListener('mouseout', () => {
                // Check if the button is not active
                if (!button.classList.contains('active')) {
                    button.classList.remove('hover');
                }
            });
        });
    });