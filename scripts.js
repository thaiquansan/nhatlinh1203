function switchMedia(button) {
    const mediaContainer = button.parentElement;
    const mediaElements = mediaContainer.querySelectorAll('.product-media');
    let currentIndex = 0;
    
    // Find the currently visible media
    for (let i = 0; i < mediaElements.length; i++) {
        if (mediaElements[i].style.display !== 'none') {
            currentIndex = i;
            break;
        }
    }
    
    // Hide the currently visible media
    mediaElements[currentIndex].style.display = 'none';
    
    // Show the next media in the sequence
    const nextIndex = (currentIndex + 1) % mediaElements.length;
    mediaElements[nextIndex].style.display = 'block';
}
