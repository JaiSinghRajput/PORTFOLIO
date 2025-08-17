import fs from "fs";
import path from "path";
import type { RouteConfig } from "@react-router/dev/routes";
const ROUTES_DIR = path.join(process.cwd(), "app/routes");

function toUrlPath(filePath: string) {
  // Get relative path inside app/routes
  let relPath = path.relative(ROUTES_DIR, filePath).replace(/\\/g, "/");

  // Remove trailing "/route" or extension
  relPath = relPath.replace(/\/route\.(t|j)sx?$/, "");
  relPath = relPath.replace(/\.(t|j)sx?$/, "");

  // Remove "/_index" and "_index"
  relPath = relPath.replace(/\/_index$/, "");
  relPath = relPath.replace(/^_index$/, "");

  // Replace $param → :param
  relPath = relPath.replace(/\$([a-zA-Z0-9_]+)/g, ":$1");

  // Ensure leading slash
  return "/" + relPath;
}

function scanRoutes(dir: string): RouteConfig[] {
  const routes: RouteConfig[] = [];

  function walk(currentDir: string) {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);

      if (entry.isDirectory()) {
        walk(fullPath);
      } else if (/\.(t|j)sx?$/.test(entry.name)) {
        const urlPath = toUrlPath(fullPath);

        routes.push({
          path: urlPath === "" || urlPath === "/" ? "/" : urlPath,
          file: path
            .relative(path.join(process.cwd(), "app"), fullPath)
            .replace(/\\/g, "/"),
        });
      }
    }
  }

  walk(dir);
  return routes;
}

export default scanRoutes(ROUTES_DIR) satisfies RouteConfig[];
