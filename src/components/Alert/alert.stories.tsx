import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import {Alert, AlertProps} from './index';

export default {
  title: 'Alert',
  component: Alert,
} as Meta;

const Template: Story<AlertProps> = (args) => <Alert {...args} />;

export const  Default = Template.bind({})
Default.args = {
  title:"Account created!", message:"Account created successfully!" 
}

export const  Error = Template.bind({})
Error.args = {
  title:"Error!", type:"error", message:"Account was not created!" 
}