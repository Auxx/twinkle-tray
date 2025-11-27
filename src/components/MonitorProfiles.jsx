import React from 'react';

export default function MonitorProfiles(props) {
    const { monitor } = props;

    return (
        <div key={monitor.key}>
            <br />
            <div className="sectionSubtitle"><div className="icon">&#xE7F4;</div><div>{monitor.name}</div></div>
        </div>
    )
}
