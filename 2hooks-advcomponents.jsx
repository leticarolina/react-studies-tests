//-------------------------- 23.VIRTUAL DOM --------------------//What is the virtual DOM?
// — The Virtual DOM is a lightweight recreation of the normal DOM, React create this copy on mount and stores it in memory.
// So on each re-render, React updates the existing virtual DOM and then compares it with the previous virtual DOM to evaluate what has changed,
// after identifying the changes React updates on the actual DOM only those elements.
// This makes updates much quicker than doing a blank replacement of every single element of the DOM,
//since making changes to the actual DOM can be very slow because it has to go through and recalculate how to things are positioned due to CSS,
// and overall there are a lot of steps the browser needs to take to render something to the screen.
// How it works:
// 	1. On mount, React creates a virtual DOM representation.
// 	2. On re-render, React compares the virtual DOM with the previous one to identify changes.
// 	3. applies only the necessary changes to the real DOM.

//-------------------------- 24.COMPONENT LIFECYCLE --------------------//
//Terminology
//1.mountain =  When a component is first rendered and added to the DOM.
//2.rerender = When a component updates due to changes in its state or props.
//3. unmountain = when component is removed from the DOM.

//note: the only way a component can be re-rendered is when the state of that component or it's parent changes.
////Can also rerender due to other factors such as changes in context or force updates.

//-------------------------- 25.useEffect Hook --------------------//
//useEffect is a function that takes a function as arguments
//and this nested function will run after the dependency array changes
//if no dependency array declared the useEffect will run after every render

//example of use effect with no dependency array
function App() {
  useEffect(() => {
    console.log("here");
  });
} //every refresh logs "here"

//the second parameter that function useEffect takes is an array with some value [variable],
//anytime value of variable declared on this array changes then it will rerun useEffect
//dependency array can take more than one value, if dependency array is empty it will run only on mount
function App() {
  const [name, setName] = useState("Leticia");
  useEffect(() => {
    console.log("here");
  }, [name]); //will log here everytime [name] is updated

  return (
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
  );
}

//EXERCISE: useEffect will fire everytime only the age has changed,console.log useEffect + value changed
function App() {
  const [name, setName] = useState("Leticia");
  const [age, setAge] = useState(0);

  useEffect(() => {
    console.log("Age has changed", age); //age = logging out the current value already updated
  }, [age]); // [age] saying what change of value will trigger useEffect to rerun

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
    </div>
  );
}

//if you pass empty array on the depedency array, it will run only on mountain stage
useEffect(() => {
  console.log("mount");
}, []);

//another example
//code below: everytime the window rezise it will show its width
function App() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);

  return <div>{width}</div>;
}

//RETURN STATEMENT ON USEEFECT (cleanup function)
//(the return function from useEffect) gets called first every single time your useEffect would re-run or the component unmounts, and it is called right before the useEffect is re-run.
// Return is useful anytime that you have an action that needs to be reversed when the component unmounts or the effect re-runs.

//example removing the event listener everytime time the useEffect reruns
//result: it won't log every little change on an input but final result when user click outside input
//essentially removing the last run and updating it with most recent run
//to achieve this need to set return function inside useEffect after 1st function
function App() {
  const [name, setName] = useState("");

  useEffect(() => {
    const handler = () => {
      console.log(name);
    };

    document.addEventListener("click", handler);

    //on rebuild, return will run first before code above,this is considered the cleanup function
    return () => {
      document.removeEventListener("click", handler);
    };
  }, [name]);

  return (
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
  );
}

//notes: you shouldn't put objects directly in the dependency array because it compares dependencies using referential equality, not by the value of the object.
// when using addEventListener inside a useEffect hook, it's a good practice to include a cleanup function in the return statement to remove the event listener.
//This ensures that the event listener is properly removed when the component unmounts or when the dependencies change

//-------------------------- 31. STRICT MODE --------------------//
//strict mode is good for detecting and checking hidden bugs
// using strict mode, the component will
//1. mount simulation
//2. unmount simulation
//3. then mount it again
//this is only a development tool to try detect hidden bugs on the code
//when deplying the site, strict mode will not run
//its recommended to keep strict mode enable

//it is possible to remove the second log from strcit mode
//1.go to settings into react dev tools
//2. enable "hide logs during second render strict mode"

{
  /*
  The reason StrictMode double renders is because the way React renders components and handles
  things for you, it does not guarantee that your component will only run once per render. For example,
  if something happened that caused your component to need to re-render in the middle of it already trying
  to re-render (or if React decides to cancel and restart a re-render because of something that happens)
  it could cause your variables to become out of sync if you write them like globalVar. This is because if your 
  component runs twice but only renders once (like in the case of StrictMode) it will cause your state to be out of sync.
  */
}

//-------------------------- 32.FETCHING DATA FROM API --------------------//
//having the fetch() inside a useEffect is better practice , so it runs only on mount

//example simple fetching the API
useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((APIresponse) => APIresponse.json())
    .then((data) => console.log(data)); //
}, []); //(10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]

//basic useEffect fetch, without catching errors
//IMPORTANT!!!!  Wait response from fetch before rendering API
// when fetching need to make sure you have a loading state to track the API fetch
// otherwise it can return undefined if API hasn't completely returned yet
export function FetchingUsers() {
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(true);
  let content;

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // if needed use JSON.stringify when rendering.
  loading ? (content = "Loading...") : (content = JSON.stringify(users));

  return <h3>{content}</h3>;
}

