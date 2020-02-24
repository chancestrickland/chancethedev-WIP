import React from 'react';
import styled from '@emotion/styled';
import Link from '$components/Link';
import { breakpoint, GLOBAL_MARGIN } from '$lib/styles';
import { rhythm, fonts } from '$lib/typography';
import { leadingSlashIt } from '$lib/utils';
import { PaginationProps } from './index';

const Pagination: React.FC<PaginationProps> = ({
  previousPagePath,
  previousAriaLabel,
  previousLabel = 'Older Posts',
  nextPagePath,
  nextAriaLabel,
  nextLabel = 'Newer Posts',
}) => {
  return (
    <Wrapper aria-label="Post navigation">
      <PageList>
        {previousPagePath && (
          <Page>
            <Link
              to={leadingSlashIt(previousPagePath)}
              aria-label={previousAriaLabel || `See ${previousLabel}`}
            >
              {previousLabel}
            </Link>
          </Page>
        )}
        {nextPagePath && (
          <Page>
            <Link
              to={leadingSlashIt(nextPagePath)}
              aria-label={nextAriaLabel || `See ${nextLabel}`}
            >
              {nextLabel}
            </Link>
          </Page>
        )}
      </PageList>
    </Wrapper>
  );
};

export default Pagination;

////////////////////////////////////////////////////////////////////////////////
// STYLES
////////////////////////////////////////////////////////////////////////////////
export const Wrapper = styled('nav')`
  margin: ${rhythm(GLOBAL_MARGIN)} 0 0;
  padding: ${rhythm(GLOBAL_MARGIN / 2)} 0 0;
  font-family: ${fonts.sans};
  font-weight: bold;
`;

export const PageList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  ${breakpoint('medium')} {
    display: flex;
    justify-content: space-between;
  }
`;

export const Page = styled.li`
  margin: 0;
  padding: 0;
`;
