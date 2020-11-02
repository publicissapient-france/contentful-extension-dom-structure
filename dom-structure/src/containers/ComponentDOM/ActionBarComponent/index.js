import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {
    duplicateComponent,
    getAccessLocalStorageAvailable,
    getCurrentExtension,
    getVersionStorage, moveComponentToDown, moveComponentToTop
} from "../../../actions";
import {ALERT, notifierSuccess} from "../../../utils/Notifier";
import {copyComponentToLocalStorage} from "../../../utils/LocalStorageFunctions";

import {Bar, Group} from "./styled";
import {Icon, Range} from "../../../style/styledComponents";

import SvgSetting from '../../../components/svg/SvgSetting';
import SvgTrash from '../../../components/svg/SvgTrash';
import SvgHorizontalThreeDots from '../../../components/svg/SvgHorizontalThreeDots';
import SvgSpec from '../../../components/svg/SvgSpec';
import SvgRange from '../../../components/svg/SvgRange';
import SvgPastComponent from '../../../components/svg/SvgPastComponent';
import SvgCopyComponent from '../../../components/svg/SvgCopyComponent';
import SvgDuplicateComponent from '../../../components/svg/SvgDuplicateComponent';
import SvgJSON from '../../../components/svg/SvgJSON';

const ActionsBarComponent = ({
                                 openOption,
                                 currentView,
                                 updateView,
                                 triggerOpening,
                                 toggleTrigger,
                                 closeOption,
                                 pastComponent,
                                 component,
                                 index,
                                 indexParent,
                                 toggleOptions,
                                 lengthParent,
                                 versionStorage,
                                 accessLocalStorage,
                                 extensionInfo,
                                 dispatch
                             }) => {

    const [componentsOnLocalStorage, setComponentsOnLocalStorage] = useState(false);

    useEffect(() => {
        checkLocalStorage();
    }, [versionStorage]);

    const checkLocalStorage = () => {
        try {
            if (localStorage && localStorage.getItem('copiedComponents')) {
                setComponentsOnLocalStorage(true);
            }
        } catch (e) {
            console.log('private navigation');
        }
    }

    return (
        <Bar>
            <Group className={openOption ? 'hidden' : ''}>
                <Icon title={"presets"}
                      className={currentView === 'presets' && !triggerOpening ? 'active' : ''}
                      onClick={() => updateView('presets')}>
                    <SvgSetting/>
                </Icon>
            </Group>
            <Group className={'options'}
                   onMouseLeave={() => {
                       if (currentView !== 'formDelete' && currentView !== 'configuration') {
                           closeOption();
                       }
                   }}>
                <div className={[!openOption ? 'hidden' : '']}>
                    <Icon title={"delete"} className={['trash', currentView === 'formDelete' ? 'active' : '']}
                          onClick={() => updateView('formDelete')}><SvgTrash/></Icon>
                </div>
                <div className={[!openOption ? 'hidden' : '']}>
                    <Icon title={"configuration"} className={currentView === 'configuration' ? 'active' : ''}
                          onClick={() => updateView('configuration')}><SvgJSON/></Icon>
                </div>
                <div className={[!openOption ? 'hidden' : '']}>
                    <Icon title={"past component"}
                          className={!componentsOnLocalStorage ? 'disabled' : ''}
                          onClick={() => {
                              if (componentsOnLocalStorage) {
                                  pastComponent()
                              }
                          }}>
                        <SvgPastComponent/>
                    </Icon>
                    <Icon title={"copy component"}
                          className={!accessLocalStorage ? 'disabled' : ''} onClick={() => {
                        if (accessLocalStorage) {
                            copyComponentToLocalStorage(extensionInfo, component, dispatch);
                            setComponentsOnLocalStorage(true);
                        }
                    }}><SvgCopyComponent/></Icon>
                </div>
                <div className={[!openOption ? 'hidden' : '']}>
                    <Icon title={"duplicate component"}
                          onClick={() => {
                              dispatch(duplicateComponent(index, indexParent))
                              notifierSuccess(extensionInfo.extension, ALERT.SUCCESS_DUPLICATION_COMPONENT);

                          }}><SvgDuplicateComponent/></Icon>
                </div>
                <Icon title={"options"} className={['btn-options', openOption ? 'active' : '']}
                      onClick={() => toggleOptions()}>
                    <SvgHorizontalThreeDots/>
                </Icon>
            </Group>
            <Group>
                <Icon title={"open / close fields"} className={triggerOpening ? 'active' : ''}
                      onClick={() => {
                          toggleTrigger();
                          if (currentView !== 'presets') {
                              updateView('presets');
                          }
                      }}>
                    <SvgSpec/>
                </Icon>
                <Range title={"range"}>
                    <Icon className={index === 0 ? 'disable' : ''} onClick={() => {
                        if (index !== 0) {
                            dispatch(moveComponentToTop(index, indexParent));
                        }
                    }}>
                        <SvgRange/>
                    </Icon>
                    <Icon className={index === (lengthParent - 1) ? 'disable' : ''} onClick={() => {
                        if (index !== (lengthParent - 1)) {
                            dispatch(moveComponentToDown(index, indexParent));
                        }
                    }}>
                        <SvgRange/>
                    </Icon>
                </Range>
            </Group>
        </Bar>
    )
}


const mapStateToProps = state => ({
    accessLocalStorage: getAccessLocalStorageAvailable(state).accessLocalStorage,
    versionStorage: getVersionStorage(state).versionStorage,
    extensionInfo: getCurrentExtension(state)
});

export default connect(mapStateToProps)(ActionsBarComponent);