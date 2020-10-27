import React, {useState, useEffect} from 'react';
import {Bar, Group} from "./styled";
import {Icon, Range} from "../../../style/styledComponents";
import SvgAddElement from '../../../components/svg/SvgAddElement';
import SvgSetting from '../../../components/svg/SvgSetting';
import SvgTrash from '../../../components/svg/SvgTrash';
import SvgPastAllComponents from '../../../components/svg/SvgPastAllComponents';
import SvgCopyAllComponents from '../../../components/svg/SvgCopyAllComponents';
import SvgHorizontalThreeDots from '../../../components/svg/SvgHorizontalThreeDots';
import SvgPastSection from '../../../components/svg/SvgPastSection';
import SvgCopySection from '../../../components/svg/SvgCopySection';
import SvgDuplicateSection from '../../../components/svg/SvgDuplicateSection';
import SvgSpec from '../../../components/svg/SvgSpec';
import SvgRange from '../../../components/svg/SvgRange';

import {copyComponentsToLocalStorage, copySectionToLocalStorage} from "../LocalStorageFunctions";

import {connect} from 'react-redux'
import {
    duplicateSection,
    getAccessLocalStorageAvailable,
    getCurrentExtension,
    getVersionStorage, moveSectionToDown, moveSectionToTop
} from "../../../actions";

import {ALERT, notifierSuccess} from "../Notifier";


const ActionsBarSection = ({
                               nbrComponentsOfSection,
                               section,
                               index,
                               domLength,
                               currentView,
                               openOption,
                               openSettings,
                               triggerOpening,
                               toggleTrigger,
                               updateView,
                               closeOption,
                               toggleOptions,
                               versionStorage,
                               accessLocalStorage,
                               extensionInfo,
                               dispatch
                           }) => {

    const [sectionOnLocalStorage, setSectionOnLocalStorage] = useState(false);
    const [componentsOnLocalStorage, setComponentsOnLocalStorage] = useState(false);

    useEffect(() => {
        checkLocalStorage();
    }, [versionStorage]);

    const checkLocalStorage = () => {
        try {
            if (localStorage && localStorage.getItem('copiedSection')) {
                setSectionOnLocalStorage(true);
            }
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
                <Icon title={"add component"} className={currentView === 'formAddComponent' ? 'active' : ''}
                      onClick={() => updateView('formAddComponent')}>
                    <SvgAddElement/>
                </Icon>
            </Group>
            <Group className={openOption ? 'hidden' : ''}>
                <Icon title={"presets"}
                      className={currentView === 'presets' && !triggerOpening ? 'active' : ''}
                      onClick={() => updateView('presets')}>
                    <SvgSetting/>
                </Icon>
            </Group>
            <Group className={'options'} onMouseLeave={() => {
                console.log(currentView)
                if (currentView !== 'formPastSection' &&
                    currentView !== 'formPastComponents' &&
                    currentView !== 'formDelete'
                ) {
                    closeOption();
                }
            }}>
                <div className={[!openOption ? 'hidden' : '']}>
                    <Icon title={"delete"} className={['trash', currentView === 'formDelete' ? 'active' : '']}
                          onClick={() => updateView('formDelete')}><SvgTrash/></Icon>
                </div>
                <div className={[!openOption ? 'hidden' : '']}>
                    <Icon title={"past components"}
                          className={[!componentsOnLocalStorage ? 'disabled' : '', currentView === 'formPastComponents' ? 'active' : '']}
                          onClick={() => {
                              if (componentsOnLocalStorage) {
                                  updateView('formPastComponents')
                              }
                          }}>
                        <SvgPastAllComponents/>
                    </Icon>
                    <Icon title={"copy components"}
                          className={[nbrComponentsOfSection === 0 || !accessLocalStorage ? 'disabled' : '']}
                          onClick={() => {
                              if (nbrComponentsOfSection !== 0 && accessLocalStorage) {
                                  copyComponentsToLocalStorage(extensionInfo, section, dispatch);
                                  setComponentsOnLocalStorage(true);
                              }
                          }}>
                        <SvgCopyAllComponents/>
                    </Icon>
                </div>
                <div className={[!openOption ? 'hidden' : '']}>
                    <Icon title={"past section"}
                          className={[!sectionOnLocalStorage || !accessLocalStorage ? 'disabled' : '', currentView === 'formPastSection' ? 'active' : '']}
                          onClick={() => {
                              if (sectionOnLocalStorage && accessLocalStorage) {
                                  updateView('formPastSection')
                              }
                          }}><SvgPastSection/></Icon>
                    <Icon title={"copy section"}
                          className={!accessLocalStorage ? 'disabled' : ''} onClick={() => {
                        if (accessLocalStorage) {
                            copySectionToLocalStorage(extensionInfo, section, dispatch);
                        }
                    }}><SvgCopySection/></Icon>
                </div>
                <div className={[!openOption ? 'hidden' : '']}>
                    <Icon title={"duplicate section"} className={''} onClick={() => {
                        dispatch(duplicateSection(index));
                        notifierSuccess(extensionInfo.extension, ALERT.SUCCESS_DUPLICATION);
                    }}>
                        <SvgDuplicateSection/>
                    </Icon>
                </div>
                <Icon title={"options"} className={['btn-options', openOption ? 'active' : '']}
                      onClick={() => toggleOptions()}>
                    <SvgHorizontalThreeDots/>
                </Icon>
            </Group>
            <Group>
                <Icon title={"open  / close fields"} className={triggerOpening ? 'active' : ''}
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
                        if (index !== 0) dispatch(moveSectionToTop(index));
                    }}>
                        <SvgRange/>
                    </Icon>
                    <Icon className={index === (domLength - 1) ? 'disable' : ''} onClick={() => {
                        if (index !== (domLength - 1)) dispatch(moveSectionToDown(index));
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

export default connect(mapStateToProps)(ActionsBarSection);