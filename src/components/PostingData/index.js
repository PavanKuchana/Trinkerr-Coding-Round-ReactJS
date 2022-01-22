import {Component} from 'react'
import Cookies from 'js-cookie'

class PostingData extends Component{
    state={
        name:'',
        ltp:''
        lcp:''
    }

    componentDidMount(){
        this.postData()
    }

    postData = async() =>{
        const{name,ltp,lcp} = this.state 
        const userToken = Cookies.get('Cookie')
        const userDetails ={name,ltp,lcp}
         const apiUrl = `http://3.108.225.220:5000/api/data`
        const options = {
        method: 'POST',
        headers: {
            Authorization: `Bearer userToken`,
        },
        }
        const response = await fetch(apiUrl,options)
         if response.ok{
        console.log("DATA UPLOADED SUCCESSFULLY")
    }
    else{
        console.log(data.error_msg)
    }
    }

    render(){
        return(
            <h1>TRINKERR</h1>
        )
    }
}

export default PostingData