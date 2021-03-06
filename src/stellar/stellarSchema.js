/**
 * Created by paul on 8/27/17.
 */

export const StellarGetServerInfoSchema = {
  type: 'object',
  properties: {
    buildVersion: { type: 'string' },
    validatedLedger: {
      type: 'object',
      properties: {
        age: { type: 'number' },
        baseFeeXRP: { type: 'string' },
        hash: { type: 'string' },
        ledgerVersion: { type: 'number' }
      }
    }
  }
}

export const StellarGetAccountSchema = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      currency: { type: 'string' },
      value: { type: 'string' }
    }
  }
}

export const StellarGetTransactionsSchema = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      type: { type: 'string' },
      address: { type: 'string' },
      id: { type: 'string' },
      outcome: {
        type: 'object',
        properties: {
          result: { type: 'string' },
          timestamp: { type: 'string' },
          fee: { type: 'string' },
          ledgerVersion: { type: 'number' },
          balanceChanges: {
            type: 'object'
          }
        }
      }
    }
  }
}
