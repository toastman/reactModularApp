class MainApp extends React.Component {
  render() {
    return (
      <div>
        <h1>Main app</h1>
        <div>{this.props.children}</div>
      </div>
    )
  }
}

export default MainApp;
