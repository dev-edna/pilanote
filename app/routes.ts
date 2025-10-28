import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"), 
    route("/help", "routes/help.tsx"), 
    route("/history", "routes/history.tsx"),
    route("/insights", "routes/insights.tsx"),
    route("/log", "routes/log.tsx"),
    route("/profile", "routes/profile.tsx"),
    route("/signIn", "routes/signIn.tsx"),
    route("/signUp", "routes/signUp.tsx"),
    route("/templates", "routes/templates.tsx")
] satisfies RouteConfig;
