//-------------------------- 33. REACT DEV TOOLS --------------------//
//https://courses.webdevsimplified.com/view/courses/react-simplified-beginner/1764771-advanced-components/5836199-33-react-dev-tools

//-------------------------- 34. CONDITIONAL RENDERING --------------------//
//rendering something based on other type of input
//using ternary operator instead of if statement

//if statement
let favoriteNumber = 16;
let jsx;
if (favoriteNumber !== null) {
  jsx = `My number is ${favoriteNumber}`;
}
//short circuiting, will return the last thing inside statement if last statement is true
//basically saying if there is a value(true) for favoriteNumber continue, if not(false) then it returns
{
  favoriteNumber !== null && `My number is ${favoriteNumber}`;
}
//can also declare based on favoriteNumber value, inline if statement (ternary operator)
//syntax variable/statement to check ? code if true : code if false
{
  favoriteNumber > 5
    ? `My fav number big ${favoriteNumber}`
    : `My fav number small ${favoriteNumber}`;
}
//can return anything doesnt necessary has to be a string, reccomended to not get too complex code inside
{
  favoriteNumber > 5 ? (
    <div>
      This is <h1>big</h1>
    </div>
  ) : (
    `My fav number small ${favoriteNumber}`
  );
}

//-------------------------- 35. RENDERING LISTS--------------------//
//possibility of rendering elements that are inside an array
function App() {
  //this is an array
  const [items, setItems] = useState([
    { id: crypto.randomUUID(), name: "Item 1" },
    { id: crypto.randomUUID(), name: "Item 2" },
  ]);

  //function to create new object
  function addItem() {
    setItems((currentItems) => {
      //and return prev objects plus the new one created
      return [{ id: crypto.randomUUID(), name: "New Item" }, ...currentItems];
    });
  }
  return (
    <div>
      <button onClick={addItem}>Add new Item</button>{" "}
      {items.map((item) => {
        //mapping the items and returning name + input of each object
        //each item HAS to have a key, in order to input be tied to that item only
        return (
          <div key={item.id}>
            {item.name}
            <input type="text" />
          </div>
        );
      })}
    </div>
  );
}

//TIP: if case above the new Item name + input is a separate component to be imported, the key has to be set when calling the component to render
{
  items.map((item) => {
    return (
      <div>
        <ComponentItem key={item.id} />
      </div>
    );
  });
}

//-------------------------- 36. FRAGMENTS --------------------//
//a way react implemented to return multiple elements without having to wrap them inside a div
//fragment is an empty element that allows to wrap multiple elements inside
{
  <div>
    <button>Click</button>
    <input type="text"></input>
  </div>;
}
//using fragments
{
  <>
    <button>Click</button>
    <input type="text"></input>
  </>;
}

//if you need to declare a key like previous lesson  key={item.id} the empty fragment cannot take
//need to use element as React.Fragment and import React on file, can also write only Fragment and import Fragment
{
  <React.Fragment key={item.id}>
    <button>Click</button>
    <input type="text"></input>
  </React.Fragment>;
}
