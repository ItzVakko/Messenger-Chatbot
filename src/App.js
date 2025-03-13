import { FacebookProvider, CustomChat } from "react-facebook";

function App() {
  return (
    <div>
      <FacebookProvider appId="2126083514486740" chatSupport>
        <CustomChat pageId="576324402235215" minimized="true" />
      </FacebookProvider>
    </div>
  );
}

export default App;
