import axios from 'axios'

const userData =()=>{
    return (
        axios.get("https://jsonplaceholder.typicode.com/users")
    )
}

export default userData;