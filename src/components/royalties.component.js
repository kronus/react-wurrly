import React from 'react';
import { TablePagination } from 'react-pagination-table';
import Axios from 'axios';

class RoyaltiesComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            Header: []
        }
    }

    componentDidMount() {
        this.getRoyalties();
    }

    getRoyalties(){
        console.log('makes it to getRoyalties');
        var self = this;
        Axios.get('http://kronusproductions.com/react-wurrly/Royalties/royalties.json')
            .then(
                responseJson => {
                    let data = JSON.parse(JSON.stringify(responseJson.data.records));
                    this.setState({ data: data });
                    this.setState({ Header: ['id', 'title', 'writers' ] });
                    console.log(data);
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
                    title="Royalties according to Wurrly"
                    subTitle=""
                    headers={this.state.Header}
                    data={this.state.data}
                    columns="id.title.writers"
                    perPageItemCount={30}
                    totalCount={1658}
                    arrayOption={[["size", 'all', ' ']]}
                />
            </div>
        );
    }
}

export default RoyaltiesComponent