import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import AssignmentIcon from '@material-ui/icons/Assignment';

type SideBarLink = {
    title: string
    icon: any
    link: string
  }
export const SideBarData:SideBarLink[] = [
    {
        title: 'My Day',
        icon: <HomeIcon />,
        link:'/pages/AddTodo'
    }, 
    {
        title: 'Important',
        icon: <StarBorderIcon />,
        link: '/pages/AddTodo'
    }, 

    {
        title: 'Task',
        icon: <AssignmentIcon />,
        link: '/pages/AddTodo'
    }
]

 

