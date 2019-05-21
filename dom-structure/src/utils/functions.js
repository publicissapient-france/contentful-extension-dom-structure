import _ from 'lodash';

const createSlug = (name, shade) => (shade != '') ? name + '-' + shade : name;

const hexToRgb = hex => {
    if (!hex) return;
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);

    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
};

const RGBtoString = rgb => {
    if (!rgb) return;
    return '(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ')';
};

const colorIsComplete = newColor => {
    if (newColor.name != '' &&
        newColor.hex != '#' &&
        newColor.hex != '' &&
        newColor.shade != '' &&
        RGBtoString(hexToRgb(newColor.hex)) != (null && '' && '(...)')
    ) return true;

    return false;
};

const colorHasChanged = (index, array, currentColor) => {
    return !_.isEqual(array[index], currentColor);
};

const getShadePosition = (shade, array) => array.indexOf(shade);

const slugIsUnique = (slug, array) => !(array.find(element => element.slug == slug));

const filterActiveSections = (dom) => dom.filter(section => section.active);

const filterActiveComponents = (dom) => {
    return dom.map( (section) => {
        section.components = section.components.filter( component => component.active);
        return section;
    } )
}

const filterActiveContent = (dom) => {
    return dom.map( (section) => {
        section.components.map(component => {
            _.mapKeys(component.content, (value, key) => {
                if(!value.active){
                    _.unset(component.content, key);
                }
            });
            return component;
        })
        return section;
    } );
}

const extractActiveValue = (dom) => {
    return filterActiveContent(filterActiveComponents(filterActiveSections(_.cloneDeep(dom))));
}

export { createSlug, hexToRgb, RGBtoString, colorIsComplete, colorHasChanged, getShadePosition, slugIsUnique, extractActiveValue };
