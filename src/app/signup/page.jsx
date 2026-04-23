import SignupFrom from "@/components/SignupFrom";


const SignupPage = () => {
    return (
        <div className="">
            <h2 className="text-center text-4xl">Please Signup</h2>
            <div className="flex justify-center pt-10">

                <SignupFrom />
            </div>
        </div>
    );
};

export default SignupPage;