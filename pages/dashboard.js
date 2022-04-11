import {getSession} from 'next-auth/react';

export default function Dashboard({session}) {
    const user = session && session.user;
    return(
        <>
        Dashboard should only be for logged in users
        </>
    )
}

export async function getServerSideProps(context){
    const session = await getSession(context);
    // redirect to login if not logged in
    if(!session){
        context.res.writeHead(302, {Location: '/'});
        context.res.end();
    }
    return {
        props: {
            session
        }
    }
}