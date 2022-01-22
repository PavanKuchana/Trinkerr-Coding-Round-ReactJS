import {Component} from 'react'
import Cookies from 'js-cookie'

class Trinkerr extends Component {
  state = {
    userAccessToken: '',
    showErrorMsg:false
  }

  componentDidMount() {
    this.getUserToken()
  }
  
   saveToken = ()=>{
       Cookies.set('Cookie',Cookie,"30")
   }

   showError=()=>{
    this.setState({showErrorMsg:true})
   }

  getUserToken = async () => {
    const {userAccessToken} = this.state
    const apiUrl = `http://3.108.225.220:5000/api/user-access-token`
    const options = {
      method: 'GET',
    }
    const data = await fetch(url, options)
    const response = await data.json

   
    if response.ok{
        this.setState({userAccessToken: response})
        this.saveToken()
    }
    else{
        this.showError()
    }
  }

  render() {
      const token = Cookies.get('Cookie')

    return (
      <div>
        <h1>TRINKERR</h1>
      </div>
    )
  }
}

export default Trinkerr