import { GraphQLClient } from 'graphql-request';

import { getSdk } from '@src/lib/__generated/sdk';
import { endpoint } from 'codegen';

const graphQlClient = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer ${process.env.CONTENTFULACCESSTOKEN}`,
  },
});

const previewGraphQlClient = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer ${process.env.CONTENTFULPREVIEWACCESSTOKEN}`,
  },
});

export const client = getSdk(graphQlClient);
export const previewClient = getSdk(previewGraphQlClient);
