import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class LocaldatasericeService implements InMemoryDbService {
  createDb() {
    const tabledataObject = [{
      id: 1,
      interviewdate: '12/19/2017',
      interviewtime: '8.30AM',
      interviewtype: 'Telephonic',
      primaryinterviewer: 'Ajith'
    },
    {
      id: 2,
      interviewdate: '01/19/2018',
      interviewtime: '9.30AM',
      interviewtype: 'Skype',
      primaryinterviewer: 'Vijay'
    },
    {
      id: 3,
      interviewdate: '01/06/2018',
      interviewtime: '11.30AM',
      interviewtype: 'Direct',
      primaryinterviewer: 'Rajini'
    },
    {
      id: 4,
      interviewdate: '01/09/2018',
      interviewtime: '9.40AM',
      interviewtype: 'Skype',
      primaryinterviewer: 'Kamal'
    }
    ]
    const existingApplicantObj = [{
      id: 1,
      name: 'Dhanus',
      skill: 'Frontend'
    }, {
      id: 2,
      name: 'Vijay',
      skill: 'Backend'
    },
    {
      id: 3,
      name: 'Rajini',
      skill: 'Database'
    },
    {
      id: 4,
      name: 'Kamal',
      skill: 'Devops'
    },
    {
      id: 5,
      name: 'Ajith',
      skill: 'Database'
    },
    {
      id: 6,
      name: 'Pawan',
      skill: 'Devops'
    },
    {
      id: 7,
      name: 'Balaiya',
      skill: 'Database'
    },
    {
      id: 8,
      name: 'Siranjeevi',
      skill: 'Backend'
    },
    {
      id: 8,
      name: 'Samburnesh',
      skill: 'Java developer'
    },
    {
      id: 9,
      name: 'Rana',
      skill: 'HTML designer'
    },
    {
      id: 10,
      name: 'Prabas',
      skill: 'UI designer'
    }
    ]
    const loginContent = [{
      username: 'user1',
      password: 'user1'
    },
    {
      username: 'user2',
      password: 'user2'
    },
    {
      username: 'user3',
      password: 'user3'
    },
    {
      username: 'user4',
      password: 'user4'
    },
    {
      username: 'user5',
      password: 'user5'
    },
    {
      username: 'user6',
      password: 'user6'
    }]
    return { 'tabledataObject':tabledataObject,'existingApplicantObj':existingApplicantObj,'loginContent':loginContent };
  }
}