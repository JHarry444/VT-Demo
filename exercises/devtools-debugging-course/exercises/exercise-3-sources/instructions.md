# Exercise 3: Debugging JavaScript with the Sources Tab

In this exercise, you will learn how to use the Sources tab in the DevTools to debug a JavaScript application. Follow the instructions below to complete the exercise.

## Objectives
- Understand how to set breakpoints in JavaScript code.
- Learn how to step through code execution.
- Inspect variable values and call stack during debugging.

## Instructions

1. **Open the Application**:
   - Open the `index.html` file located in the `exercises/exercise-3-sources` directory in your web browser.

2. **Access DevTools**:
   - Right-click on the page and select "Inspect" or press `F12` to open the DevTools.

3. **Navigate to the Sources Tab**:
   - Click on the "Sources" tab in the DevTools panel.

4. **Locate the JavaScript File**:
   - In the left sidebar, find the `app.js` file under the file structure. This file contains the JavaScript code you will be debugging.

5. **Set Breakpoints**:
   - Click on the line number in `app.js` where you want to set a breakpoint. A blue marker will appear, indicating that a breakpoint has been set.

6. **Trigger the Code**:
   - Interact with the webpage to trigger the JavaScript code execution. This could be clicking a button or performing an action that runs the JavaScript.

7. **Step Through the Code**:
   - Once the breakpoint is hit, the execution will pause. Use the controls in the DevTools to step through the code:
     - **Step Over**: Move to the next line of code.
     - **Step Into**: Dive into function calls.
     - **Step Out**: Exit the current function.

8. **Inspect Variables**:
   - While paused at a breakpoint, hover over variables to see their current values. You can also view the call stack on the right side of the Sources tab.

9. **Resume Execution**:
   - After inspecting the code and variables, click the "Resume script execution" button (usually a play icon) to continue running the code.

10. **Reflect on Your Findings**:
    - After completing the debugging process, think about what you learned. How did the Sources tab help you understand the flow of the JavaScript code? What issues did you identify and resolve?

## Conclusion
By the end of this exercise, you should feel more comfortable using the Sources tab in DevTools to debug JavaScript applications. Practice these skills to enhance your debugging capabilities in future projects.