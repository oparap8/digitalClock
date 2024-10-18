# Digital Clock

This is a simple digital clock project that displays the current time (hours, minutes, and seconds) in real-time using JavaScript. The time updates every second.

## Project Structure

- **index.html**: The main HTML file containing the structure of the clock.
- **script.js**: The JavaScript file that controls the logic for fetching the current time and updating the HTML in real-time.
- **style.css**: The stylesheet for the page.

## How it Works

- The `script.js` uses `setInterval()` to repeatedly fetch the current time every second using JavaScript's `Date` object.
- The hours, minutes, and seconds are dynamically updated in the HTML elements with the IDs `hrs`, `min`, and `sec`, respectively.
- If any time value is less than 10 (i.e., a single digit), it adds a leading zero to keep the time format consistent (e.g., `09` instead of `9`).

### Future Improvements

- Make the clock responsive and adaptable to various screen sizes.
- Add features such as AM/PM indicators or a 24-hour/12-hour toggle.

## Technologies Used

- HTML
- CSS
- JavaScript
