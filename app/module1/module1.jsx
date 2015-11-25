class Module1 extends React.Component {
  render() {
    console.log('Module1 is here');
    return (
        <div>
            <h1>This is Module1</h1>
            <div>{this.props.children}</div>
        </div>
    )
  }
}

export default Module1;
