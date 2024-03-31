// Dans le composant parent (Parent.jsx)
function Parent() {
    const name = "Alice";
    return (
      <div>
        <Child message="Bonjour" userName={name} />
      </div>
    );
  }
  
  // Dans le composant enfant (Child.jsx)
  function Child(props) {
    return (
      <p> {props.message}, {props.userName} ! </p>
    );
  }
  