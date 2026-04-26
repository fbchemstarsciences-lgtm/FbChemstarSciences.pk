// Staff credentials - You can add multiple staff members here
const STAFF_CREDENTIALS = {
    'FBCHEM': '@fbchemstar@832@'
};

let currentStaffName = null;

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    // Menu toggle functionality
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.menu-container')) {
            navMenu.classList.remove('active');
        }
    });
    
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will contact you soon.');
            contactForm.reset();
        });
    }
    
    // Load saved content from localStorage
    loadSavedContent();
    
    // Navigate to home section on page load
    navigateTo('home');
});

// Navigation function
function navigateTo(section) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(sec => sec.classList.remove('active'));
    
    // Show selected section
    const selectedSection = document.getElementById(section);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }
    
    // Close menu after navigation
    document.getElementById('navMenu').classList.remove('active');
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Staff Login Functions
function openStaffLogin(event) {
    event.preventDefault();
    document.getElementById('loginModal').classList.add('active');
    document.getElementById('staffLoginForm').reset();
    document.getElementById('loginError').textContent = '';
}

function closeStaffLogin() {
    document.getElementById('loginModal').classList.remove('active');
    document.getElementById('loginError').textContent = '';
}

// Staff login form submission
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('staffLoginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const staffName = document.getElementById('staffName').value;
            const staffPassword = document.getElementById('staffPassword').value;
            const loginError = document.getElementById('loginError');
            
            // Verify credentials
            if (STAFF_CREDENTIALS[staffName] && STAFF_CREDENTIALS[staffName] === staffPassword) {
                // Login successful
                currentStaffName = staffName;
                closeStaffLogin();
                openStaffDashboard(staffName);
            } else {
                // Login failed
                loginError.textContent = 'Invalid staff name or password!';
                loginError.classList.add('show');
            }
        });
    }
});

function openStaffDashboard(staffName) {
    const dashboard = document.getElementById('staffDashboard');
    dashboard.classList.add('active');
    document.getElementById('welcomeMessage').textContent = `Welcome, ${staffName}! You can now edit website content.`;
}

function closeStaffDashboard() {
    document.getElementById('staffDashboard').classList.remove('active');
    document.getElementById('editArea').style.display = 'none';
}

function staffLogout() {
    currentStaffName = null;
    closeStaffDashboard();
    alert('You have been logged out.');
}

// Edit section function
function editSection(section) {
    document.getElementById('editArea').style.display = 'block';
    
    const sectionElement = document.getElementById(section);
    const content = sectionElement.innerText;
    
    const editTitle = document.getElementById('editTitle');
    const editContent = document.getElementById('editContent');
    
    editTitle.textContent = `Edit ${section.charAt(0).toUpperCase() + section.slice(1)} Section`;
    editContent.value = content;
    editContent.dataset.section = section;
    
    // Scroll to edit area
    document.getElementById('editArea').scrollIntoView({ behavior: 'smooth' });
}

function saveChanges() {
    const editContent = document.getElementById('editContent');
    const section = editContent.dataset.section;
    const newContent = editContent.value;
    
    if (newContent.trim() === '') {
        alert('Content cannot be empty!');
        return;
    }
    
    // Save to localStorage
    localStorage.setItem(`section_${section}`, newContent);
    
    // Update the section on the page
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
        sectionElement.innerText = newContent;
    }
    
    alert('Changes saved successfully! You can publish this change by clicking the publish button.');
    cancelEdit();
}

function cancelEdit() {
    document.getElementById('editArea').style.display = 'none';
    document.getElementById('editContent').value = '';
}

// Load saved content from localStorage
function loadSavedContent() {
    const sections = ['home', 'about', 'services', 'contact'];
    sections.forEach(section => {
        const savedContent = localStorage.getItem(`section_${section}`);
        if (savedContent) {
            const sectionElement = document.getElementById(section);
            if (sectionElement) {
                sectionElement.innerText = savedContent;
            }
        }
    });
}

// Add staff member function (for admin use)
function addStaffMember(name, password) {
    STAFF_CREDENTIALS[name] = password;
    console.log(`Staff member '${name}' added successfully.`);
}

// Remove staff member function (for admin use)
function removeStaffMember(name) {
    if (STAFF_CREDENTIALS[name]) {
        delete STAFF_CREDENTIALS[name];
        console.log(`Staff member '${name}' removed successfully.`);
    } else {
        console.log(`Staff member '${name}' not found.`);
    }
}

// View all staff members (for admin use)
function viewStaffMembers() {
    console.log('Current staff members:', Object.keys(STAFF_CREDENTIALS));
    return Object.keys(STAFF_CREDENTIALS);
}

// Close modals when clicking outside
window.addEventListener('click', function(event) {
    const loginModal = document.getElementById('loginModal');
    const dashboardModal = document.getElementById('staffDashboard');
    
    if (event.target === loginModal) {
        closeStaffLogin();
    }
    
    if (event.target === dashboardModal) {
        closeStaffDashboard();
    }
});
