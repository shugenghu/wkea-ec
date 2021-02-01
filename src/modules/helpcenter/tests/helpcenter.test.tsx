/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { buildMockModuleProps} from '@msdyn365-commerce/core-internal';
/// <reference types="jest" />

// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Helpcenter from '../helpcenter';
import { IHelpcenterData } from '../helpcenter.data';
import {
  IHelpcenterConfig,
  IHelpcenterProps
} from '../helpcenter.props.autogenerated';

const mockData: IHelpcenterData = {
  actionResponse: {
    text: 'Sample Response Data'
  }
};

const mockConfig: IHelpcenterConfig = {
  showText: 'helpcenter'
};

const mockActions = {};

describe('Helpcenter', () => {
  let moduleProps: IHelpcenterProps<IHelpcenterData>;
  beforeAll(() => {
    moduleProps = buildMockModuleProps(mockData, mockActions, mockConfig) as IHelpcenterProps<IHelpcenterData>;
  });
  it('renders correctly', () => {
    const component: renderer.ReactTestRenderer = renderer.create(
      <Helpcenter {...moduleProps} />
    );
    const tree: renderer.ReactTestRendererJSON | renderer.ReactTestRendererJSON[] | null = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
