

// const {v4: uuidv4} = require('uuid');
// const { uuid } = require('../plugins');


// const obj = {name: 'John', bd: '1992-10-11'}

const makeBuildPerson = ({uuid}) => {

    return ({ name, bd }) => {

        return {
            id: uuid(),
            name,
            bd,
            age: new Date().getTime()
        }
    }
}



// const john =  buildPerson(obj)

// console.log(john) 

module.exports = {
    makeBuildPerson
}
