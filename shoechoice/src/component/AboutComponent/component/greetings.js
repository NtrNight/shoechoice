import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../../../style/greetings.css';

export default class Greetings extends React.Component{
    render(){
        return(
            <div className="greeting-inner justify-content-center mb-4">
                <div className="greeting-box row justify-content-center">
                    <div className="img-about col-12 col-lg-4 w-auto col-md-4 col-sm-12 mb-2">
                        <img className="img-fluid" src="https://images.unsplash.com/photo-1562183241-b937e95585b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"></img>
                    </div>
                    <div className="box-title col-12 col-lg-8 col-md-8 col-sm-12 mb-2">
                        <h1 className="text-title-greetings">Hi There !</h1>
                        <p className="text-title-paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Risus etiam aenean in adipiscing tellus diam molestie eget. 
                            Feugiat sit aliquam quis et elementum tellus interdum. 
                            Egestas est diam arcu orci tincidunt. Sapien morbi aliquam 
                            faucibus felis condimentum enim euismod ac aliquam. Ac vitae 
                            amet, nibh eleifend lorem. Viverra venenatis sit aliquam 
                            vulputate et quis ipsum auctor.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}