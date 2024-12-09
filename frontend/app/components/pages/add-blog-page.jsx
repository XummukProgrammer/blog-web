const React = require("react");
  
class AddBlogPage extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <form method="POST" action="http://127.0.0.1:3010/api/blogs/add">
                <input name="title"/>
                <input name="content"/>
                <input type="submit" value="Войти" />
            </form>
        );
    }
}
  
module.exports = AddBlogPage;
