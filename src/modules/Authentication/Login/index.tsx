import Button from "../../../components/Button";
import Card from "../../../components/Card";
import Input from "../../../components/Input";
import { useLogin } from "./useLogin";

const Login = () => {
  const { handleUsernameChange, username, handleLogin, errorMessage } =
    useLogin();
  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-[400px] text-left font-sans">
        <h1 className="mb-6 text-2xl text-gray-600">Login</h1>

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
            {errorMessage && (
              <div className="text-sm text-red-500">{errorMessage}</div>
            )}

            <div>
              <Button className="w-full" onClick={handleLogin}>
                Login
              </Button>
            </div>
            <div>
              <span className="text-sm text-gray-600">
                Don't have an account?{" "}
                <a href="/register" className="text-blue-500">
                  Register
                </a>
              </span>
            </div>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Login;
