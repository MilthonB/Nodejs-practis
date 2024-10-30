

const users =[
    {
        id: 1,
        name: 'Jhon Doe'
    },
    {
        id: 2,
        name: 'Jane Doe'
    },
    {
        id: 3,
        name: 'Lane Doe'
    },
]



const getUserByid = ( id, callback )=>{
    const user = users.find(
        (user)=> user.id === id
    )

    user 
    ? callback(null, user)
    : callback(`User not found with id: ${id}`)
    // if(!user){
    //     return callback(`User not found with id: ${id}`);
    // }

    // // console.log({user})
    // return callback(null, user)

}


// getUserByid(1)


module.exports = {

    getUserByid
}