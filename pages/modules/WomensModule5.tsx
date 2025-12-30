import ModuleContent from "@/components/ModuleContent";
import { getModule } from "@/data/moduleContent";

export default function WomensModule5() {
  const moduleData = getModule("womens", 5);

  if (!moduleData) {
    return <div>Module not found</div>;
  }

  return (
    <ModuleContent
      pathway="womens"
      pathwayTitle="Women's Ministry"
      moduleData={moduleData}
    />
  );
}
