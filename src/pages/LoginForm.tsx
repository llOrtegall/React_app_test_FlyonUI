import { LockIcon, UserIcon } from "../components/icons";
import { Button, Input, Label } from "../components/iu";

function LoginForm() {
  return (
    <section className="w-full h-screen flex items-center justify-center">

      <form className="bg-gray-300 py-12 px-20 flex flex-col gap-4 rounded-xl">
        <figure className="flex justify-center">
          <img src="/vite.svg" width={80} alt="Coppel Logo" />
        </figure>
        <div className="flex flex-col gap-1">
          <Label htmlFor="user">Usuario:</Label>

          <div className="flex items-center gap-1">
            <UserIcon size={'8'}/>
            <Input placeholder="CP1118******" type="text" id="username" name="username" />
          </div>

        </div>
        <div className="flex flex-col gap-1">

          <Label htmlFor="password">Contraseña:</Label>

          <div className="flex items-center gap-1">
            <LockIcon size={'8'}/>
            <Input placeholder="************" type="password" id="password" name="password" />
          </div>
        </div>
        <Button type="submit">Login</Button>
      </form>

    </section>
  )
}

export default LoginForm;