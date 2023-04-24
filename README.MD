# ticketing-system
A fully built IT Ticketing System, developed from scratch using the MERN stack. Currently using it for a side gig dos bros it, where we offer IT support to college students. But this is meant to be an easily deployable, self hosted, and managed ticketing system. 

Are you an IT department tired of inefficient ticketing systems? Look no further! Our web-based, SaaS ticketing system gives you the power to create and manage tickets in a fully featured, app. With our system, users can submit support requests quickly and easily and IT staff can manage them with ease. Plus, you get all this without having to install or maintain any software - we take care of it all! Stop wasting time and money on outdated ticketing systems 

## TODO:


Ticketing System:

- Used to manage IT Support tickets from users to IT staff
- Currently just works as a 1 Company, any x amount of users application.
    - This means that the System is hosted by Company X, and anyone that works at Company X can send requests
      Right now the system is optimized for clients to send requests to Dos Bros IT, where me and some staff,
      Will handle these requests and work on the tickets for payments later on.

- The goal is to make it so any company can use it as a ticketing sytem.
    - The selling points are:
        1. The company does not need to host there own ticketing server, and use space on there systems saving them time and money.
        2. A completely functional, feature rich, and UX/UI friend application is at the hands of both the users and the IT staff that handle the ticket requests.
        3. Easy management of tickets, with a full feature ticketing system that has tools to prioritize tickets, as well as mark tickets as in progress, or completed.
        4. Escalation system built in, allow tickets to be escalated and marked for a higher ranking IT personel to review that ticket.
        5. Easily submit tickets, no longer need to call IT and wait, send emails, or go through complicated steps the ticketing app handles all of that cleanly.

    - Potential Business Options
        1. Subscriptions, companies pay $5.00 a month for a fully built, and managed ticketing system.
        2. One Time payments, companies pay $250.OO for a fully built, and managed ticketing system.
        3. Ads, free options can exist but there will be ads on the site that users would need to see.
        4. Support, clients and companies can pay a premium of $25.00 a month for 24/7 support.

        
- Tasks:
    - Finish the fundamentals, right now treat the program like it just a ticketing system for one company and finish that.
        - Add encrypted and secure admin logon and protected routes.

        LOGON PAGE:
            - Send encrypted logon details to server, use secure authentication system on server to verify LOGON info, and validate it.
            - Update the client side token to make it so the logon is true, so you can access the /tickets route on the URL header.


        TICKETING MANAGEMENT PAGE:
            - Create the ticketing management page.
                - Send querys to the mySQL DB to request all the current tickets be displayed as a table on the page.
                    - The table should have columns for firstName, lastName, Phone, Email, and Request.
                    - The table should also have buttons and check boxes for each column.
                        - Completed button: Completes the ticket, sends a request to delete that item from the DB.
                        - In Progress Check Box: Sends query to DB to mark the item as in progress
                            ** This could be done by creating a new field in the DB called progress thats a boolean and marking that as NULL always.
                                - Once the check box is checked the field updates to true, and that ticket turns orange
                        - Escalation Button: Used to escalate the ticket to a higher ranking IT Personel.
                            ** Done the exact same way the progress check box is done.
                                - Makes the ticket turn red, to alert the IT staff its an escalted support ticket that has been updated.
		- COMPTIA A+ TROUBLESHOOTING STEPS: 
		    - Implement a way to log how the IT professional resolved the help desk ticket.
		    - Log the issue, the steps used to solve it, for future reference for IT staff. 

        ENTERPRISE USE:
            - Once you finish all of the above, you can start implementing the enterprise functionality of it.

            COMPANY ACCOUNT CREATION:
                - Create a page that lets a company create its own account, for tickets to be sent to there page.
                    - Company accounts will have a unique url for there ticketing management system.
                    - Additionally each company will have its own requests route
                        - Users that send requests using that route will send requests to the client.

                
            PREVENT FAKE TICKET REQUESTS FROM USERS OF DIFFERENT COMPANIES:
                - We will need to ensure that users cannot send ticket requests to a company they do not work for.
                - Users will create there own accounts
                    - The accounts will ask for a company ID, this ID is given to the company when they create an account.
                    - additionally the ticket requests page will ask for a company code
                        - this is a code that companies can update to ensure the privacy and safe use of there ticketing page.
                
            PAYMENT SYSTEM:
                - Find a way, possibly with strip to make companies pay a monthly or yearly subscription to use the accounts and ticketing system.
                - If payment does not go through give them a warning, after 3 warning delete account.

    - Completed:

        - Requests Page:
            - Create front end client side page to send requests to t he server for each tickets.
            - mySQL DB, created the database that handles all of the requests.
            - Logon and ticket routes are protected
            - Logon and ticket rooutes work via nodeJS now


            
                            
                        
