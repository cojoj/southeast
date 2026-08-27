import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";

const packageJson = JSON.parse(
  readFileSync(new URL("../package.json", import.meta.url), "utf8"),
);

const packageManagerMatch = packageJson.packageManager?.match(/^pnpm@([^+]+)(?:\+.+)?$/);
const nodeEngineMatch = packageJson.engines?.node?.match(/^>=(\d+) <(\d+)$/);

if (!packageManagerMatch) {
  throw new Error('package.json must declare an exact "packageManager": "pnpm@<version>" value.');
}

if (!nodeEngineMatch) {
  throw new Error(
    'package.json must declare engines.node as a single-major range such as ">=24 <25".',
  );
}

const expectedPnpmVersion = packageManagerMatch[1];
const actualPnpmVersion = execFileSync("pnpm", ["--version"], {
  encoding: "utf8",
}).trim();
const actualNodeMajor = Number.parseInt(process.versions.node.split(".")[0], 10);
const minimumNodeMajor = Number.parseInt(nodeEngineMatch[1], 10);
const maximumNodeMajor = Number.parseInt(nodeEngineMatch[2], 10);

if (actualNodeMajor < minimumNodeMajor || actualNodeMajor >= maximumNodeMajor) {
  throw new Error(
    `Node.js version mismatch: package.json requires ${packageJson.engines.node}, but ${process.versions.node} is running.`,
  );
}

if (actualPnpmVersion !== expectedPnpmVersion) {
  throw new Error(
    `pnpm version mismatch: package.json declares ${expectedPnpmVersion}, but ${actualPnpmVersion} is running.`,
  );
}

if (process.env.CF_PAGES === "1") {
  const expectedNodeVersion = process.versions.node;
  const cloudflareNodeVersion = process.env.NODE_VERSION;
  const cloudflarePnpmVersion = process.env.PNPM_VERSION;

  if (cloudflareNodeVersion !== expectedNodeVersion) {
    throw new Error(
      `Cloudflare NODE_VERSION mismatch: expected ${expectedNodeVersion}, received ${cloudflareNodeVersion ?? "no value"}.`,
    );
  }

  if (cloudflarePnpmVersion !== expectedPnpmVersion) {
    throw new Error(
      `Cloudflare PNPM_VERSION mismatch: expected ${expectedPnpmVersion}, received ${cloudflarePnpmVersion ?? "no value"}.`,
    );
  }
}

console.log(
  `Toolchain validated: Node ${process.versions.node}, pnpm ${actualPnpmVersion}.`,
);
