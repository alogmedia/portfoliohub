
document.addEventListener("DOMContentLoaded", function() {
            // Function to update active class on nav items
        function updateActiveNavItem() {
            // Get current URL hash (section in view)
            var currentHash = window.location.hash || "#forside"; // Default to "#forside" if hash is empty
    
            // Select all navigation links
            var navLinks = document.querySelectorAll('.navmenu ul li a');
    
            // Remove 'active' class from all nav items
            navLinks.forEach(function(link) {
                link.parentElement.classList.remove('active');
            });
    
            // Iterate through each link to find a match with the current hash
            navLinks.forEach(function(link) {
                if (link.getAttribute('href') === currentHash) {
                    // Add the 'active' class to the parent li of the matching link
                    link.parentElement.classList.add('active');
                }
            });
        }
    
        // Call updateActiveNavItem on load and hash change
        updateActiveNavItem();
        window.addEventListener("hashchange", updateActiveNavItem);

        function onLinkClick() {
            document.getElementsByTagName('portfolio')[3].scrollIntoView();
            // will scroll to 4th h3 element
          }
    });
    