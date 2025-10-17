// Update timestamp to show current time in milliseconds
function updateTimestamp() {
    const timestampEl = document.querySelector('[data-testid="test-user-time"]');
    if (timestampEl) {
        timestampEl.textContent = Date.now();
    }
}

// Initial timestamp update
updateTimestamp();

// Update timestamp every second
setInterval(updateTimestamp, 1000);

// Avatar functionality - allows changing avatar on click (bonus feature)
function initializeAvatar() {
    const avatarImg = document.querySelector('[data-testid="test-user-avatar"]');
    
    if (!avatarImg) return;
    
    // Make avatar interactive
    avatarImg.setAttribute('tabindex', '0');
    avatarImg.style.cursor = 'pointer';
    avatarImg.setAttribute('title', 'Click to change avatar');
    
    // Click handler - generates new random avatar
    avatarImg.addEventListener('click', () => {
        const newSeed = Math.random().toString(36).substring(7);
        avatarImg.src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${newSeed}&backgroundColor=b6e3f4`;
    });
    
    // Keyboard accessibility - allows Enter or Space to trigger click
    avatarImg.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            avatarImg.click();
        }
    });
}

// Initialize avatar functionality when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeAvatar);
} else {
    initializeAvatar();
} 