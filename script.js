var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'film o czarodzieju',
        src: './images/hary.jpg'
    },
    {
        id: 2,
        title: 'Król lew',
        desc: 'Film o królu sawanny',
        src: 'https://ssl-gfx.filmweb.pl/po/63/16/776316/7875036.2.jpg'
    },
    {
        id: 3,
        title: 'Władca pierścieni',
        desc: 'film o hobbicie i pierścionku',
        src: 'https://ssl-gfx.filmweb.pl/po/10/65/1065/6900087.2.jpg'
    },
    {
        id: 4,
        title: 'Taxi',
        desc: 'film o szybkiej taksówce',
        src: 'https://ssl-gfx.filmweb.pl/po/07/27/727/6900934.2.jpg'
    },
];

var MovieTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.object.isRequired,
    },

    render: function () {
        return (
            React.createElement('h2', {}, this.props.title.title)
        )
    }
})

var MovieDesc = React.createClass({
    propTypes: {
        desc: React.PropTypes.object.isRequired,
    },

    render: function () {
        return (
            React.createElement('p', {}, this.props.desc.desc)
        )
    }
})

var MovieImage = React.createClass({
    propTypes: {
        image: React.PropTypes.object.isRequired,
    },

    render: function () {
        return (React.createElement('img', { src: this.props.image.src })
        )
    }
})

var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired,
    },

    render: function () {
        return (
            React.createElement('li', { key: this.props.movie.id },
                React.createElement(MovieTitle, { title: this.props.movie }),
                React.createElement(MovieDesc, { desc: this.props.movie }),
                React.createElement(MovieImage, { image: this.props.movie }),
            ))
    }
})



var MovieList = React.createClass({
    propTypes: {
        list: React.PropTypes.object.isRequired,
    },

    render: function () {
        var moviesElements = this.props.list.map(function (movie) {
            return (
                React.createElement(Movie, { movie: movie, key: movie.id })
            )
        });
        return (
            React.createElement('ul', {}, moviesElements)
        )
    }
})


var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement(MovieList, { list: movies })

    );

ReactDOM.render(element, document.getElementById('app'));