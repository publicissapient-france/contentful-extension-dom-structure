import React, { Component } from 'react';

const  HocField = (WrappedComponent) => {
    class HOC extends React.Component {
        constructor(props){
            super(props);

            this.state = {
                openContent : false,
                openSettings : false,
            };

            this.toggleContent = this.toggleContent.bind(this);
            this.toggleSettings = this.toggleSettings.bind(this);

        }



        componentDidMount(){
        }

        checkLocalStorageExists(){

        }

        toggleContent() {
            this.setState(prevState => ({
                openContent: !prevState.openContent,
                openSettings: false
            }));
        }

        toggleSettings(){
            this.setState(prevState => ({
                openSettings: !prevState.openSettings,
                openContent: false,
            }));
        }


        render(){

           /* console.log( 'Wrapped state', this.state);
            console.log( 'Wrapped props', this.props);*/
            return (
                <WrappedComponent
                    secretToLife={42}
                    //openContent={this.state.openContent}
                   //openSettings={this.state.openSettings}
                   // toggleContent={this.toggleContent}
                  // toggleSettings={this.toggleSettings}
                    {...this.props}
                />
            );
        }
    }
    return HOC;

};

export default HocField;