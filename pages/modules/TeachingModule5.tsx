import ModuleContent from "@/components/ModuleContent";
import { getModule } from "@/data/moduleContent";

export default function TeachingModule5() {
  const moduleData = getModule("teaching", 5);

  if (!moduleData) {
    return <div>Module not found</div>;
  }

  return (
    <ModuleContent
      pathway="teaching"
      pathwayTitle="Teaching Ministry"
      moduleData={moduleData}
    />
  );
}
