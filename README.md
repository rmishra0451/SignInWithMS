# SignInWithMS
This demonstrates sign in with Microsoft Outlook Feature.

# 1. Go to Azure Portal on your browser, Sign in/ Sign up.

# 2. Once you are logged in follow these steps:
  * Search for Azure Active Directory.
  * Go to App Registrations.
  * Enter a name for your application, select "Accounts in any organizational directory and personal Microsoft accounts".
  * Select web from Dropdown menu and enter http://localhost:4300/auth/callback in REDIRECT URL.
  * Click Register.
  * Copy the value of the Application (client) ID.
  * Select Certificates & secrets under Manage. Select the New client secret button.
  * Enter text in Description and select one of the options for Expires and choose Add.
  * Copy the client secret value before you leave this page.
  
# 2. Clone the code to the local machine.
  * Edit .env with the values of Client ID and Client Secret that you obtained in the previous step.

# 3. Use npm i to install all the required modules.

# 4. Use npm start to run the project.

# 5. Navigate to localhost:4300 on your browser.
