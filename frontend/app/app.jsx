const ReactDOM = require("react-dom/client");
const React = require("react");
const Header = require("./components/common/header.jsx");
const Footer = require("./components/common/footer.jsx");
const Navigation = require("./components/common/navigation.jsx");

ReactDOM.createRoot(
    document.getElementById("app")
)
.render(
    <div>
        <Header />
        <Navigation />
        <Footer />
    </div>
);
