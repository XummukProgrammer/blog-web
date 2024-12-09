const React = require("react");
  
class BlogElement extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <h1>{this.props.title} | {this.props.content}</h1>
            </div>
        );
    }
}
  
module.exports = BlogElement;
