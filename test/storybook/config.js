import {configure, setAddon} from '@storybook/react';

// import '../static/css/bootstrap.css';

const atoms = require.context('../../resources/components/atoms', true, /\.stories\.js$/);
const molecules = require.context('../../resources/components/molecules', true, /\.stories\.js$/);
const organisms = require.context('../../resources/components/organisms', true, /\.stories\.js$/);

function loadStoryFiles() {
    atoms.keys().forEach(filename => atoms(filename));
    molecules.keys().forEach(filename => molecules(filename));
    organisms.keys().forEach(filename => organisms(filename));
}

configure(loadStoryFiles, module);
