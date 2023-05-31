//  Import our Message.tsx
//  We commented this out because we will use bootstrap
// import Message from "./Message"

//  Bootstrap: ListGroup
import ListGroup from "./components/ListGroup";

//  Bootstrap: Alert
import Alert from "./components/Alert";

//  Root Component
function App() {
  //  If we are using Message.tsx
  // return <div><Message /></div>

  //  For passing data to via props
  // let items = ["Manila", "Cavite", "Pampanga", "Tarlac", "Quezon"];

  //  For separate event handler on passing function via props
  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  //  Use ListGroup.tsx
  //  If you don't want to use props:
  //    - remove items, heading, onSelect, and similar things
  //      passed to the ListGroup
  // return (
  //   <div>
  //     <ListGroup
  //       items={items}
  //       heading="Cities"
  //       onSelectItem={handleSelectItem}
  //     />
  //   </div>
  // );
  //    =========================================================
  //    Passing Children
  //
  return (
    <div>
      <Alert>
        Wehhhh <span>Ngek</span>
      </Alert>
    </div>
  );
}

//  - When our application starts, our root component will be "App"
//  and its components (i.e. Message) will be the child.
//  - React will take this component tree and build it into a Javascript
//  Data Structure called the Virtual Dom.
//  - This Virtual Dom is different from the actual Dom in the browser,
//  it is a lightweight in-memry representation of our component tree.
//  - Each node will represent a component and its properties.
//  - The updating of the nodes are done by the react DOM library.
export default App;
