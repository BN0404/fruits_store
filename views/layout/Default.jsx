const React = require('react');

function DefaultLayout(props) {
    const { title, children } = props;
    return (
        <html>
            <head>
                <title>
                    {title}
                </title>
            </head>
            
            <nav>
                <a href="/fruits"> Home </a>
            </nav>
            
                <body>
                    <h1>{title}</h1>
                    {/* everything is coming from Index defaultlayout */}
                    {children}
                </body>
            
        </html>
        )
};

module.exports = DefaultLayout;