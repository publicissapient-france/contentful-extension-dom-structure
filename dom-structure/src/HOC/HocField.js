import React, {Component} from 'react';

const HocField = (WrappedComponent) => {
    class HOC extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                openContent: false,
                openSettings: false,
                currentResponsiveMode: null
            };

            this.toggleContent = this.toggleContent.bind(this);
            this.toggleSettings = this.toggleSettings.bind(this);
            this.toggleResponsiveMode = this.toggleResponsiveMode.bind(this);
            this.getResponsiveChoices = this.getResponsiveChoices.bind(this);
            this.toggleWithTrigger = this.toggleWithTrigger.bind(this);
        }


        componentDidMount() {
            this.initResponsiveMode();
        }

        initResponsiveMode = () => {
            const mode = this.props.responsiveContent[0] || this.props.responsiveSettings[0] || null;
            this.setState({currentResponsiveMode: mode})
        }

        toggleContent() {
            this.setState(prevState => ({
                openContent: !prevState.openContent,
                openSettings: false,
                currentResponsiveMode: this.props.responsiveContent[0]
            }));
        }

        toggleSettings() {
            this.setState(prevState => ({
                openSettings: !prevState.openSettings,
                openContent: false,
                currentResponsiveMode: this.props.responsiveSettings[0]
            }));
        }

        toggleWithTrigger(trigger){
            console.log('TOGGLE TRIGGER');
            this.setState({
                openSettings: trigger,
                openContent: false,
                currentResponsiveMode: this.props.responsiveSettings[0]
            });
        }

        toggleResponsiveMode = (mode) => this.setState({
            currentResponsiveMode: mode
        });

        getResponsiveChoices = () => (this.state.openContent ? this.props.responsiveContent : (this.state.openSettings ? this.props.responsiveSettings : []))


        render() {

            console.log('Wrapped state', this.state);
            console.log('Wrapped props', this.props);
            return (
                <WrappedComponent
                    secretToLife={42}
                    openContent={this.state.openContent}
                    openSettings={this.state.openSettings}
                    toggleContent={this.toggleContent}
                    toggleSettings={this.toggleSettings}
                    currentResponsiveMode={this.state.currentResponsiveMode}
                    toggleResponsiveMode={this.toggleResponsiveMode}
                    getResponsiveChoices={this.getResponsiveChoices}
                    toggleWithTrigger={this.toggleWithTrigger}

                    {...this.props}
                />
            );
        }
    }

    return HOC;

};

export default HocField;