import { Client } from "@pomerium/enterprise-client-node";

async function main(): Promise<void> {
  const client = new Client("example.com", "SERVICE-ACCOUNT-JWT", {
    verifyOptions: {
      checkServerIdentity: () => undefined,
      rejectUnauthorized: false,
    },
  });

  const namespaces = await client.namespace.listNamespaces({});
  console.log("NAMESPACES", namespaces);
}

main();
