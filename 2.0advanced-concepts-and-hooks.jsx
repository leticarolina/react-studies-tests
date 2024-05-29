//---------- 2. Portals------------------
//used to render content outside the normal DOM hierarchy.

//portals will be used to render a child component into different parts of the DOM  tree.
//when to use react portals:
//1. modals on the screen , 2. tooltips, 3. Dropdowns
//all of these may require rendering outside the parent component to manage positioning correctly.

//check component 'PortalsAlertMessage.jsx" for code example. /Users/admin/Documents/GitHub/react-studies-tests/react-studies-test/src/components/PortalsAlertMessage.jsx

//--------------- 3. fowardRef ----------------------
//it is linked with the useRef hook.
//It's used when you want to pass a ref to a custom component.
function App() {
  const nameRef = useRef();
  // const [name, setName] = useState("");

  //component is rerendering everytime the input changes and we don't need that
  useEffect(() => {
    console.log("render");
  });

  function handleSubmit(e) {
    e.preventDefault();
    const name = nameRef.current.value;
    if (name === "") return;

    alert(`Name: ${name}`);
  }
}
