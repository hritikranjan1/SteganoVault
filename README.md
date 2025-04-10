# SteganoVault - Secure Steganography Tool



SteganoVault is a powerful steganography application that allows users to securely hide secret messages within various file types including images, text files, PDFs, DOCX documents, audio files, and videos. Built with Flask for the backend and modern HTML/CSS/JavaScript for the frontend, this tool provides a user-friendly interface for covert communication.

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Security](#security)
- [Contributing](#contributing)
- [License](#license)
- [Demo](#demo)
- [Contact](#contact)

## Features

### Core Functionality
- **Multi-format Support**: Hide messages in images (PNG, JPG), text files, PDFs, DOCX, audio (MP3, WAV), and video (MP4, AVI, MOV)
- **Password Protection**: Optional password encryption for added security
- **Real-time Processing**: Files are processed on the server and immediately deleted
- **Google Drive Integration**: Option to upload encoded files directly to Google Drive

### User Experience
- **Interactive Tutorial**: Step-by-step guide for new users
- **Stealth Score System**: Gamification with points and badges
- **Responsive Design**: Works on all device sizes
- **Multiple Themes**: Dark, light, and fun theme options
- **Preview Functionality**: See before/after versions of your files

### Security Features
- **OTP Verification**: Secure email verification for user accounts
- **Password Hashing**: BCrypt for secure password storage
- **Session Management**: Secure user sessions
- **CSRF Protection**: Built-in Flask security measures

### Community Features
- **User Reviews**: Share and read experiences
- **Testimonials**: See what others say about the tool
- **Contributor Recognition**: Highlight project contributors

## Technology Stack

### Backend
- **Python 3.10+**
- **Flask**: Web framework
- **Supabase**: Authentication and database
- **Google Drive API**: File storage integration
- **Other Libraries**:
  - Stegano (LSB steganography)
  - PyPDF2 (PDF manipulation)
  - python-docx (DOCX manipulation)
  - OpenCV (video processing)
  - Pydub (audio processing)

### Frontend
- **HTML5, CSS3, JavaScript (ES6+)**
- **Tailwind CSS**: Utility-first CSS framework
- **Motion One**: Animation library
- **EmailJS**: Contact form handling

### Deployment
- **Render**: Cloud hosting platform
- **Environment Variables**: Secure configuration management

## Installation

### Prerequisites
- Python 3.10+
- Node.js (for optional frontend development)
- Google Cloud Platform account (for Drive API)
- Supabase account (for authentication)

### Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/hritikranjan1/SteganoVault.git
   cd SteganoVault
   ```

2. **Set up Python environment**:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   ```

3. **Configure environment variables**:
   Create a `.env` file in the root directory with the following variables:
   ```
   SECRET_KEY=your_secret_key_here
   SUPABASE_URL=your_supabase_url
   SUPABASE_KEY=your_supabase_key
   MAIL_SERVER=smtp.example.com
   MAIL_PORT=587
   MAIL_USE_TLS=true
   MAIL_USERNAME=your_email@example.com
   MAIL_PASSWORD=your_email_password
   MAIL_DEFAULT_SENDER=noreply@example.com
   GOOGLE_DRIVE_FOLDER_ID=your_folder_id
   GOOGLE_CREDENTIALS=your_service_account_json
   ```

4. **Run the application**:
   ```bash
   python app.py
   ```

5. **Access the application**:
   Open `http://localhost:10000` in your browser

## Usage

### Basic Workflow

1. **Encode a message**:
   - Select a file to use as cover
   - Enter your secret message
   - Optionally add a password
   - Click "Encode"
   - Download the encoded file

2. **Decode a message**:
   - Upload an encoded file
   - Enter the password if one was used
   - Click "Decode"
   - View the extracted message

### Advanced Features

- **Password Protection**: Add an extra layer of security to your hidden messages
- **Google Drive Sharing**: Upload encoded files directly to Google Drive for easy sharing
- **Stealth Score**: Earn points and badges as you use the tool
- **Spy Target Practice**: A fun game to test your reflexes

## API Endpoints

### Authentication
- `POST /auth/register`: Register a new user
- `POST /auth/verify`: Verify email with OTP
- `POST /auth/login`: User login
- `POST /auth/logout`: User logout
- `GET /auth/status`: Check authentication status
- `POST /auth/forgot-password`: Request password reset
- `POST /auth/reset-password`: Reset password with OTP

### File Processing
- `POST /encode`: Encode a message in a file
- `POST /decode`: Decode a message from a file

### Reviews
- `GET /api/reviews`: Get all verified reviews
- `POST /api/reviews`: Submit a new review
- `GET /api/reviews/latest`: Get latest reviews
- `GET /api/testimonials`: Get testimonials (default + verified)

## Security

SteganoVault implements multiple security measures:

1. **Data Protection**:
   - No files or messages are stored permanently
   - All processing happens in memory or temporary files
   - Automatic cleanup after processing

2. **Authentication**:
   - Secure password hashing with BCrypt
   - Email verification with OTP
   - Session management with Flask

3. **Application Security**:
   - CSRF protection
   - Secure headers (XSS, frame options)
   - Input validation and sanitization

4. **Privacy**:
   - No tracking or analytics
   - Clear privacy policy

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a Pull Request

### Current Contributors
- [Hritik Ranjan](https://github.com/hritikranjan1)
- [Ruhul Islam](https://github.com/iruhul8750)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Demo

A live demo is available at: [https://steganovault.onrender.com](https://steganovault.onrender.com)

## Contact

For questions or support, please contact:
- Hritik Ranjan: [GitHub](https://github.com/hritikranjan1) | [LinkedIn](https://www.linkedin.com/in/hritikranjan1/)
- Ruhul Islam: [GitHub](https://github.com/iruhul8750) | [LinkedIn](https://www.linkedin.com/in/ruhulislam2022/)

---

**Important Note**: This tool is intended for educational and entertainment purposes only. It is not a secure encryption method and should not be used for sensitive or confidential information. For secure communication, consider using proper encryption tools.