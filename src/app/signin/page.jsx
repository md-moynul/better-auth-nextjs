
import React from 'react';
import SigninFrom from '../../components/SigninFrom';

const SigninPage = () => {
    return (
        <div>
            <h2 className="text-center text-4xl">Please Signup</h2>
            <div className="flex justify-center pt-10">
                <SigninFrom />
            </div>
        </div>
    );
};

export default SigninPage;