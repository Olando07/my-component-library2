McDonald Olando UI Component Library
A React component library built with TypeScript, Styled Components, and Storybook.

📋 Prerequisites
Before you begin, ensure you have the following installed:

Docker 
Docker Desktop running (if on Windows/Mac)

To verify Docker is installed:
`docker --version`
🚀 Quick Start
1. Build the Docker Image
Navigate to the project root directory and run:
`docker build -t McDonald_Olando_coding_assignment12 .`

What this does:

Creates a production build of the React application
Packages it with Nginx web server
Creates an optimized Docker image

You'll see build steps completing. This may take 2-5 minutes on first build.

2. Run the Container
`docker run -d -p 8083:8083 --name McDonald_Olando_coding_assignment12 McDonald_Olando_coding_assignment12`
Command breakdown:

`-d` → Run in detached mode (background)
`-p 8083:8083` → Map container port 8083 to localhost port 8083
`--name McDonald_Olando_coding_assignment12` → Name the container
Last argument → The image name to use

3. Access the Application
Open your browser and navigate to:
`http://localhost:8083`

This library includes:

Button - Interactive button 
Label - Form label
Text - Styled text paragraph
Table - Complete table with Header, Row, Cell, and Footer
Dropdown - Select dropdown menu
RadioButton - Radio button inputs
Img - Image
HeroImage - Large hero section image
Card - Content card container
