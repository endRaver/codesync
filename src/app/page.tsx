import { SignedIn, SignedOut, SignUpButton, UserButton } from "@clerk/nextjs";

import { SignInButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="m-10">
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </div>
  );
}
