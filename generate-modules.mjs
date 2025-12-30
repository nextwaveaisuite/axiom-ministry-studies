import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const allModules = [
  // Module data structure (pathway, number, title)
  { pathway: 'mens', number: 1, pathwayTitle: "Men's Ministry" },
  { pathway: 'mens', number: 2, pathwayTitle: "Men's Ministry" },
  { pathway: 'mens', number: 3, pathwayTitle: "Men's Ministry" },
  { pathway: 'mens', number: 4, pathwayTitle: "Men's Ministry" },
  { pathway: 'mens', number: 5, pathwayTitle: "Men's Ministry" },
  { pathway: 'mens', number: 6, pathwayTitle: "Men's Ministry" },
  { pathway: 'womens', number: 1, pathwayTitle: "Women's Ministry" },
  { pathway: 'womens', number: 2, pathwayTitle: "Women's Ministry" },
  { pathway: 'womens', number: 3, pathwayTitle: "Women's Ministry" },
  { pathway: 'womens', number: 4, pathwayTitle: "Women's Ministry" },
  { pathway: 'womens', number: 5, pathwayTitle: "Women's Ministry" },
  { pathway: 'womens', number: 6, pathwayTitle: "Women's Ministry" },
  { pathway: 'youth', number: 1, pathwayTitle: "Youth Ministry" },
  { pathway: 'youth', number: 2, pathwayTitle: "Youth Ministry" },
  { pathway: 'youth', number: 3, pathwayTitle: "Youth Ministry" },
  { pathway: 'youth', number: 4, pathwayTitle: "Youth Ministry" },
  { pathway: 'youth', number: 5, pathwayTitle: "Youth Ministry" },
  { pathway: 'youth', number: 6, pathwayTitle: "Youth Ministry" },
  { pathway: 'teaching', number: 1, pathwayTitle: "Teaching Ministry" },
  { pathway: 'teaching', number: 2, pathwayTitle: "Teaching Ministry" },
  { pathway: 'teaching', number: 3, pathwayTitle: "Teaching Ministry" },
  { pathway: 'teaching', number: 4, pathwayTitle: "Teaching Ministry" },
  { pathway: 'teaching', number: 5, pathwayTitle: "Teaching Ministry" },
  { pathway: 'teaching', number: 6, pathwayTitle: "Teaching Ministry" },
];

const moduleTemplate = (pathway, number, pathwayTitle) => `import ModuleContent from "@/components/ModuleContent";
import { getModule } from "@/data/moduleContent";

export default function ${pathway.charAt(0).toUpperCase() + pathway.slice(1)}Module${number}() {
  const moduleData = getModule("${pathway}", ${number});

  if (!moduleData) {
    return <div>Module not found</div>;
  }

  return (
    <ModuleContent
      pathway="${pathway}"
      pathwayTitle="${pathwayTitle}"
      moduleData={moduleData}
    />
  );
}
`;

// Create modules directory if it doesn't exist
const modulesDir = './client/src/pages/modules';
try {
  mkdirSync(modulesDir, { recursive: true });
} catch (e) {
  // Directory already exists
}

// Generate all module files
allModules.forEach(({ pathway, number, pathwayTitle }) => {
  const capitalizedPathway = pathway.charAt(0).toUpperCase() + pathway.slice(1);
  const filename = `${capitalizedPathway}Module${number}.tsx`;
  const filepath = join(modulesDir, filename);
  const content = moduleTemplate(pathway, number, pathwayTitle);
  
  writeFileSync(filepath, content, 'utf8');
  console.log(`✓ Generated ${filename}`);
});

console.log(`\n✅ Successfully generated ${allModules.length} module files!`);