//fetching API and catching errors
function App() {
  //Setting useState to put the api data inside this variable
  const [users, setUsers] = useState();
  //creating the loading to track API return and avoid undefined return
  const [loading, setLoading] = useState(true);
  //creating the error useState
  const [error, setError] = useState();

  //fetching the API
  useEffect(() => {
    setLoading(true); //loading set to true before fetching (because it starts loading)
    setError(undefined); //can declare this to make sure error is initially empty
    const controller = new AbortController(); // object that allows you to abort one or more Web requests when desired.
    //using an AbortController can be beneficial if you need to cancel fetch requests, especially in scenarios where a component unmounts or when a new fetch request should override the previous one.

    fetch("https://jsonplaceholder.typicode.com/users", {
      signal: controller.signal, // Pass 'controler' signal to the fetch request
    })
      .then((response) => {
        if (response.status === 200) {
          //checking to see if response is true, .status === 200 means the request was successful
          return response.json(); //parsing/creating a json from API link response if successful
        } else {
          return Promise.reject(response); //if not successfull, we reject as an Error
        }
      })
      .then((data) => setUsers(data))
      .catch((err) => {
        if (err?.name === "AbortError") return; //checking if error is not related to the abort of double mounting due to strict mode
        setError(err); //error is being caught here on .catch, then set error will have a value and wont be null
      })
      .finally(() => {
        setLoading(false); //loading set to false after done fetching
      });

    // Cleanup function to abort fetch request when component unmounts
    return () => {
      controller.abort(); // Abort the fetch request
    };
  }, []);

  //variable that will store data from API
  let usersRender;

  if (loading) {
    usersRender = <h2>Loading...</h2>;
  } else if (error != null) {
    //if the error useState is not emprty, means there was an error passed
    usersRender = <h2>There was an error fetching the API</h2>;
  } else {
    //passing from .json into an string
    usersRender = JSON.stringify(users);
  }

  console.log(users);
  return (
    <div>
      <h1>Users</h1>
      {usersRender}
    </div>
  );
}

//-----------------------------------------------------------
//SAME way to fetch but using a async / await | try / catch approach
// code from course
function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          { signal: controller.signal }
        );
        if (!response.ok) {
          throw new Error(`API call was not ok (${response.status})`);
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        if (err.name === "AbortError") {
          return;
        }
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    //cleanup to abort fetch request and avoid fetching twice
    return () => {
      controller.abort();
    };
  }, []);

  //from down here same code as previous example
}

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
//short circuiting > will return the last thing inside statement if last statement is true
//basically saying if there is a value(true) for favoriteNumber continue, if not(false) then it returns last true
{
  favoriteNumber !== null && `My number is ${favoriteNumber}`;
}
{
  return favoriteNumber < 5 && `My favorite number is ${favoriteNumber}`;
}

//can also declare based on favoriteNumber value, inline if statement (ternary operator)
//syntax --- variable/statement to check ? code if true : code if false
export function numberChecker({ favoriteNumber }) {
  favoriteNumber != null
    ? (favoriteNumber = <h1>my favorite number is {favoriteNumber}</h1>)
    : (favoriteNumber = null);

  return favoriteNumber;
}

//another example
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
//renderinf an array

//possibility of rendering elements that are inside an array
export function List() {
  //this is a usestate that holds an array of objects
  //crypto.randomUUID() generate a random unique ID
  const [items, setItems] = useState([
    { id: crypto.randomUUID(), name: "First Item" },
    { id: crypto.randomUUID(), name: "Second Item" },
  ]);
  const [text, setText] = useState("");

  //function to create new object and append to useState
  //and return prev objects plus the new one created

  function addItem() {
    setItems((currentItems) => {
      return [...currentItems, { id: crypto.randomUUID(), name: text }];
    });
  }

  return (
    <div>
      <input
        className="bg-blue-300 mx-2"
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button onClick={addItem} className="bg-slate-300">
        Add New Item
      </button>
      {/* mapping the items and returning name + input of each object
        each item HAS to have a key, in order to input be tied to that item only */}
      <ol>
        {items.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ol>
    </div>
  );
}

//TIP: if new Item + input is a separate component to be imported, the key has to be set when calling the component to render
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
//a way react implemented to return multiple elements without having to wrap them inside html element like a div
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

//if you need to declare a key like previous lesson  key={item.id} the empty fragment cannot take it
//need to use element as React.Fragment and import "React" on file
// can also write only Fragment and import Fragment
{
  <React.Fragment key={item.id}>
    <button>Click</button>
    <input type="text"></input>
  </React.Fragment>;
}
s;
//----------------------- 40. RENDER RAW HTML --------------------//
//a way to render html that is on a string format inside react

//html in a string to be rendered
const CUSTOM_URL = `<h1>Leticia Carolina Azevedo</h1>
  <div>this is my name</div>`;

function App() {
  //syntax dangerouslySetInnerHTML={{ __html: variable }}
  return <div dangerouslySetInnerHTML={{ __html: CUSTOM_URL }}> </div>;
}

//NOTES: this is not very common to use
//syntax is dangerous bcs if you have any user input on the stringified html you open room for "cross site scripting" and the site to be hacked

function App() {
  const [age, setAge] = useState(0);

  useEffect(() => {
    console.log("Age changed", age);
  }, [age]);

  return (
    <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
  );
}
