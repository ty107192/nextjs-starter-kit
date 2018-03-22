import {Component} from 'react';

import styled from 'styled-components';
import Layout from '@layouts/base';
import {Router} from 'routes';
import {withI18next} from '@hoc/withI18next';


class Detail extends Component {

    render() {
        return (
            <Layout>
                <div>
                    test
                </div>
            </Layout>
        );
    }
}

export default withI18next()(Detail);
