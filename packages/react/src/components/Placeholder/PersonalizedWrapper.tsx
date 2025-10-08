import { createGraphQLClientFactory } from '@sitecore-content-sdk/core/client';
import { ComponentRendering } from '@sitecore-content-sdk/core/layout';
import {
  PersonalizeService,
} from '@sitecore-content-sdk/core/personalize';
import React from 'react';

export const PersonalizedWrapper = async ({ rendering, children }: { rendering: ComponentRendering, children: React.ReactNode }) => {
  const personalizeService = new PersonalizeService({
    clientFactory: createGraphQLClientFactory({
      api: {
        edge: {
          contextId: '58TsUPwlNMDS30rTR8Mwbb',
          clientContextId: '58TsUPwlNMDS30rTR8Mwbb',
          edgeUrl: 'https://edge-platform-staging.sitecore-staging.cloud',
        },
      },
    }),
    timeout: 4000,
    scope: undefined,
    fetch: fetch,
  });

  const personalizeInfo = await personalizeService.getPersonalizeInfo(
    pathname,
    language,
    site.name
  );

  const executions = this.getPersonalizeExecutions(personalizeInfo, language);

  return (
    <>
      {children}
    </>
  );
};
