# Profile Card

A modern, responsive profile card built with HTML, CSS, and JavaScript. Features a clean black and white design with smooth animations and full keyboard accessibility.

<!-- ![Profile Card Preview](./preview.png) -->

## Features

- ✨ Modern, minimalist black and white design
- 📱 Fully responsive across all screen sizes
- ⌨️ Keyboard accessible (all interactive elements are focusable)
- 🎨 Smooth hover animations and transitions
- ⏱️ Real-time millisecond timer display
- 🔗 Social media integration (Twitter, GitHub, LinkedIn, Instagram)
- 🎯 Clean, semantic HTML structure

## Demo

Visit the live demo: [[Demo Link](https://dtechbro-card.netlify.app/)]

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Flexbox, gradients, and transitions
- **JavaScript** - Real-time timer functionality
- **Font Awesome 7.0.1** - Social media icons

## Project Structure

```
profile-card/
├── index.html          # Main HTML file
├── style.css           # Stylesheet with responsive design
├── script.js           # JavaScript for timer functionality
├── profile-image.jpg   # Profile picture
└── README.md          # Project documentation
```

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, but recommended)

### Installation & Running Locally

#### Option 1: Direct File Opening (Simple)

1. **Clone the repository**
   ```bash
   git clone https://github.com/dtechbro/profile-card.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd profile-card
   ```

3. **Open in browser**
   - Simply double-click `index.html` or
   - Right-click `index.html` → Open with → Your Browser

#### Option 2: Using Live Server (Recommended)

1. **Clone the repository**
   ```bash
   git clone https://github.com/dtechbro/profile-card.git
   cd profile-card
   ```

2. **Using Python's built-in server**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```
   Then open `http://localhost:8000` in your browser

3. **Using Node.js http-server**
   ```bash
   # Install http-server globally (one-time)
   npm install -g http-server
   
   # Run the server
   http-server -p 8000
   ```
   Then open `http://localhost:8000` in your browser

4. **Using VS Code Live Server Extension**
   - Install the "Live Server" extension in VS Code
   - Right-click on `index.html`
   - Select "Open with Live Server"

## Customization

### Update Personal Information

1. **Profile Image**: Replace `profile-image.jpg` with your own image
2. **Name**: Edit line 25 in `index.html`
3. **Bio**: Edit lines 35-36 in `index.html`
4. **Social Links**: Update URLs in lines 43-72 in `index.html`
5. **Hobbies & Dislikes**: Modify the list items in lines 77-91 in `index.html`

### Customize Styling

Edit `style.css` to change:
- **Colors**: Modify color values (currently black/white theme)
- **Fonts**: Change the font-family in line 12
- **Spacing**: Adjust padding and gap values
- **Responsive breakpoints**: Modify media queries (lines 181-248)

### Timer Functionality

The timer displays time in milliseconds. To modify:
- Edit `script.js` to change the timer format or behavior

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

- All interactive elements are keyboard-focusable
- Semantic HTML structure
- Proper ARIA labels via `data-testid` attributes
- High contrast black and white theme
- Responsive text sizing

## Testing

The project includes test IDs for automated testing:
- `test-profile-card` - Main article container
- `test-user-avatar` - Profile image
- `test-user-name` - Username heading
- `test-user-time` - Timer display
- `test-user-bio` - Bio paragraph
- `test-user-social-links` - Social links container
- `test-user-social-twitter/github/linkedin/instagram` - Individual social links
- `test-user-hobbies` - Hobby list items
- `test-user-dislikes` - Dislike list items

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

**dtechbro**
- GitHub: [@dtechbro](https://github.com/dtechbro)
- Twitter: [@dtechbro](https://x.com/dtechbro)
- LinkedIn: [Olaoye Muhammad-Nabeel](https://www.linkedin.com/in/olaoye-md-nabeel)
- Instagram: [@detechbro](https://www.instagram.com/detechbro)

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/dtechbro/profile-card/issues).

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Acknowledgments

- Font Awesome for the social media icons
- Inspiration from modern profile card designs

---

⭐ Star this repo if you find it helpful!
