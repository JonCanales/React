class Hello extends React.Component {
    render(){
        return (
        <div>
        <h1>Hello There Sir!</h1>
        <h1>This is another element </h1>
        <h1>This is another Hello sir element</h1>
        </div>
        )
    }
}

ReactDOM.render(<Hello/>, document.getElementById('root'));