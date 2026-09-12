Choose your ideal stack and level up skillfull.


Discover modern web technologies and build your ideal tech stack. Explore frontend, backend, database, and development tools to strengthen your skills, expand your knowledge, and level up as a developer.


Technologies Used

React.js
 JavaScript (ES6+)
 Tailwind CSS
Vite
 React Hooks
 Promises & API Data
 Responsive Design
 Git & GitHub

 1. Explore Technologies

Browse different technologies like frontend, backend, database, popular, and trending technologies, from beginner to advanced levels.

2. Build Your Technology Stack

Choose your favorite stack through cards and prepare yourself for the next level.

3. Fully Responsive Design

The application is designed for all devices with full responsiveness. You may enjoy it.


Answer these React question

1.Jsx is JavaScript XML or extended js.its slightly difference not fully js or html.it allows to write html inside js file.

2.Props is property inside component it can move from parent to child component but state is a varible .state store data and update it  when state changes.

3.Usestate is a react hook.it can update data via functional component as per client or user interection.
i use it in technologies.jsx file .by using it i manage my stack in card and could add stack properly.

4.Useeffect is a react hook .by using it we can fetch data ,update data.api call.its actually side effect of afunctional component.it has an dependency array.

5.unique key prop is a unique identifier system of react map method.by using it react map method can track add,update,remove system. 

6.Conditional rendering means showing different UI elements based on a condition. In React, we can use conditions such as if, ternary operators, or && to decide what should be displayed.
{selectedTech.length > 0 ? (
    <>
        <ul>
            {selectedTech.map((tech) => (
                <li key={tech.id}>
                    {tech.name}
                </li>
            ))}
        </ul>

        <button>Remove All</button>
    </>
) : (
    <p>No Stack selected yet.</p>
)}

7.Parent → Child: Pass data using props.
Child → Parent: Pass a callback function as a prop, then call that function from the child.