import Image from "next/image";
import AuthNavbar from "../../components/auth/AuthNavbar";
import LoginForm from "../../components/auth/LoginForm";

export default function Login() {
  return (
    <main className="h-screen min-[992px]:grid grid-cols-2">
      {/* Left Side Section */}
      <section className="flex flex-col h-full">
        <AuthNavbar />
        <div className="flex flex-grow justify-center items-center sm:px-0 px-[20px]">
          <LoginForm />
        </div>
      </section>
      {/* Right Side Section */}
      <section className="loginPicSection min-h-screen min-[992px]:block hidden relative">
        <Image
          fill
          priority
          src="/auth-page-pic.svg"
          alt="platform Snapshot"
          className="object-cover object-left"
        />
      </section>
    </main>
  );
}
