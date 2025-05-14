document.addEventListener('DOMContentLoaded', function() {
    const securityForm = document.getElementById('security-form');
    const welcomeMessage = document.getElementById('welcome-message');
    const grievanceForm = document.getElementById('grievance-form');
    const thankYouSection = document.getElementById('thank-you');
    const proceedBtn = document.getElementById('proceed-btn');
    const complaintForm = document.getElementById('complaint-form');
    const sorryAudio = document.getElementById('sorry-audio');
    const archyImage = document.getElementById('archy-image');
    
    // Set random Archy photo
    setRandomArchyPhoto();
    
    // Function to randomly select an Archy photo
    function setRandomArchyPhoto() {
        const archyPhotos = [
            'photos/archy1.jpg',
            'photos/archy2.jpg',
            'photos/archy 3.jpg',
            'photos/arch4.jpg'
        ];
        
        // Select random photo
        const randomPhoto = archyPhotos[Math.floor(Math.random() * archyPhotos.length)];
        
        // Set the image source
        if (archyImage) {
            archyImage.src = randomPhoto;
        }
    }
    
    // Authorization check
    securityForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nameInput = document.getElementById('name').value.toLowerCase();
        const passwordInput = document.getElementById('password').value.toLowerCase();
        
        // Check credentials (non-case sensitive)
        const validNames = ['sana', 'sana sehgal'];
        const validPasswords = ['kanishk', 'kanishk ghonge'];
        
        // Debug the input values
        console.log("Name entered:", nameInput);
        console.log("Password entered:", passwordInput);
        
        // Fix the authentication logic
        if ((validNames.includes(nameInput) || nameInput.includes('sana')) && 
            (validPasswords.includes(passwordInput) || passwordInput.includes('kanishk'))) {
            // Hide security form
            document.getElementById('security').classList.add('hidden');
            
            // Show welcome message with animation
            welcomeMessage.classList.remove('hidden');
            showWelcomeMessage();
            
            // Play the sorry audio
            if (sorryAudio) {
                sorryAudio.play().catch(error => {
                    console.error('Audio playback failed:', error);
                });
            }
        } else {
            // Funny alert for wrong credentials
            const funnyMessages = [
                "Nice try, imposter! Only the real Sana knows the password!",
                "ERROR: You are not Sana! Or did she forget her own password again?",
                "DENIED! Kanishk says only Sana gets to complain about him!",
                "WRONG! Please return this device to Sana immediately!",
                "HALT! You're either not Sana, or she's forgotten who her favorite person is!"
            ];
            const randomMessage = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
            alert(randomMessage);
        }
    });
    
    // Proceed button from welcome message to grievance form
    proceedBtn.addEventListener('click', function() {
        welcomeMessage.classList.add('hidden');
        grievanceForm.classList.remove('hidden');
    });
    
    // Grievance form submission
    complaintForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Hide grievance form
        grievanceForm.classList.add('hidden');
        
        // Show thank you message
        thankYouSection.classList.remove('hidden');
        
        // Stop the sorry audio
        if (sorryAudio) {
            sorryAudio.pause();
        }
        
        // Set up the thank you audio player
        setupThankYouAudioPlayer();
    });
    
    // Set up the thank you audio player
    function setupThankYouAudioPlayer() {
        const thankYouAudio = document.getElementById('thank-you-audio');
        const playBtn = document.getElementById('play-btn');
        const pauseBtn = document.getElementById('pause-btn');
        const restartBtn = document.getElementById('restart-btn');
        
        if (!thankYouAudio || !playBtn || !pauseBtn || !restartBtn) return;
        
        // Auto play when shown
        thankYouAudio.play().catch(error => {
            console.error('Audio playback failed:', error);
        });
        
        // Play button
        playBtn.addEventListener('click', () => {
            thankYouAudio.play().catch(error => {
                console.error('Audio playback failed:', error);
            });
        });
        
        // Pause button
        pauseBtn.addEventListener('click', () => {
            thankYouAudio.pause();
        });
        
        // Restart button
        restartBtn.addEventListener('click', () => {
            thankYouAudio.currentTime = 0;
            thankYouAudio.play().catch(error => {
                console.error('Audio playback failed:', error);
            });
        });
    }
    
    // Custom form elements behavior
    const otherCheckbox = document.querySelector('input[value="other"]');
    const otherInput = document.getElementById('other-fix');
    
    if (otherCheckbox && otherInput) {
        // Initially disable the "other" input field
        otherInput.disabled = true;
        
        // Enable/disable "other" input field based on checkbox state
        otherCheckbox.addEventListener('change', function() {
            otherInput.disabled = !this.checked;
            if (this.checked) {
                otherInput.focus();
            }
        });
    }
    
    // Add background animations for the page
    animateBackground();
});

// Create background animation
function animateBackground() {
    const bg = document.querySelector('.animated-bg');
    
    if (!bg) return;
    
    // Add additional animation classes
    bg.classList.add('enhanced-animation');
    
    // Create floating hearts
    createFloatingHearts();
}

// Create floating hearts in the background
function createFloatingHearts() {
    const container = document.body;
    const heartCount = 15;
    
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerHTML = '❤';
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${Math.random() * 6 + 10}s`;
        heart.style.animationDelay = `${Math.random() * 5}s`;
        heart.style.opacity = Math.random() * 0.5 + 0.1;
        heart.style.fontSize = `${Math.random() * 20 + 10}px`;
        
        container.appendChild(heart);
    }
}

// Add style for floating hearts
const style = document.createElement('style');
style.textContent = `
    .enhanced-animation {
        animation: gradient 10s ease infinite;
    }

    .floating-heart {
        position: fixed;
        color: rgba(255, 107, 139, 0.6);
        top: -10%;
        z-index: -1;
        animation: float-up linear infinite;
    }

    @keyframes float-up {
        0% {
            transform: translateY(110vh) rotate(0deg);
        }
        100% {
            transform: translateY(-20vh) rotate(360deg);
        }
    }
`;
document.head.appendChild(style);

// Handle welcome message animations
function showWelcomeMessage() {
    const lines = document.querySelectorAll('.typewriter-text .line');
    
    // Set initial visibility
    lines.forEach(line => {
        line.style.opacity = '0';
        line.style.display = 'block';
    });
    
    // Show each line with delay
    let delay = 500;
    lines.forEach((line, index) => {
        setTimeout(() => {
            line.style.opacity = '1';
            line.classList.add('typing');
            
            // Remove typing class from previous line
            if (index > 0) {
                lines[index - 1].style.borderRight = 'none';
            }
        }, delay);
        delay += 3500; // Add more time between lines
    });
    
    // Remove the border from the last line when done
    setTimeout(() => {
        if (lines.length > 0) {
            lines[lines.length - 1].style.borderRight = 'none';
        }
    }, delay);
} 