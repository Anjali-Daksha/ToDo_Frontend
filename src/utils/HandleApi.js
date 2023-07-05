import axios from 'axios'



async function getAllToDo(setToDo) {
try {  
    const res = await axios.get('http://localhost:5000');
    console.log(res)
    setToDo(res.data)

    
} catch (error) {
    console.log(error.message);
}
  
}

const addToDo = (text, setText, setToDo) => {

    axios.post('http://localhost:5000/save', { text })
        .then((data) => {
            console.log(data)
            setText("")
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))

}

const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {
    axios.post('http://localhost:5000/update', { _id: toDoId, text })
        .then((data) => {
            console.log(data)
            setText("")
            setIsUpdating(false)
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))

}

const deleteToDo = (_id, setToDo) => {
    axios.post('http://localhost:5000/delete', { _id })
        .then((data)=> {
            console.log(data)
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))

}


export { getAllToDo, addToDo, updateToDo, deleteToDo }