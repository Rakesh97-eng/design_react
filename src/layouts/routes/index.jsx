import { AdminRoutes } from "./adminroutes";
import { AuthRoutes } from "./authroutes";


const ROLES_ROUTES = {
  0: AuthRoutes,
  1: AdminRoutes
};

export const getRoutes = (role) => {
  return ROLES_ROUTES[role];
};