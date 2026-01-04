import { dashboardMock } from "@/features/dashboard/dashboard.mock";
import { KpiGrid } from "@/features/dashboard/components/kpis/kpi-grid";

export default function Home() {
  return (
    <main>
      <KpiGrid items={dashboardMock.kpis} />
    </main>
  );
}
