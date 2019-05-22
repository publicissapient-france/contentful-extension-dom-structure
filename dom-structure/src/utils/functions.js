import _ from 'lodash';

const getShadePosition = (shade, array) => array.indexOf(shade);

const slugIsUnique = (slug, array) => !(array.find(element => element.slug == slug));

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

export { getShadePosition, slugIsUnique, extractActiveValue };
