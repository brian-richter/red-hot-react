var React = require('react')
    , router = require('react-router')
    , Link = router.Link;

var Jumbotron = React.createClass({
    render: function () {
        return (
            <div className="jumbotron">
                <h1>Hello, world!</h1>
                <p>This is a boilerplate configuration for ReactJS providing hot reloads of components and styles.</p>
                <p>
                    <Link to="About" className="btn btn-primary btn-lg" role="button">Learn more &raquo;</Link>
                </p>
            </div>
        )
    }
});


var Home = React.createClass({
    render: function () {
        return (
            <div className="container" role="main">
                <Jumbotron/>
                <this.props.activeRouteHandler/>
            </div>
        );
    }
});


module.exports = Home;