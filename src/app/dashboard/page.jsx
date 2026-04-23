import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";


const DashboardPage = async() => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    console.log(session);
    
    const user = session?.user
    if(!user){
        redirect('/signin')
        return <div>Please Signin for access dashboard</div>
    }
    return (
        <div>
            <h2 className="text-center text-5xl">This is dash board</h2>
        </div>
    );
};

export default DashboardPage;