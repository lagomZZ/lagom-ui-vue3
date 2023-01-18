import LagTask from './Task'
import { action } from '@storybook/addon-actions'
export default {
  component: LagTask,
  title: 'Example/Task',
  argTypes: {
    onPinTask: {},
    onArchiveTask: {},
  },
  excludeStories: /.*Data$/,
}

export const actionsData = {
  onPinTask: action('pin-task'),
  onArchiveTask: action('archive-task'),
}

const Template = (args) => ({
  components: {
    LagTask,
  },
  template: '<LagTask v-bind="args"/>',
  setup() {
    return { args, ...actionsData }
  },
})

export const Default = Template.bind({})
Default.args = {
  task: {
    id: '1',
    title: 'Test task',
    state: 'TASK-INBOX',
  },
}
export const Pinned = Template.bind({})
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK-PINNED',
  },
}
export const Archived = Template.bind({})
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK-ARCHIVED',
  },
}
