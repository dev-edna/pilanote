import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"), 
    route("/help", "pages/help.tsx"), 
    route("/history", "pages/history.tsx"),
    route("/insights", "pages/insights.tsx"),
    route("/log", "pages/log.tsx"),
    route("/profile", "pages/profile.tsx"),
    route("/signIn", "pages/signIn.tsx"),
    route("/signUp", "pages/signUp.tsx"),
    route("/templates", "pages/templates.tsx")
] satisfies RouteConfig;
