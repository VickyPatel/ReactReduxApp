import React from 'react';

export default class Footer extends React.Component {

    render() {

    	const footerStyle = {
            paddingTop : 15,
            color: 444,
            fontSize: 20
        };


        return (
            <footer style={footerStyle}>
	            <div class="row">
	              <div class="col-lg-12">
	                <p>Copyright &copy; VickyPatel</p>
	              </div>
	            </div>
          	</footer>
        );
    }
}
