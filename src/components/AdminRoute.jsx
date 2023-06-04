import { redirect } from "react-router-dom"
import useUser from "../../hooks/useUser"

const AdminRoute = ({ children }) => {
  const { user } = useUser()

  if (!user) {
    return redirect("/signin")
  } else if (user.role !== "admin") {
    return redirect("/user")
  }

  return <>{children}</>
}

export default AdminRoute
