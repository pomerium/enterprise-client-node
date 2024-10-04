# Pomerium Enterprise API Node Client

Welcome to the Pomerium Enterprise API Node client! This repository provides the tools to interact programmatically with Pomerium Enterprise's gRPC API using Node.js. The client library offers a streamlined way to manage policies, routes, and other enterprise-level configurations.

## Table of Contents

- [Pomerium Enterprise API Node Client](#pomerium-enterprise-api-node-client)
	- [Table of Contents](#table-of-contents)
	- [Installation](#installation)
	- [Usage](#usage)
	- [API Overview](#api-overview)
	- [Examples](#examples)
		- [List Namespaces](#list-namespaces)
		- [Create a Route](#create-a-route)
		- [List Policies](#list-policies)
	- [Best Practices](#best-practices)
	- [Contributing](#contributing)

## Installation

```bash
npm install @pomerium/enterprise-client-node
```

To use the latest version directly from the GitHub repository:

```bash
npm install git+https://git@github.com/pomerium/enterprise-client-node.git
```

## Usage

Here is a basic example to get started with the Pomerium Enterprise API Node client:

```typescript
import { Client } from "@pomerium/enterprise-client-node";

async function main(): Promise<void> {
  const client = new Client("console-api.localhost.pomerium.io", "SERVICE-ACCOUNT-JWT", {
    verifyOptions: {
      checkServerIdentity: () => undefined,
      rejectUnauthorized: false,
    },
  });

  const namespaces = await client.namespace.listNamespaces({});
  console.log("NAMESPACES", namespaces);
}

main();
```

## API Overview

The Pomerium Enterprise API allows programmatic access to the following features:

- **Namespaces**: List, manage, and configure namespaces for efficient access control and segmentation.
- **Routes**: Define and manage routes in Pomerium Enterprise.
- **Policies**: Create, update, and remove policies to enforce access control rules.
- **Audit Logs**: Programmatically access audit logs to understand activity within your Pomerium environment.

You can use either Go or Python gRPC clients if you're working in those languages. Refer to [Pomerium's API Reference](https://github.com/pomerium/enterprise-client) for complete details.

## Examples

### List Namespaces

This example demonstrates how to list all namespaces in Pomerium:

```typescript
import { Client } from "@pomerium/enterprise-client-node";

async function listNamespaces(): Promise<void> {
  const client = new Client("console-api.localhost.pomerium.io", "SERVICE-ACCOUNT-JWT");
  const namespaces = await client.namespace.listNamespaces({});
  console.log("Namespaces: ", namespaces);
}

listNamespaces();
```

### Create a Route

This example shows how to create a new route:

```typescript
import { Client } from "@pomerium/enterprise-client-node";
import { Route } from "@pomerium/enterprise-client-node/pb/routes_pb";

async function createRoute(): Promise<void> {
  const client = new Client("console-api.localhost.pomerium.io", "SERVICE-ACCOUNT-JWT");
  const newRoute = new Route({
    name: "example-route",
    from: "https://example.localhost.pomerium.io",
    to: ["https://backend.example.com"],
    passIdentityHeaders: true,
  });
  const response = await client.route.setRoute({ route: newRoute });
  console.log("Created Route: ", response);
}

createRoute();
```

### List Policies

This example demonstrates how to list policies:

```typescript
import { Client } from "@pomerium/enterprise-client-node";

async function listPolicies(): Promise<void> {
  const client = new Client("console-api.localhost.pomerium.io", "SERVICE-ACCOUNT-JWT");
  const policies = await client.policy.listPolicies({});
  console.log("Policies: ", policies);
}

listPolicies();
```


## Best Practices

- **Authentication**: Use service account tokens securely. Avoid committing tokens to version control. Prefer using environment variables to store sensitive information.
- **TLS Verification**: For production deployments, ensure that `verifyOptions.rejectUnauthorized` is set to `true`. This prevents potential MITM (Man-in-the-Middle) attacks.
- **Namespaces and Policies**: Organize namespaces according to your organizational structure. This helps in managing policies effectively and maintaining clarity in configuration.
- **Error Handling**: Always handle exceptions properly to ensure that your application remains stable in case of errors when interacting with the API.

## Contributing

We welcome contributions! Please open an issue or create a pull request if you find a bug or have a feature request. Contributions must adhere to the following:

- Follow the existing code style.
- Write unit tests for any new functionality.
- Update documentation where applicable.
