import Button from "../../../components/Button";
import Card from "../../../components/Card";
import Input from "../../../components/Input";
import { useRegistration } from "./useRegistration";

const Register = () => {
  const {
    handleUsernameChange,
    username,
    onRegister,
    isRegistered,
    registrationError,
    onRetry,
  } = useRegistration();

  if (registrationError) {
    return (
      <div className="flex items-center justify-center w-screen h-screen">
        <Card className="w-[500px] text-left font-sans transform transition duration-500 hover:scale-105">
          <div className="flex flex-col items-center justify-center text-center ">
            <h1 className="text-4xl text-red-500">Registration Failed</h1>
            <p className="mt-2 text-lg text-gray-700">{registrationError}</p>
            <button
              onClick={onRetry}
              className="px-4 py-2 mt-6 text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none"
            >
              Try Again
            </button>
          </div>
        </Card>
      </div>
    );
  }

  if (isRegistered) {
    return (
      <div className="flex items-center justify-center w-screen h-screen transition duration-500 transform hover:scale-105">
        <Card className="w-[400px] text-left font-sans">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-6xl text-green-500">Success!</h1>
            <p className="mt-2 text-lg text-gray-700">
              You have successfully registered.
            </p>
            <a
              href="/"
              className="px-4 py-2 mt-6 text-white bg-green-500 rounded hover:bg-green-600 focus:outline-none"
            >
              Login
            </a>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-[400px] text-left font-sans">
        <h1 className="mb-6 text-2xl text-gray-600">Register</h1>

        <form>
          <div className="space-y-4">
            <Input
              label="Username"
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              htmlFor="username"
              onChange={handleUsernameChange}
              value={username}
            />

            <div>
              <Button className="w-full" onClick={onRegister}>
                Register
              </Button>
            </div>
            <div>
              <span className="text-sm text-gray-600">
                Already have an account?{" "}
                <a href="/" className="text-blue-500">
                  Login
                </a>
              </span>
            </div>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Register;
