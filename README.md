npm install -g @angular/cli@15  // If you have angular 15 and more version it will work
ng serve
Mostly the above commands is enough to run my app.
if you are facing issue in dependency injection kindly run these commands:
Dependencies : 
npm install typescript@4.9.5 --save-dev  - typescript version mismatched
npm install ng2-charts@4 chart.js@4 - charts version mismatched
npm install ngx-toastr@15.0.0
npm install ngx-toastr @angular/animations - toaster version mismatched
npm install @angular/flex-layout@15.0.0-beta.42 @angular/cdk@15 - flex-layout for responsive design version mismatched
ng serve

Project Overview : 

This project includes two main components:

Dashboard Component

Investment Form Component

Application Structure :

The main AppComponent contains two tabs:

Dashboard

Add Investment

When the application initially loads, the Dashboard Component is rendered by default using Angular’s RouterOutlet.

Dashboard Component Features :

Displays charts and a grid/list view of investment data.

Investment data is fetched from the PortfolioService where it has been stored.

A custom pipe is used to convert the purchase price into Indian currency format.

Charts are generated using the quantity property of the investment data.

The purchase date of each investment is displayed using Angular’s built-in Date pipe for proper formatting.

Investment Form Component Features :

A user form is implemented to capture investment details.

Built-in form validation is applied for all required fields.

Includes a field called accessType, which uses a custom directive:

On mouse hover over the input box, the background color changes.

Designed using Flex Layout for a responsive design, including optimized layout for mobile view.

A review page is provided before final submission:

The entered data is pre-populated on the review page.

Users can verify and preview all inputs before submitting.

Once submitted:

The data is pushed into an array in the PortfolioService for storage.

