# QUESTIONS

## 1. How do relative, fixed, absolute, and statically positions differ?

The way they differ is mainly on how they position an element in the DOM and it's interactivity with other elements.

### - Relative

With this attribute the element can be positioned in a different place relative to itself by using the top, left, bottom and right attributes.

### - Fixed

With the fixed attribute the elements position is fixed relative to the browsers viewport, so even if the page is scrolled it will stay in the same position. To position the element the attributes top, left, bottom and right are used.

### - Absolute

With the absolute attribute can be positioned in a different place relative to the closest parent element with relative or absolute position by using top, left, bottom and right. If no parent has such attribute it will use the html element as its reference meaning it will use the page itself to place himself.

### - Static

This is the default for the position attribute, with it the element will position itself in order to other elements's position. It will ignore the attributes top, left, bottom and right.

## 2. What is the difference between variables created using let, var, and const?

The difference lies in their scope and wether the variable can be redeclared and/or reassigned:

### - Var

Variables declared with var have a global scope if declared outside a function or a function scope if declared inside a function. They can be both redeclared and reassigned.

### - Let

Variables declared with let have a block scope, meaning they can only be accessed inside the block of code (within curly braces) where the variable was declared. They cannot be redeclared but they can be reassigned.

### - Const

Variables declared with const also have a block scope but the difference with let is that it cannot be redeclared or reassigned. Also, with const variables their value must be initialized.

## 3. What must be developed first, desktop or mobile view, and why?

Since smartphones have become mainstream in the world and are considered the majority of internet users, it is beneficial to improve the UI/UX on mobile first. By doing so, you open your app to a bigger public demographic and with it more potential clients. But with mobile comes the limitation of a smaller view space, so there is a need to prioritize the information to be shown to the users, making us developers have to streamline the app's interface and content.

## 4. What is the difference between an alert and an alert dialog? Also, walk us through the appropriate instances to use them.

The difference between an alert and an alert dialog is that alert dialog is an ARIA role that should be used for markup of dialogs (HTML modals) which require urgent user response, while alert is a JavaScript function that shows an alert box, which is often used to warn users with a defined message.
It is preferred to use HTML modals than JavaScript alert, since JavaScript alerts are very limited on styling and they block the use of the browser until attended. That is why html modals with alert dialog roles are better suited for use cases where alert box could be used in web development.

## 5. What is the difference between a link, a generic button and a submit button? Walk us through the appropriate instances to use them.

The difference is in their usage. Best practice to use links is for navigation in or between pages. Buttons are used for actions, like opening a modal, or searching. Specifically, the submit type button is used to submit a form data.

## 6. React (how the component cycle works, if you have experience with Redux Reducers/Actions, Webpack, code efficiency, optimization, and performance).

React components have three main phases for its lifecycle:

### - Initialization

This is the phase where the component gets constructed with given props (if there are any) and default state.

### - Mounting

This is the phase where elements get put into the DOM. The functions involved in this phase are componentWillMound() and componentDidMount().

### - Updating

This is the phase where the components state updates or changes based on user interaction with the react components (like a button click). Some of the functions involved in this phase are componentWillReceiveProps(), shouldComponentUpdate(), componentWillUpdate(), componentDidUpdate().

### - Unmounting

This is the final phase where components get unmounted from the DOM. The function involved with this phase is componentWillUnmount().

Continuing with the question, I have some experience with Redux in React, specifically with Redux Toolkit which simplifies reducers and actions implementations with hooks. Redux is a very useful JavaScript library that lets you manage state in a centralized way, helping with the management of complex states in an app. I have worked in two apps that used Redux for it's state management, [**TUQUIPU**](https://github.com/mrff88/tuquipu-frontend) and [EVENTOPS](https://github.com/mrff88/grupo-4/tree/main/eventops), projects which I worked on the full stack bootcamp that I finished last month.

As for webpack, code efficiency, optimization and performance I have to admit to not have much experience with them but I keep on learning and improving my skills as a front end developer every day, always searching for best practices in web development.
