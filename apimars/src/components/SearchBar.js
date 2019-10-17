import React, { Component } from 'react'

export class SearchBar extends Component {
    render() {
        return (
            <div className="wrap" >
                <div className="search">
                <input type="text" className="searchTerm" placeholder="Search For Specific Mission" onChange={()=>{this.props.user()}}/>
                <button type="submit" className="searchButton">
                    <i className="fa fa-search"></i>
                </button>
                </div>
            </div>
           
        )
    }
}
export default SearchBar
