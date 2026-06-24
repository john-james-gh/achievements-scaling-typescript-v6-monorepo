import { randomUUID } from "node:crypto"

import { utilityFunction } from "@achievements-scaling-typescript-v6-monorepo/shared"

function main(): void {
  const message = utilityFunction()
  console.log(`${message} ${randomUUID()}`)
}

main()
