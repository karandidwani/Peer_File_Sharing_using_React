var React = require('react');
var ReactDOM = require('react-dom');
var Filesharer = require('./components/filesharer.jsx');

var options = {
	peerjs_key: 'h5gyfvymni9newmi'
};

var main = document.getElementById('main');

ReactDOM.render(<Filesharer opts={options} />, main);
