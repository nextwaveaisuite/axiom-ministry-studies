import ModuleContent from "@/components/ModuleContent";
import { getModule } from "@/data/moduleContent";

export default function YouthModule6() {
  const moduleData = getModule("youth", 6);

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
