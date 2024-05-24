import { Button, Input, Label } from "../components/iu";

function LoginForm() {
  return (
    <section className="w-full h-screen flex items-center justify-center">

      <form className="bg-blue-200 py-12 px-20 flex flex-col gap-4 rounded-lg">
        <Label htmlFor="user">User</Label>
        <Input placeholder="CP1118******" type="text" />
        <Label htmlFor="password">Password</Label>
        <Input placeholder="************" type="password" />
        <Button type="submit">Login</Button>
      </form>

    </section>
  );
}

export default LoginForm;