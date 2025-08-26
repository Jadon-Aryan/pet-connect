PetConnect - Dog Adoption Portal
PetConnect is a comprehensive, user-friendly frontend prototype for a web platform designed to connect stray and rescued dogs with loving homes. Inspired by leading platforms like Petfinder, this project aims to provide a seamless and engaging experience for potential adopters, rescuers, and animal welfare organizations.

✨ Key Features
Multi-Page Navigation: A complete multi-page layout including a Homepage, Adoption Gallery, Favorites, Success Stories, Registration, and Feedback pages.

Homepage Hero Search: A prominent search bar on the homepage to encourage immediate user engagement.

Advanced Filtering: On the "Find a Pet" page, users can filter the gallery of dogs by:

Age (Puppy, Adult, Senior)

Size (Small, Medium, Large)

Gender (Male, Female)

Adoption Status

Save to Favorites ❤️: Users can click a heart icon on any dog's profile to save them. This list is saved in the browser's local storage, so it persists even after closing the tab.

My Favorites Page: A dedicated page that displays all the dogs a user has saved, making it easy to compare and revisit potential pets.

Interactive Inquiry Modal: A clean, user-friendly pop-up form for users to make adoption inquiries directly from a dog's profile.

Responsive Design: The layout is designed to be functional and visually appealing on all devices, from mobile phones to desktop computers.

🛠️ Tech Stack
This is a pure frontend project built with foundational web technologies.

HTML5: For the structure and content of the website.

CSS3: For all styling, layout, and responsive design.

JavaScript (ES6+): For all interactivity, including filtering, modal pop-ups, and the "Save to Favorites" feature using localStorage.

Font Awesome: For modern, scalable icons used throughout the site.

🚀 Getting Started
To get a local copy up and running, follow these simple steps.

Prerequisites
You only need a modern web browser (like Chrome, Firefox, or Edge).

Installation
Clone the repository:

git clone https://github.com/your-username/petconnect.git

Navigate to the project directory:

cd petconnect

Open index.html in your browser:
Simply double-click the index.html file, or right-click and choose "Open with" your favorite browser.

📁 File Structure
The project is organized with a clear and intuitive file structure:

petconnect/
├── 📄 index.html             # Homepage
├── 📄 adoption.html          # Main gallery of adoptable dogs
├── 📄 favorites.html         # User's saved favorite dogs
├── 📄 updates.html           # Success stories page
├── 📄 registration.html      # User registration page
├── 📄 feedback.html          # User feedback page
├── 📄 style.css              # Single stylesheet for all pages
├── 📄 adoption-script.js     # Single script for all interactivity
└── 📁 images/                # Folder for all dog and NGO images
    ├── 🐶 dog1.png
    ├── 🐶 dog2.png
    └── ...

🔮 Future Enhancements
This frontend prototype sets the stage for a fully functional web application. Future plans include:

Backend Integration: Develop a Node.js/Express.js backend with a MongoDB database to:

Manage user accounts with secure registration and login.

Store and serve dog profiles dynamically.

Save user favorites to their account.

Handle adoption inquiries and feedback submissions.

Admin Panel: Create a secure dashboard for NGOs and rescuers to upload and manage their own dog listings.

Advanced Search: Implement the functionality for the homepage search bar to perform real-time searches against the database.

Verification Systems: Add backend logic for OTP and CAPTCHA verification during user registration.
