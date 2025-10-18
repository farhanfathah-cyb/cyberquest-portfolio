# Cybersecurity Quest - Deployable React (Vite) Portfolio

This is a ready-to-deploy **React (Vite)** website package for the Cybersecurity Game Portfolio.

## Quick start (on your Mac)

1. Unzip the package and open Terminal in the project folder:
   ```
   cd cyberquest-portfolio-react
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run locally:
   ```
   npm run dev
   ```

4. To build and deploy to GitHub Pages:
   - Install gh-pages if not already:
     ```
     npm install --save-dev gh-pages
     ```
   - Update `package.json` to replace `<your-github-username>` in the `homepage` field.
   - Push the repo to GitHub (create the repo first), then:
     ```
     npm run deploy
     ```

## Notes
- This project uses the Tailwind Play CDN for styling (no Tailwind build step required).
- Edit `src/App.jsx` to customize content.
