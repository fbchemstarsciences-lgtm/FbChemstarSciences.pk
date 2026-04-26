# Staff Setup Guide - FB Chemstar Sciences

## Adding Staff Members for Website Content Editing

Follow these steps to add staff members who can login and edit website content:

### Step 1: Open the JavaScript File

1. Open the file **`script.js`** with any text editor (Notepad, VS Code, etc.)
2. Scroll to the top of the file
3. Find this section (should be around line 2-6):

```javascript
// Staff credentials - You can add multiple staff members here
const STAFF_CREDENTIALS = {
    'staff': 'password123',  // Example staff member
    // Add more staff members like:
    // 'name': 'password'
};
```

### Step 2: Add Staff Members

Replace the example with your actual staff members. Here's an example:

```javascript
const STAFF_CREDENTIALS = {
    'ali': 'ali@123456',
    'sara': 'sara@pass789',
    'khan': 'khan_secure999',
    'fatima': 'fatima_pass123'
};
```

**Important**:
- Staff names are **case-sensitive** (e.g., 'Ali' and 'ali' are different)
- Passwords are **case-sensitive**
- Use strong passwords

### Step 3: Save the File

1. After adding staff members, click **File → Save** (Ctrl+S)
2. Make sure you saved the `script.js` file

### Step 4: Test the Login

1. Open `index.html` in your web browser
2. Click the **three-dot menu** (☰) in the top-right corner
3. Scroll down and click **"Staff Login"**
4. Enter a staff name and password
5. Click **"Login"**
6. If successful, the Staff Dashboard will open

## Example Staff Credentials

Here's an example of how you might set up your staff:

```javascript
const STAFF_CREDENTIALS = {
    'ali_khan': 'ali@chemstar123',
    'sara_malik': 'sara#secure456',
    'fatima_ahmed': 'fatima789pass',
    'hassan': 'hassan@multan001'
};
```

## Staff Dashboard Features

Once logged in, staff members can:

1. **Edit Home Section**: Update the welcome message and hero content
2. **Edit About Section**: Modify company information
3. **Edit Services Section**: Update service descriptions
4. **Edit Contact Section**: Change contact details
5. **Save Changes**: All changes are saved automatically
6. **Logout**: Securely logout from the dashboard

## Important Notes

### Security ⚠️
- This system stores credentials in the JavaScript file
- **Do NOT use this in production** without additional security measures
- For a production website, you would need a backend server with database encryption
- Consider this a simple solution for small team content management

### Data Storage
- Changes are stored in the browser's **localStorage**
- Each browser has its own storage
- Data persists even after closing the browser
- To sync across devices, you need a backend server

### Best Practices
1. Use strong, unique passwords for each staff member
2. Change passwords periodically
3. Remove staff members when they leave (by deleting their entry)
4. Keep backup copies of `script.js`
5. Test login after making changes

## Removing Staff Members

To remove a staff member's access:

1. Open `script.js`
2. Find the staff member's entry
3. Delete that line
4. Save the file

Example - Before:
```javascript
const STAFF_CREDENTIALS = {
    'ali': 'password123',
    'sara': 'password456'
};
```

Example - After (removing Ali):
```javascript
const STAFF_CREDENTIALS = {
    'sara': 'password456'
};
```

## Changing a Staff Member's Password

1. Open `script.js`
2. Find the staff member's entry
3. Update the password
4. Save the file

Example:
```javascript
const STAFF_CREDENTIALS = {
    'sara': 'newpassword789'  // Changed from 'password456'
};
```

## Troubleshooting

### Login Not Working
- Check that you saved `script.js` ✓
- Verify the staff name is spelled correctly (case-sensitive) ✓
- Verify the password is correct (case-sensitive) ✓
- Make sure you're using the exact names you added ✓
- Try refreshing the browser (F5) ✓

### Can't Find Staff Credentials Section
- Make sure you're editing `script.js`, not `styles.css`
- Open the file in a text editor (Notepad, VS Code, Sublime Text)
- Press Ctrl+F to search for "STAFF_CREDENTIALS"

### Changes Not Saved
- Make sure you click File → Save (Ctrl+S) after editing
- Don't close the text editor without saving
- Check that the file was actually saved

## Advanced: Using Browser Console

To view all staff members, open your browser and:
1. Press **F12** to open Developer Tools
2. Click the **Console** tab
3. Type: `viewStaffMembers()`
4. Press Enter to see all staff names

To add a staff member dynamically (temporary, resets on page reload):
```javascript
addStaffMember('newstaff', 'password123')
```

## Contact for Support

If you have questions about setting up staff access:
- Email: fbchemstarsciences@gmail.com
- Phone: 03000198701

---

**Remember**: Always test the login after making changes!
