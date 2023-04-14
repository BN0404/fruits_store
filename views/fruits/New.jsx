const React = require('react');
const DefaultLayout = require('../layout/Default')

function New() {
    return(
        <DefaultLayout title="New Fruit Page">
            <h1>New Fruit Page</h1>

            <form action='/fruits' method='POST'>

                Name: <input type="text" name="name"/>
                <br/>

                Color: <input type='text' name="color"/>
                <br/>

                Is ready to eat: <input type='checkbox'
                name="readyToEat"
                />
                <br/>

                <input type="submit" value="Create new fruit"/>

            </form>
        </DefaultLayout>
    )
}

module.exports = New;