import {signIn, useSession, signOut} from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();
  // the user is stored in session
  const user = session && session.user;
  console.log(user);
  
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <img src={session.user.image} alt="avatar" />
        <h2>{session.user.name}</h2>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}
