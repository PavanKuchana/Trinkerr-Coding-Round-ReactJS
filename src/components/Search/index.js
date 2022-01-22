import {Component} from 'react'
import Cookies from 'js-cookie'

class Search extends Component {
  state = {
    searchInput: '',
    obtainedData:[]
  }

  componentDidMount() {
    this.getStocksBySearch()
  }

  getStocksBySearch = async () => {
    const userToken = Cookies.get('Cookie')
    // const {searchInput} = this.state
    const apiUrl = `http://3.108.225.220:5000/api/data?search_string={searchInput}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer userToken`,
      },
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    const filteredData = data.map(each=>({
        name :each.name,
        ltp :each.ltp,
        lcp:each.ltp,
    })
    if response.ok{
        this.setState({obtainedData:filteredData})
    }
    else{
        console.log(data.error_msg)
    }
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput} = this.state
    return (
      <div>
        <input
          type="search"
          value={searchInput}
          placeholder="Search Stocks"
          onChange={this.onChangeSearchInput}
        />
      </div>
    )
  }
}

export default Search
