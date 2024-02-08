//-------------------------- 55. Form Basics--------------------//
//-------------------------- 55. Form Basics--------------------//
//-------------------------- 55. Form Basics--------------------//

function App() {
  const [inputValue, setInputValue] = useState();

  function preventDefault(e) {
    // the onSubmit function called need to have the e.preventDefault() declared
    e.preventDefault();
  }

  return (
    <>
      {/* if using a form need to declare onSubmit={function here} */}
      <form onSubmit={preventDefault} id="new-form">
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          value={inputValue}
          placeholder="Full Name"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <br />
        <br />

        {/* selecting the default value of options  <select value="2"> cannot change to another number*/}
        {/* to be uncontrolled the value cannot be changed, known declared as defaultValue="2" */}
        <label htmlFor="pick">Pick a number: </label>
        <select id="pick">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <br />
        <br />
        <textarea
          placeholder="I am the placeholder of textarea"
          rows="3"
        ></textarea>
        <br />
        <br />
        {/* Defaultchecked will make checkbox already checked on load*/}
        <input id="agree" type="checkbox" defaultChecked />
        <label htmlFor="agree">Agree with conditions</label>
        <br />
        <br />
        <button>Add Todo</button>
      </form>
    </>
  );
}

//-------------------------- 56. One way Data Flow--------------------//
//one way data flow =  data can only flow from parent to children and not the other way around

//https://courses.webdevsimplified.com/view/courses/react-simplified-beginner/1764773-forms/5836245-56-one-way-data-flow

//-------------------------- 57. useState vs useRef--------------------//
//use case to use Ref instead of State

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

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name"> Name: </label>
      <br />
      {/* uncontrolled input with useRef, wont cause component to rerender everytime */}
      <input type="text" ref={nameRef} id="name" />
      {/* controlled input causing component to rerender */}
      {/* <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        /> */}
      <br />
      <br />
      <button>Alert Name</button>
    </form>
  );
}
