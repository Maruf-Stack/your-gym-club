import React from 'react';
import './Profile.css'

const Profile = () => {
    return (
        <div className='profile'>
            <div>
                <p className='my-name'>Maruf Hasan</p>
                <p className='location'>Dhaka,bangladesh</p>
            </div>
            <div className='info'>
                <div>
                    <h2>75<span className='span'>kg</span></h2>
                    <h3>Weight</h3>
                </div>
                <div>
                    <h2>6.5</h2>
                    <h3>Height</h3>
                </div>
                <div>
                    <h2>25<span className='span'>years</span></h2>
                    <h3>Age</h3>
                </div>

            </div>
            <div className='break'>
                <h3 className='add-break'>Add a break</h3>
                <div className='break-time'>
                    <h4>10<span>s</span></h4>
                    <h4>20<span>s</span></h4>
                    <h4>30<span>s</span></h4>
                    <h4>40<span>s</span></h4>
                    <h4>50<span>s</span></h4>
                </div>
            </div>
            <div>
                <h3 className='exercise-details'>Exercise details</h3>
                <div className='ex-time'>
                    <p className='ex'>Exercise time</p>
                    <p className='time'><span>00</span>seconds</p>
                </div>
                <div className='break-time-count'>
                    <p className='br'>Break time</p>
                    <p className='time'><span>00</span>seconds</p>
                </div>
            </div>

            <button className='activity-btn'>Activity Completed</button>

        </div>
    );
};

export default Profile;