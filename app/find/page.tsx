import SearchPanel from "./components/search-panel";
import PlantOverviewPanel from './components/plant-overview-panel';
import PlantTablePanel from './components/plant-table-panel';

export default function Page() {
  return (
    <div>
      <main>
        <SearchPanel />
        <PlantOverviewPanel />
        <PlantTablePanel />
      </main>
    </div>
  )
}