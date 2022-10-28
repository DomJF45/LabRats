import { randomColor } from "../../util/colors"

export const projectData = [
  {
    id: '1',
    name: 'project 1',
    tasks: 5,
    assignedTo: 'Big Mac',
    isComplete: false,
    color: randomColor()
  },
  {
    id: '2',
    name: 'project 2',
    tasks: 2,
    assignedTo: 'Sandy',
    isComplete: false,
    color: randomColor()
  },
  {
    id: '3',
    name: 'project 3',
    tasks: 3,
    assignedTo: 'emily',
    isComplete: false,
    color: randomColor()
  }
]