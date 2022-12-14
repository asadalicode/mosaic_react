import {
    Routes,
    Route
} from 'react-router-dom';
import Dashboard from "./pages/dashboard/Dashboard";
import Overview from "./pages/dashboard/Overview";
import Playlists from './pages/playlists';
import Songs from './pages/songs/Songs';
import UduxPlaylist from './pages/playlists/uduxPlaylists';
import UserPlaylist from './pages/playlists/UserPlaylist';
import Artists from './pages/artists/Artists';
import PageNotFound from "./pages/utility/PageNotFound";
import Albums from './pages/albums/Albums';
import NewPlaylist from './pages/playlists/NewPlaylist';
import Creator from './partials/userPlaylst/creator';
import ClonePlaylist from './pages/playlists/ClonePlaylist';
import ArtistList from './pages/artistList/ArtistList';
import AlbumDetail from './partials/albums/albumDetail';
import Login from './pages/login/login';
import RequireAuth from './components/RquireAuth';
import AdminOverview from './pages/admin/AdminOverview';
import BillingPlans from './pages/admin/billingPlans/billingPlans';
import Subscriptions from './pages/admin/subscriptions/subscriptions';
import OverviewAdmin from './pages/admin/overview/overviewAdmin';
import AddBillingPlan from './pages/admin/billingPlans/addBillingPlan';
import Project from './pages/project/project';
import EditbillingPlan from './pages/admin/billingPlans/editBillingPlan';


const routes =
    [
        { path: "/login", component: <Login />, protectedPath: false },
        {
            path: "/",
            component:
                <Dashboard />,
            protectedPath: true,
            childRoutes: [
                {
                    path: "/", component: <Overview />, protectedPath: false
                },
                {
                    path: "playlist", component: <Playlists />, protectedPath: false,
                    childRoutes: [
                        { path: "newplaylist", component: <NewPlaylist />, protectedPath: false },
                        { path: "uduxplaylists", component: <UduxPlaylist />, protectedPath: false },
                        { path: "userPlaylists", component: <UserPlaylist />, protectedPath: false },
                        { path: "clonePlaylist", component: <ClonePlaylist />, protectedPath: false },
                        { path: "creator", component: <Creator />, protectedPath: false },
                    ]
                },

                { path: "songs", component: <Songs />, protectedPath: false },
                { path: "projects", component: <Project />, protectedPath: false },
                { path: "artists/:id", component: <Artists />, protectedPath: false },
                { path: "artistsList", component: <ArtistList />, protectedPath: false },
                { path: "artistsList", component: <ArtistList />, protectedPath: false },
                { path: "albumdetails/:id", component: <AlbumDetail />, protectedPath: false },
                { path: "albums", component: <Albums />, protectedPath: false },
                {
                    path: "admin", component: <AdminOverview />, protectedPath: false,

                    childRoutes: [
                        { path: "", component: <OverviewAdmin />, protectedPath: false },

                        { path: "billingPlans", component: <BillingPlans />, protectedPath: false },
                        { path: "newbillingPlans", component: <AddBillingPlan />, protectedPath: false },
                        { path: "editbillingPlans/:id", component: <EditbillingPlan />, protectedPath: false },
                        { path: "subscription", component: <Subscriptions />, protectedPath: false },
                    ]
                },
            ],
        },
        { path: "*", component: <PageNotFound />, protectedPath: false },

    ];

const AppRouting = () => {

    return (
        <Routes>
            {routes.map(({ path, component, childRoutes, protectedPath }) => (
                <Route
                    key={Math.random()}
                    path={path}
                    element={
                        <RequireAuth protectedPath={protectedPath}>
                            {component}
                        </RequireAuth>
                    }
                >
                    {childRoutes?.length > 0 &&
                        childRoutes.map(({ path, component, childRoutes }) => (
                            <Route key={Math.random()} path={path} element={component} >
                                {
                                    childRoutes?.length > 0 && childRoutes.map(({ path, component }) => (
                                        <Route key={Math.random()} path={path} element={component} />
                                    ))
                                }
                            </Route>
                        ))}
                </Route>
            ))}
        </Routes>

    )
}
export default AppRouting;