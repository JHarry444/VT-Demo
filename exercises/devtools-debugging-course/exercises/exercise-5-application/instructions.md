# Exercise 5: Using the Application Tab

In this exercise, you will learn how to use the Application tab in the DevTools to inspect and manage web storage, including local storage and session storage. You will also explore service workers if applicable.

## Objectives

1. Understand the structure of local storage and session storage.
2. Learn how to add, modify, and delete items in local storage and session storage.
3. Explore the concept of service workers and their role in web applications.

## Instructions

1. **Open the Application Tab**:
   - Launch your browser and open the provided `index.html` file for this exercise.
   - Right-click on the page and select "Inspect" to open the DevTools.
   - Navigate to the "Application" tab.

2. **Inspect Local Storage**:
   - In the left sidebar, find the "Local Storage" section.
   - Click on the URL of your page to view the local storage items.
   - Note any existing items and their values.

3. **Add an Item to Local Storage**:
   - In the console (you can switch to the "Console" tab), use the following command to add an item:
     ```javascript
     localStorage.setItem('key', 'value');
     ```
   - Replace `'key'` and `'value'` with your own values.
   - Refresh the Application tab to see the new item in local storage.

4. **Modify an Item in Local Storage**:
   - Use the following command in the console to modify the item you just added:
     ```javascript
     localStorage.setItem('key', 'newValue');
     ```
   - Refresh the Application tab to see the updated value.

5. **Delete an Item from Local Storage**:
   - To remove the item, use the following command:
     ```javascript
     localStorage.removeItem('key');
     ```
   - Check the Application tab to confirm the item has been deleted.

6. **Inspect Session Storage**:
   - Repeat steps 2-5 for session storage by navigating to the "Session Storage" section in the Application tab.

7. **Explore Service Workers** (if applicable):
   - If your application uses service workers, navigate to the "Service Workers" section in the Application tab.
   - Check the status of the service worker and explore its cache.

## Conclusion

By completing this exercise, you should now be comfortable using the Application tab to manage local storage, session storage, and service workers. Make sure to experiment with different commands and explore the various features available in the Application tab.