import { useEffect } from "react";
import { Time } from "./component/DateTime";
import { Navbar } from "./component/Navbar";
import { TaskContainer } from "./component/TaskContainer";
import { Tools } from "./component/Tools";
import { ICONS } from "./utils/icons/icons";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated, getAccessTokenSilently, loginWithRedirect } =
    useAuth0();

  useEffect(() => {
    if (!isAuthenticated) return; // wait until user is logged in

    const callApi = async () => {
      try {
        const token = await getAccessTokenSilently({
          authorizationParams: {
            audience: import.meta.env.VITE_API_AUTH0_AUDIENCE,
            scope: "read:messages",
          },
        });

        const response = await fetch(import.meta.env.VITE_API_PROTECTED, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!response.ok) {
          console.error("API error", response.status, await response.text());
          return;
        }

        const data = await response.json();
        console.log(data);
      } catch (e: any) {
        // Handle typical Auth0 silent auth errors
        if (
          e.error === "consent_required" ||
          e.error === "login_required" ||
          e.error === "missing_scope"
        ) {
          await loginWithRedirect({
            appState: { returnTo: window.location.pathname },
            authorizationParams: {
              audience: import.meta.env.VITE_AUTH0_AUDIENCE,
              scope: "openid profile email read:messages",
            },
          });
        } else {
          console.error("Failed to fetch protected resource", e);
        }
      }
    };

    callApi();
  }, [isAuthenticated, getAccessTokenSilently, loginWithRedirect]);

  return (
    <div className="bg-[#2D2D2D] min-h-screen">
      <Navbar />
      <Time />
      <Tools
        sortIcons={[ICONS.WARNING, ICONS.CLOCK, ICONS.SLEEP]}
        toolIcon={ICONS.PLUS_MATH}
      />
      <TaskContainer />
    </div>
  );
}

export default App;
