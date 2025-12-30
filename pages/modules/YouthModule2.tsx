import ModuleContent from "@/components/ModuleContent";
import { getModule } from "@/data/moduleContent";

export default function YouthModule2() {
  const moduleData = getModule("youth", 2);

  if (!moduleData) {
    return <div>Module not found</div>;
  }

  return (
    <ModuleContent
      pathway="youth"
      pathwayTitle="Youth Ministry"
      moduleData={moduleData}
    />
  );
}
