import ModuleContent from "@/components/ModuleContent";
import { getModule } from "@/data/moduleContent";

export default function YouthModule5() {
  const moduleData = getModule("youth", 5);

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
