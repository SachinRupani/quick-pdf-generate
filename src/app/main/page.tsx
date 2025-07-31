import { AppNameComponent } from "./components/appName/AppNameComponent";
import { OptionsGrid } from "./components/optionsGrid/OptionsGrid";

export default function MainPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen p-0">
      <AppNameComponent />
      <OptionsGrid />
    </div>
  );
}
