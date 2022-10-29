import React from 'react';
import CountUp from 'react-countup';
import TrackVisibility from "react-on-screen";

const Data = [
    {
        countNum : 328,
        countTitle: 'Happy Clients.',
        description: "We have this amount of customers that are satisfied with our products. We don't just leave them unsatisfied.",
    },
    {
        countNum : 13,
        countTitle: 'Employees',
        description: "We have this amount of employees that's working hard in order to serve cheese n` bites products to the public.",
    },
    {
        countNum : 8,
        countTitle: 'Useful Programs',
        description: 'We always strive to improve and we have implemented programs in order to further improve cheese `n bites product quality.',
    },
];
const CounterUpTwo = ({textALign, counterStyle, column}) => {
    return (
        <div className="row">
            {Data.map((data, index) => (
                <div className={`${column}`} key={index}>
                    <div className={`count-box ${counterStyle} ${textALign}`}>
                        <TrackVisibility once>
                            {({ isVisible }) => isVisible && 
                                <div className="count-number">{isVisible ? <CountUp end={data.countNum} /> : 0}</div>}
                        </TrackVisibility>
                        <h5 className="title">{data.countTitle}</h5>
                        <p className="description">{data.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default CounterUpTwo;