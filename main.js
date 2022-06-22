import _, { sample } from 'lodash';
import axios from 'axios';
import myData from './myData.json'

console.log(myData)

const user = {
    name: 'park',
    age : 20,
    emails : [
        'test@sample.com',
        'test2@sample.com'
    ]
}

console.log('user', user)

const str = JSON.stringify(user)
console.log('str', str)
console.log(typeof str)

const obj = JSON.parse(str)
console.log('obj', obj)
