const React = require('react');
const DefaultLayout = require('../layout/Default');

function Show(props) {
    const { fruit } = props;
    console.log(fruit);
    return (
    <DefaultLayout title= "Show Page">
                        


            {/* <h1> Lets know more about fruits </h1> */}
            <p> The {fruit.name} is {fruit.color}  {". "}
                {fruit.readyToEat
                ? "It's ready to eat" : "Need more time for riping"} {"."}
            </p>
          
        </DefaultLayout>
    )
}

//extending a class component from the show
// class Show extends React.Component{
//     render() {
//         return (
//         <h1> Show Route </h1>
//             )
//     }
// }

module.exports = Show;