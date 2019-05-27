import _ from 'lodash';

const getShadePosition = (shade, array) => array.indexOf(shade);

const filterActiveSections = dom => dom.filter(section => section.active);

const filterActiveComponents = dom => {
    return dom.map(section => {
        section.components = section.components.filter(component => component.active);
        return section;
    });
};

const filterActiveContent = dom => {
    return dom.map(section => {
        section.components.map(component => {
            _.mapKeys(component.content, (value, key) => {
                if (!value.active) {
                    _.unset(component.content, key);
                }
            });
            return component;
        });
        return section;
    });
};

const extractActiveValue = dom => {
    return filterActiveContent(filterActiveComponents(filterActiveSections(_.cloneDeep(dom))));
};

const getLanguageISO = language => language.split('-')[0];
const getCountryISO = language => language.split('-')[1];


export { getShadePosition, extractActiveValue, getLanguageISO, getCountryISO };
