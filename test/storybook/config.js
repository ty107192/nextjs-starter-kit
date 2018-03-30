import {configure, setAddon} from '@storybook/react';

import '@assets/sass/dist/app.scss';

const atoms = require.context('../../src/resources/components/atoms', true, /\.stories\.js$/);
const molecules = require.context('../../src/resources/components/molecules', true, /\.stories\.js$/);
const organisms = require.context('../../src/resources/components/organisms', true, /\.stories\.js$/);

function loadStoryFiles() {
    atoms.keys().forEach(filename => atoms(filename));
    molecules.keys().forEach(filename => molecules(filename));
    organisms.keys().forEach(filename => organisms(filename));
}

configure(loadStoryFiles, module);
