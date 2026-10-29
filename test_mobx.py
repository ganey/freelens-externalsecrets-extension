import re

with open('src/renderer/api/eso-resources.ts', 'r') as f:
    content = f.read()

print("observable in eso-resources.ts:", "observable" in content)
print("action in eso-resources.ts:", "action" in content)

with open('src/renderer/api/eso-stores.ts', 'r') as f:
    content = f.read()

print("observable in eso-stores.ts:", "observable" in content)
