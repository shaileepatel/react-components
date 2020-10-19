class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false,
    }
  }
  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }
  render() {
    var style = {
      'font-weight': this.state.done ? 'bold' : 'normal'
    };
    return (
      <li style={style} onMouseOver={this.onListItemClick.bind(this)}>{this.props.groceryItem}</li>
    );
  }
}

var GroceryList = (props) => (
  <ul>
    {props.items.map(item =>
      <GroceryListItem  groceryItem={item}/>
    )}
  </ul>
);

ReactDOM.render(<GroceryList items={['Rice', 'Tomato', 'Onion']}/>, document.getElementById("app"));

