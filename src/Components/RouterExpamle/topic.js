import React from 'react';
const topic = ({ match }) => {
    return (<div><h3>{match.params.topicId}</h3></div>);
}
export default topic;