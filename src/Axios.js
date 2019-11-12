import axios from 'axios';



const instance=axios.create({
    baseURL:'https://react-my-burger-f1c50.firebaseio.com/'
});

export default instance;