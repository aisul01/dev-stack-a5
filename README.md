# Project Name 
Dev stack

Dev stack is a simple and modern web application where developers can explore different technologies and build their own technology stack.

## Technologies Used
1. React.js
2. Tailwind CSS, DaisyUI
3. TypeScript / JavaScript (ES6+)
4. React-Toastify (NPM Package)
5. JSON (for technology data)
6. Vite (build tool)
7. HTML 

##  My Project Features
1. Users can see different technologies and their information.
2. Users can add technologies to their stack and remove them.
3. The website works on desktop, tablet, and mobile devices.



# Answer to question
1. What is JSX, and why is it used in React?

Ans: JSX help us write the structure of our react ui in and readable way.

2. What is the difference between props and state?

Ans: Props means data comes from the parent. Props are read only.
and
State means data is managed inside the component. Inside data in component you can change over time.

3. What does the useState hook do, and where did you use it in this project?

Ans: useState helps my project remember changing data.

4. What does the useEffect hook do, and why did you need it to load the JSON data?
Why does every item in a .map() list need a unique key prop?

Ans: useEffect is used to handle side effects in react. i needed it to fetch the technology data from data.json when my application loaded.

The key prop gives each list item a unique identity. React uses it to identify and update list items when the ui changes

5. What is conditional rendering? Show one place you used it (example: the empty stack message).

Ans: conditional rendring means displaying something in the ui only when a condition is true. In my project, i used it to show the "No technology selected yet" message when the stack is empty.

6. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

Ans: A parent passes data to a child using props. If the child needs to send something back, and the child calls that function with the requiredd data.