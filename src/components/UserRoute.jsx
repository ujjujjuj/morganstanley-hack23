import { redirect } from "react-router-dom"
import useUser from "../../hooks/useUser"

const UserRoute = ({children}) => {
  const { user } = useUser()

  if (!user) {
    return redirect("/signin")
  } else if (user.role !== "user") {
    return redirect("/admin")
  }

  return <>{children}</>
}

export default UserRoute
