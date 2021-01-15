import userData from '../services/getData'

export const GetData =(dispatch)=>{
    userData().then(res =>{
        console.log('this is res', res.data)
        dispatch(
            {
            type:"GET_DATA",
            payload:res.data,
        })
        });
}