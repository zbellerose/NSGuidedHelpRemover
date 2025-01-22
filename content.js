
const interval = setInterval(function() {
    const elements = document.querySelectorAll(".ogl-rw-convergence-launcher.left, .ogl-rw-convergence-launcher.right, .ogl-rw-convergence-launcher");
    if (elements.length > 0) {
        elements.forEach(function(element) {
            element.remove();
            console.log('NetSuite Guide Remover: Element removed:', element);
        });
        clearInterval(interval);
    }
}, 500);
