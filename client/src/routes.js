import { Switch, Route, Redirect } from 'react-router-dom'

export const useRoutes = (isAuth) => {
    if (isAuth) {
        return (
            <Switch>
                <Route />
            </Switch>
        )
    }

    return (
        <Switch>
            <Route></Route>
        </Switch>
    )
}