# Sportiee

Sportiee is a React-based web application styled using Tailwind CSS. It showcases sports teams and their details.

## Live Demo

You can view the live demo of this project [here](https://sportiee.vercel.app).

## Quick Start

### Running the Project Locally

To run this project locally on your machine, follow these steps:

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/rahoolsingh/Sportiee
    ```

2. Navigate to the Sportiee directory:

    ```bash
    cd Sportiee
    ```

3. Install all the necessary npm packages:

    ```bash
    npm install
    ```

4. Run the React app:

    ```bash
    npm run dev
    ```

    If you wish to host this app on your LAN (Local Area Network):

    ```bash
    npm run resdev
    ```

5. To build this React app:

    ```bash
    npm run build
    
---

### Setting Up Card Background Images

To set background images for the cards:

1. Visit [Unsplash Developer](https://unsplash.com/developers).
2. Login or "Register as a developer".
3. Go to your apps > New Application > Follow the steps.
4. Copy the Access Key generated for your app.
5. In this project, go to `.env.sample` and paste the Access Key:

    ```
    VITE_ACCESS_KEY = '<YOUR_ACCESS_KEY>'
    ```

    Replace `<YOUR_ACCESS_KEY>` with the key you copied.
6. Save this file as `.env`.

Now, the background images will appear in your cards as configured.
