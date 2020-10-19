var Rice = () => (<li>Rice</li>);
var Tomato = () => (<li>Tomato</li>);

var GroceryList = () => (
    <ul>
      <Rice />
      <Tomato />
    </ul>
  );

ReactDOM.render(<GroceryList />, document.getElementById("app"));

