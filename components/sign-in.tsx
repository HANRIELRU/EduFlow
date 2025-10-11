
import { signIn } from "@/auth"
 
export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("yandex")
      }}
    >
      <button type="submit">Авторизация через Yandex</button>
    </form>
  )
} 