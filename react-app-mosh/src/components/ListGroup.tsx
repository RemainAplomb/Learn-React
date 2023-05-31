//  Import Fragment
//  If you are using Fragment
// import { Fragment } from "react";

//  Importing MouseEvent
//  This is for handling event related to mouse events
import { MouseEvent } from "react";

// Importing useState for Hooks
import { useState } from "react";

//  This is to pass Data via Props
interface ListGroupProps {
  items: string[];
  heading: string;

  //    We want a function that (item: string) => void
  onSelectItem: (item: string) => void;
}

//  Use this if you don't want to pass data to the ListGroup
// function ListGroup() {

//  Use this if you want to pass data to the ListGroup using
//  the interface ListGroupProps
// function ListGroup(props: ListGroupProps) {

//  Use this if you want to destructure the props
// function ListGroup({ items, heading }: ListGroupProps) {

//  Use this if you want to pass a function via props
function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  //    =========================================================
  //   return <h1>List Group</h1>;
  //    =========================================================
  //    class is a reserved keyword
  //    As such, rename class to className
  //    This is taken from bootstrap site:
  //        - https://getbootstrap.com/docs/5.3/components/list-group/
  //   return (
  //     <ul className="list-group">
  //       <li className="list-group-item">An item</li>
  //       <li className="list-group-item">A second item</li>
  //       <li className="list-group-item">A third item</li>
  //       <li className="list-group-item">A fourth item</li>
  //       <li className="list-group-item">And a fifth one</li>
  //     </ul>
  //   );
  //    =========================================================
  //    In react, a component cannot return more than 1 element
  //    As such, if we have multiple elements, we usually need
  //    to wrap them inside a parent element. You can do this...
  //    ---------------------------------------------------------
  //    Command Pallete
  //        - Windows: Ctrl + Shift + P
  //    Search for wrap with abbreviation -> div
  //    This will wrap your selected elements to a div
  //   return (
  //     <div>
  //       <h1>List</h1>
  //       <ul className="list-group">
  //         <li className="list-group-item">An item</li>
  //         <li className="list-group-item">A second item</li>
  //         <li className="list-group-item">A third item</li>
  //         <li className="list-group-item">A fourth item</li>
  //         <li className="list-group-item">And a fifth one</li>
  //       </ul>
  //     </div>
  //   );
  //    ---------------------------------------------------------
  //    Or you can use Fragments
  //        - Wrap your multiple elements in Fragments
  //    This will prevent the creation of a parent element
  //   return (
  //     <Fragment>
  //       <h1>List</h1>
  //       <ul className="list-group">
  //         <li className="list-group-item">An item</li>
  //         <li className="list-group-item">A second item</li>
  //         <li className="list-group-item">A third item</li>
  //         <li className="list-group-item">A fourth item</li>
  //         <li className="list-group-item">And a fifth one</li>
  //       </ul>
  //     </Fragment>
  //   );
  //    ---------------------------------------------------------
  //    But there's a better solution
  //    That is to add empty angle brackets ( i.e. <>SomeElements</>)
  //    This will automatically tell react to use fragments
  //   return (
  //     <>
  //       <h1>List</h1>
  //       <ul className="list-group">
  //         <li className="list-group-item">An item</li>
  //         <li className="list-group-item">A second item</li>
  //         <li className="list-group-item">A third item</li>
  //         <li className="list-group-item">A fourth item</li>
  //         <li className="list-group-item">And a fifth one</li>
  //       </ul>
  //     </>
  //   );
  //    =========================================================
  //    Rendering List
  //    Just a reminder:
  //        - In JSX, we don't have a for loop
  //    We have to use map function, and put it inside curly braces
  //    To avoid this warning:
  //        - Each child in a list should have a unique key
  //    We should do:
  //        - add key={item}
  //        - or if you are using APIs, you can sometimes use the
  //          given ID. Like this key={item.id}
  //   const items = ["Manila", "Cavite", "Pampanga", "Tarlac", "Quezon"];
  //   return (
  //     <>
  //       <h1>List</h1>
  //       <ul className="list-group">
  //         {items.map((item) => (
  //           <li key={item}>{item}</li>
  //         ))}
  //       </ul>
  //     </>
  //   );
  //    =========================================================
  //    Conditional Rendering
  //   let items = ["Manila", "Cavite", "Pampanga", "Tarlac", "Quezon"];
  //   items = [];
  //   if (items.length === 0)
  //     return (
  //       <>
  //         <h1>List</h1>
  //         <p>No item found</p>
  //       </>
  //     );
  //   return (
  //     <>
  //       <h1>List</h1>
  //       <ul className="list-group">
  //         {items.map((item) => (
  //           <li key={item}>{item}</li>
  //         ))}
  //       </ul>
  //     </>
  //   );
  //    ---------------------------------------------------------
  //    You can also use constant to write neat code and avoid
  //    duplication.
  //   const message = items.length === 0 ? <p>No item found</p> : null;
  //   return (
  //     <>
  //       <h1>List</h1>
  //       {message}
  //       <ul className="list-group">
  //         {items.map((item) => (
  //           <li key={item}>{item}</li>
  //         ))}
  //       </ul>
  //     </>
  //   );
  //    ---------------------------------------------------------
  //    If you want to use variables, use a function
  //   const getMessage = () => {
  //     return items.length === 0 ? <p>No item found</p> : null;
  //   };
  //   return (
  //     <>
  //       <h1>List</h1>
  //       {getMessage()}
  //       <ul className="list-group">
  //         {items.map((item) => (
  //           <li key={item}>{item}</li>
  //         ))}
  //       </ul>
  //     </>
  //   );
  //    ---------------------------------------------------------
  //    To avoid returning null, we can do this
  //        - Use a [logical expression] && [something to return/execute]
  //    Example "items.length === 0 && <p>No item found</p>":
  //        - if "items.length === 0", then it will return
  //          <p>No item found</p>
  //        - if not "items.length === 0", then it will return
  //          false
  //   return (
  //     <>
  //       <h1>List</h1>
  //       {items.length === 0 && <p>No item found</p>}
  //       <ul className="list-group">
  //         {items.map((item) => (
  //           <li className="list-group-item" key={item}>
  //             {item}
  //           </li>
  //         ))}
  //       </ul>
  //     </>
  //   );
  //    =========================================================
  //    Handling Events
  //   let items = ["Manila", "Cavite", "Pampanga", "Tarlac", "Quezon"];
  //   items = [];
  //    ---------------------------------------------------------
  //    In react, each element has a property or prop called
  //    onClick
  //   return (
  //     <>
  //       <h1>List</h1>
  //       {items.length === 0 && <p>No item found</p>}
  //       <ul className="list-group">
  //         {items.map((item, index) => (
  //           <li
  //             className="list-group-item"
  //             key={item}
  //             onClick={() => console.log("Pressed: " + item, index)}
  //           >
  //             {item}
  //           </li>
  //         ))}
  //       </ul>
  //     </>
  //   );
  //    ---------------------------------------------------------
  //    Exploring events
  // return (
  //   <>
  //     <h1>List</h1>
  //     {items.length === 0 && <p>No item found</p>}
  //     <ul className="list-group">
  //       {items.map((item, index) => (
  //         <li
  //           className="list-group-item"
  //           key={item}
  //           onClick={(event) => console.log(event)}
  //         >
  //           {item}
  //         </li>
  //       ))}
  //     </ul>
  //   </>
  // );
  //    ---------------------------------------------------------
  //    Using a constant to handle events
  //    If you get this warning:
  //        - Parameter 'event' implicitly has 'any' type
  //    Do this:
  //        - Import mouse event
  //        - [paramter] : [type of the parameter]
  //        - event : MouseEvent
  //        - This is called type annotation in TypeScript
  //   const handleClick = (event: MouseEvent) => console.log(event);
  //   return (
  //     <>
  //       <h1>List</h1>
  //       {items.length === 0 && <p>No item found</p>}
  //       <ul className="list-group">
  //         {items.map((item, index) => (
  //           <li className="list-group-item" key={item} onClick={handleClick}>
  //             {item}
  //           </li>
  //         ))}
  //       </ul>
  //     </>
  //   );
  //    =========================================================
  //    Managing State
  //   let items = ["Manila", "Cavite", "Pampanga", "Tarlac", "Quezon"];
  //    ---------------------------------------------------------
  //    If you don't want to initialize to any index, set it to -1
  //    Since this is a local variable, react will not be able to
  //    properly keep track of it.
  //   let selectedIndex = 0;
  //
  //    When we click on an item, we want to highlight it
  //    To do that, we have a CSS class in bootstrap to help us.
  //    This is called active
  //   return (
  //     <>
  //       <h1>List</h1>
  //       {items.length === 0 && <p>No item found</p>}
  //       <ul className="list-group">
  //         {items.map((item, index) => (
  //           <li
  //             className={
  //               selectedIndex === index
  //                 ? "list-group-item active"
  //                 : "list-group-item"
  //             }
  //             key={item}
  //             onClick={() => {
  //               selectedIndex = index;
  //             }}
  //           >
  //             {item}
  //           </li>
  //         ))}
  //       </ul>
  //     </>
  //   );
  //    ---------------------------------------------------------
  //    To be able to keep track of the state, we need to use a hook.
  //    State hook is just one of the many types of hooks.
  //    The hook will tell react that the data will change over time
  //   const [selectedIndex, setSelectedIndex] = useState(-1);
  //    States will tell react to update the DOM to match the new
  //    updated component of State
  // arr[0]; // variable (selectedIndex)
  // arr[1]; // updater function
  //    States will tell react to update the DOM to match the new
  //    updated component of State
  //    Note:
  //        - Each element will have its own state
  //   return (
  //     <>
  //       <h1>List</h1>
  //       {items.length === 0 && <p>No item found</p>}
  //       <ul className="list-group">
  //         {items.map((item, index) => (
  //           <li
  //             className={
  //               selectedIndex === index
  //                 ? "list-group-item active"
  //                 : "list-group-item"
  //             }
  //             key={item}
  //             onClick={() => {
  //               setSelectedIndex(index);
  //             }}
  //           >
  //             {item}
  //           </li>
  //         ))}
  //       </ul>
  //     </>
  //   );
  //    ---------------------------------------------------------
  //    Passing Data Via Props
  //   let items = ["Manila", "Cavite", "Pampanga", "Tarlac", "Quezon"];
  //    Let's make it so that we can pass { items: [], heading: string}
  //    To do that we should use Interface
  //    Refer to the interface ListGroupProps outside this function
  //    When using the ListGroup Props, you might encounter this:
  //        - Type '{}' is missing the following properties from type
  //          'ListGroupProps': items, heading
  //    To solve this:
  //        -  Move the items array to the App.tsx, and pass it to
  //           the ListGroup element
  //   const [selectedIndex, setSelectedIndex] = useState(-1);
  //   return (
  //     <>
  //       <h1>{heading}</h1>
  //       {items.length === 0 && <p>No item found</p>}
  //       <ul className="list-group">
  //         {items.map((item, index) => (
  //           <li
  //             className={
  //               selectedIndex === index
  //                 ? "list-group-item active"
  //                 : "list-group-item"
  //             }
  //             key={item}
  //             onClick={() => {
  //               setSelectedIndex(index);
  //             }}
  //           >
  //             {item}
  //           </li>
  //         ))}
  //       </ul>
  //     </>
  //   );
  //    ---------------------------------------------------------
  //    Passing Function via Props
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
  //    ---------------------------------------------------------
  //    Properties vs States
  //
  //    Properties/Props:
  //        - Input passed to a component
  //        - Similar to function arguments/args
  //        - We should treat props as immutable. This means that
  //          it should only be read-only. We should not set its
  //          value inside the function to another value. If you do
  //          this, it will be an anti-pattern in react
  //    State:
  //        - Data managed by a component that can change over time
  //        - Similar to local variables inside a function
  //        - State is mutable, its data can change overtime
  //    Similarities:
  //        - Everytime both of these changes, react will re-render
  //          the DOM.
  //    =========================================================
  //    =========================================================
}

export default ListGroup;
