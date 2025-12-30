import ModuleContent from "@/components/ModuleContent";
import { getModule } from "@/data/moduleContent";

export default function MensModule3() {
  const moduleData = getModule("mens", 3);

  if (!moduleData) {
    return <div>Module not found</div>;
  }

  return (
    <ModuleContent
      pathway="mens"
      pathwayTitle="Men's Ministry"
      moduleData={moduleData}
    />
  );
}
