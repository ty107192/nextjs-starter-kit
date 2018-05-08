import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, text, select, number, date} from '@storybook/addon-knobs/react';
import Icon from '@components/atoms/Icon/Icon';
import {asset} from '@utils/uri';


storiesOf('Icon', module)
    .addDecorator(withKnobs)
    .add('default', () => (
        <div>
            <div>
                <a className="btn btn-info" href={asset('plugins/iconfont/demo_fontclass.html')} target="_blank">iconfont code link</a>
            </div>
            <Icon
                code={select('code', ['times-circle', 'eye', 'lock', 'error-circle', 'bell', 'user'], 'times-circle')}
                size={number('size(rem)', 5)}
                height={number('height', 0)}
                status={select('status', ['', 'info', 'error'], '')}
            />
        </div>
    ));

