import React, { useEffect, useState } from 'react';

const withData = (WrappedComponent) => {

    const WithData = (props) => {
        const {dataSource} = props;
        const [data, setData] = useState([]);
        console.log('h-o-c', props);
        useEffect(() => {
           setTimeout(() => {
            fetch(dataSource)
            .then(response => response.json())
            .then(data => setData(data.splice(0,3)))
        },3000)},[dataSource])

        return (
            data.length > 1 ? <WrappedComponent data={data} {...props} /> : <h1>Loadssss...</h1>
        );

    }

    return WithData;
}

export default withData;