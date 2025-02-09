# Out-Tube Extension

This extension adds "Out-tube" and "Download-tube" buttons to YouTube videos and playlists, allowing users to easily copy links and navigate to custom schemes.

## Features

- Adds "Out-tube" button to video thumbnails and playlists.
- Adds "Download-tube" button to video thumbnails and playlists.
- Copies the video or playlist link to the clipboard.
- Navigates to custom schemes (`outtube:` and `dwntube:`).

## Installation

1. Clone the repository to your local machine:
    ```sh
    git clone https://github.com/yourusername/out-tube.git
    ```

2. Navigate to the project directory:
    ```sh
    cd out-tube
    ```

3. Load the extension in Firefox:
    1. Open `about:debugging#/runtime/this-firefox`.
    2. Click "Load Temporary Add-on" and select the `manifest.json` file from the project directory.

## Usage

1. Open YouTube and navigate to any video or playlist.
2. You will see "Out-tube" and "Download-tube" buttons added to the video thumbnails and playlists.
3. Click the "Out-tube" button to copy the link and navigate to the `outtube:` scheme.
4. Click the "Download-tube" button to copy the link and navigate to the `dwntube:` scheme.

## Development

### File Structure

- `outtube.js`: Main JavaScript file that adds the buttons and handles the click events.
- `styles.css`: CSS file for styling the buttons.
- `icons/`: Directory containing SVG icons for the buttons.
- `README.md`: This file.

### Adding New Features

1. Create a new branch for your feature:
    ```sh
    git checkout -b feature-name
    ```

2. Make your changes and commit them:
    ```sh
    git add .
    git commit -m "Add new feature"
    ```

3. Push your changes to the remote repository:
    ```sh
    git push origin feature-name
    ```

4. Create a pull request on GitHub.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


