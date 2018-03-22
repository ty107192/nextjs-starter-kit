import {configure} from '@storybook/react';
import '../static/css/bootstrap.css';
import '../static/css/material.css';
import '../src/styles/app.scss';

const atoms = require.context('../src/components/atoms', true, /\.stories\.js$/);
const molecules = require.context('../src/components/molecules', true, /\.stories\.js$/);
const organisms = require.context('../src/components/organisms', true, /\.stories\.js$/);

function loadStories() {
    atoms.keys().forEach(filename => atoms(filename));
    molecules.keys().forEach(filename => molecules(filename));
    organisms.keys().forEach(filename => organisms(filename));
}

configure(loadStories, module);
