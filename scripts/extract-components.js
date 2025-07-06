const fs = require('fs');
const path = require('path');

// Function to extract component information
function extractComponentInfo(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Extract component name
  const componentMatch = content.match(/export\s+(?:default\s+)?(?:function|const)\s+(\w+)/);
  const componentName = componentMatch ? componentMatch[1] : 'Unknown';
  
  // Extract styles
  const styleMatches = content.match(/StyleSheet\.create\({[\s\S]*?\}\)/g);
  const styles = styleMatches ? styleMatches[0] : 'No styles found';
  
  // Extract imports
  const importMatches = content.match(/import\s+.*?from\s+['"].*?['"];?/g);
  const imports = importMatches || [];
  
  return {
    name: componentName,
    path: filePath,
    styles: styles,
    imports: imports,
    content: content
  };
}

// Function to scan all components
function scanComponents(dir) {
  const components = [];
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      components.push(...scanComponents(filePath));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      try {
        const componentInfo = extractComponentInfo(filePath);
        components.push(componentInfo);
      } catch (error) {
        console.log(`Error processing ${filePath}:`, error.message);
      }
    }
  });
  
  return components;
}

// Main execution
const srcDir = path.join(__dirname, '../src');
const components = scanComponents(srcDir);

// Create output directory
const outputDir = path.join(__dirname, '../figma-export');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Generate component documentation
const componentDocs = components.map(comp => ({
  name: comp.name,
  path: comp.path,
  styles: comp.styles,
  hasStyles: comp.styles !== 'No styles found'
}));

// Write to JSON file
fs.writeFileSync(
  path.join(outputDir, 'components.json'),
  JSON.stringify(componentDocs, null, 2)
);

// Generate style extraction
const allStyles = components
  .filter(comp => comp.styles !== 'No styles found')
  .map(comp => ({
    component: comp.name,
    styles: comp.styles
  }));

fs.writeFileSync(
  path.join(outputDir, 'styles.json'),
  JSON.stringify(allStyles, null, 2)
);

console.log(`✅ Extracted ${components.length} components`);
console.log(`📁 Output saved to: ${outputDir}`);
console.log(`🎨 Found ${allStyles.length} components with styles`); 