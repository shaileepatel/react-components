var GroceryListItem = (props) =>
(
<ul>
  <li>{props.items[0]}</li>
  <li>{props.items[1]}</li>
  <li>{props.items[2]}</li>
</ul>
);

var GroceryList = () => (
  <GroceryListItem items={['Rice', 'Tomato', 'Onion']} />
  );

ReactDOM.render(<GroceryList />, document.getElementById("app"));

