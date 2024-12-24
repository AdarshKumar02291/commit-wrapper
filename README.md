# Commit Message Generator VS Code Extension

## Overview
The **Commit Message Generator** is a VS Code extension that automates the process of writing meaningful and professional commit messages. Using OpenAI's API, the extension generates commit messages based on the Git diff of staged changes, adhering to best practices such as FreeCodeCamp's commit message guidelines.

---

## Features
- **Automatic Commit Message Generation:** Generates commit messages based on staged Git changes.
- **Customizable Commit Messages:** Displays the generated message in an input box for user review and edits before committing.
- **Seamless Integration with Git:** Directly stages and commits changes from the editor.
- **Error Handling:** Handles missing staged changes, invalid repositories, and API errors gracefully.

---

## Installation

### Prerequisites
- **Node.js** installed on your system.
- A valid OpenAI API key.

### Steps
1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd commit-message-generator
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Open the project in VS Code:
   ```bash
   code .
   ```
4. Launch the extension in development mode:
   - Press `F5` or go to the **Run and Debug** tab and click **Start Debugging**.

---

## Usage

### Generate Commit Message
1. Stage your changes using Git:
   ```bash
   git add .
   ```
2. Open the command palette (`Ctrl+Shift+P` or `Cmd+Shift+P`) and type:
   **"Generate Commit Message"**.
3. The extension will:
   - Fetch the Git diff of staged changes.
   - Send the diff to OpenAI's API to generate a commit message.
   - Display the generated message in an input box.
4. Review and edit the message if needed, then confirm to commit the changes.

---

## Configuration

### Set OpenAI API Key
1. Open the file `src/openai.js`.
2. Replace the placeholder `your_openai_api_key` with your OpenAI API key:
   ```javascript
   const apiKey = "your_openai_api_key";
   ```

---

## Development

### Project Structure
- `src/`
  - **`extension.js`**: Main entry point for the extension.
  - **`openai.js`**: Handles communication with the OpenAI API.
  - **`test/`**: Contains unit tests for the extension.

### Running Tests
1. Install testing dependencies:
   ```bash
   npm install --save-dev mocha chai
   ```
2. Run tests:
   ```bash
   npx mocha src/test
   ```

### Debugging
- Use `console.log` statements in the code to debug.
- View logs in the Debug Console when running the extension in development mode.

---

## Error Handling
- **No Staged Changes:** Displays an error message if there are no staged changes.
- **Invalid Repository:** Alerts the user if Git is not initialized.
- **API Errors:** Handles API failures with user-friendly messages.

---

## Publishing
1. Package the extension:
   ```bash
   vsce package
   ```
2. Publish to the VS Code Marketplace. Refer to [Publishing Extensions](https://code.visualstudio.com/api/working-with-extensions/publishing-extension).

---

## Future Enhancements
- Add settings to configure commit message styles (e.g., Conventional Commits, FreeCodeCamp).
- Support multi-line commit messages for detailed descriptions.
- Add a configuration page for API key input and other settings.

---

## License


---

## Contributing
Contributions are welcome! Please open an issue or submit a pull request to suggest features or improvements.

---

## Acknowledgments
- [OpenAI](https://openai.com/) for their powerful API.
- [VS Code Extension API](https://code.visualstudio.com/api) for enabling seamless integration.

