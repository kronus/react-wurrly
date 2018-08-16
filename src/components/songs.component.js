import React from 'react';
import { TablePagination } from 'react-pagination-table';
import Axios from 'axios';

class SongsComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            Header: []
        }
    }

    componentDidMount() {
        this.getSongs();
    }

    getSongs(){
        console.log('makes it to getSongs');
        var self = this;
        Axios.get('http://kronusproductions.com/react-wurrly/Songs/songs.json')
            .then(
                responseJson => {
                    let data = JSON.parse(JSON.stringify(responseJson.data.items));
                    this.setState({ data: data });
                    this.setState({ Header: ['id', 'title', 'imagePath' ] });
                    console.log(this.state.data);
                }
            )
            .catch(
                error => console.log(error)
            )
    }

    render(){
        return (
            <div className={'mClear'}>
                <TablePagination
                    title="Songs according to Wurrly"
                    subTitle=""
                    headers={this.state.Header}
                    data={this.state.data}
                    columns="id.title.imagePath"
                    perPageItemCount={30}
                    totalCount={1000}
                    arrayOption={[["size", 'all', ' ']]}
                />
            </div>
        );
    }
}

export default SongsComponent