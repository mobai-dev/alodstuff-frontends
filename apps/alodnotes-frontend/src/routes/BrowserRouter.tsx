import { createBrowserRouter, RouteObject } from "react-router-dom";
import TodoListPage from "../pages/TodoListPage";
import TextEditorPage from "../pages/TextEditorPage";
import EmptyPage from "../pages/EmptyPage";

const routes: RouteObject[] = [
    {
        path: "/",
        element: (
            <EmptyPage />
        )
    },
    {
        path: "/todo",
        element: (
            <TodoListPage />
        )
    },
    {
        path: "/text",
        element: (
            <TextEditorPage />
        )
    }
]

export const browserRouter = createBrowserRouter(routes, {
    basename: "/",
});