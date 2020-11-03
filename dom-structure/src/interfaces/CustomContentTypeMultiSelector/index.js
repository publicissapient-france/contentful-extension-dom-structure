import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {
    Container,
    Partners,
    Select,
    List, Priority, PriorityList, SelectContentType
} from './styled';
import {getCurrentExtension} from '../../actions/index';
import ItemPriority from '../../components/ItemPriority';

class CustomContentTypeMultiSelector extends Component {
    constructor(props) {
        super(props);

        this.state = {
            contents: [],
            selectedContents: [],
            priority: [],
            contentType: "",
            availableContentType: ["publication", "event", "customerCase"]
        };
    }

    componentDidMount = async () => {
        //await this.initRessources();
        this.setState({
            selectedContents: this.props.contents,
            priority: this.props.priority,
            contentType: this.props.contentType
        }, () => {
            if(this.state.contentType !== "") this.getContentsByContentType(this.state.contentType)
        })
    };

    componentDidUpdate(prevProps) {
        if (this.props.contents !== prevProps.contents) {
            this.setState({
                selectedContents: this.props.contents
            })
        }
        if (this.props.priority !== prevProps.priority) {
            this.setState({
                priority: this.props.priority,
                selectedContents: this.orderSelectedWithPriority()
            }, () => {
                this.props.updateContent(this.state.selectedContents, 'data')
            })
        }
    }

    findProperLocale = () => this.props.extensionInfo.extension.locales.default;
    getById = (id) => this.state.contents.find(element => element.id === id);


    /*initRessources = async () => {
        await this.props.extensionInfo.extension.space.getEntries({
            'content_type': 'category',
        }).then(result => {
            this.setState({
                contents: result.items.map(item => {
                    let category = {
                        id: item.sys.id,
                        name: item.fields.name[this.findProperLocale()]
                    }
                    return category
                })
            })
        });

    }*/

    getContentsByContentType = async (contentType) => {
        await this.props.extensionInfo.extension.space.getEntries({
            'content_type': contentType,
        }).then(result => {
            this.setState({
                contents: result.items.map(item => {
                    let content = {
                        id: item.sys.id,
                        name: item.fields.name[this.findProperLocale()]
                    }
                    return content
                })
            })
        });

    }
    addPriority = (id) => {
        this.setState(prevState => ({
            priority: [...prevState.priority, id]
        }), () => {
            this.props.updateContent(this.state.priority, 'priority')
            this.refreshOrderWithPriority()
        })
    }

    updatePriority = (id) => !this.alreadyOnPriority(id) ? this.addPriority(id) : this.removePriority(id);

    removePriority = (id) => {
        this.setState(prevState => ({
            priority: prevState.priority.filter(item => item !== id)
        }), () => {
            this.props.updateContent(this.state.priority, 'priority')
            this.refreshOrderWithPriority()
        })
    }

    refreshOrderWithPriority = () => {
        this.setState({
            selectedContents: this.orderSelectedWithPriority()
        }, () => {
            this.props.updateContent(this.state.selectedContents, 'data')
        })
    }

    alreadyOnPriority = (id) => this.state.priority.find(item => item === id)


    // alreadySelected = (id) => this.state.selected === id

    addSelected = (id) => {
        this.setState(prevState => ({
            selectedContents: [...prevState.selectedContents, id]
        }), () => {

            this.props.updateContent(this.state.selectedContents, 'data')
        })
    }

    removeFromSelectedList = (id) => {
        this.setState(prevState => ({
            selectedContents: prevState.selectedContents.filter(item => item !== id)
        }), () => {
            this.removePriority(id)
            this.props.updateContent(this.state.selectedContents, 'data')
        })
    }

    alreadySelected = (id) => this.state.selectedContents.find(item => item === id) ? true : false

    currentContentType = (ct) => this.state.contentType === ct ? true : false

    orderSelectedWithPriority = () => [...this.state.priority, ...this.state.selectedContents.filter(id => !this.alreadyOnPriority(id))];

    moveElementToTop = (index) => {
        if (index === 0) return
        const a = this.props.priority[index];
        const b = this.props.priority[index - 1];
        let newOrder = [...this.props.priority];
        newOrder[index - 1] = a;
        newOrder[index] = b;
        this.setState({priority: newOrder}, () => {
            this.props.updateContent(this.state.priority, 'priority')
        })
    }

    moveElementToBottom = (index) => {
        if (index === (this.props.priority.length - 1)) return
        const a = this.props.priority[index];
        const b = this.props.priority[index + 1];
        let newOrder = [...this.props.priority];
        newOrder[index] = b;
        newOrder[index + 1] = a;

        this.setState({priority: newOrder}, () => {
            this.props.updateContent(this.state.priority, 'priority')
        })
    }

    // updateSelected = (e, id) => (e.target.checked) ? this.addSelected(id) : this.removeSelected();

    updateSelected = (e, id) => (e.target.checked) ? this.addSelected(id) : this.removeFromSelectedList(id);

    updateContentType = (value) => {
        this.setState(prevState => ({
            contentType: value,
            priority: [],
            selectedContents : []
        }), async () => {
            await this.getContentsByContentType(this.state.contentType);
            this.props.updateContent(this.state.contentType, 'contentType');
            this.props.updateContent(this.state.priority, 'priority');
            this.props.updateContent(this.state.selectedContents, 'data');
        })
    }

    render = () => {
        return (
            <>
                <SelectContentType>
                    <label>Choose Content Type</label>
                    <select value={this.state.contentType}
                            onChange={(e) =>  this.updateContentType( e.target.value)}
                    >
                        <option value={''}></option>
                        {
                            this.state.availableContentType ?
                                this.state.availableContentType.map(contentType => <option key={contentType} value={contentType}>{contentType}</option>)
                                : null
                        }
                    </select>
                </SelectContentType>
                <Container>
                    <Partners>
                        <label>Select Content</label>
                        <List>
                            {
                                this.state.contents ? this.state.contents.sort((a, b) => a.name.localeCompare(b.name))
                                    .map((content, i) => {
                                        return <Select key={i}>
                                            <input checked={this.alreadySelected(content.id)} type={'checkbox'}
                                                   onChange={(e) => this.updateSelected(e, content.id)}/>
                                            <p className={this.alreadyOnPriority(content.id) ? 'active' : ''}
                                               onClick={() => this.updatePriority(content.id)}>{content.name}</p>
                                        </Select>
                                    }) : null
                            }
                        </List>
                    </Partners>
                    <Priority>
                        <label>Priority List</label>
                        <PriorityList>
                            {
                                this.state.priority ? this.state.priority.map((id, i) => {
                                    const content = this.getById(id);
                                    return <ItemPriority data={content}
                                                         index={i}
                                                         key={i}
                                                         moveElementToBottom={this.moveElementToBottom}
                                                         moveElementToTop={this.moveElementToTop}
                                    />

                                }) : null
                            }
                        </PriorityList>
                    </Priority>
                </Container>
            </>
        );
    }
}

CustomContentTypeMultiSelector.protoTypes = {
    partners: PropTypes.array,
    priority: PropTypes.array
};

const mapStateToProps = state => ({
    extensionInfo: getCurrentExtension(state)
});
export default connect(mapStateToProps)(CustomContentTypeMultiSelector);
