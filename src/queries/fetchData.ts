import { gql } from "@apollo/client";

export const GET_DATA = gql`
  query GetContentCards($limit: Int!, $offset: Int!, $keywords: String!) {
    contentCards(
      filter: {
        limit: $limit
        keywords: $keywords
        types: [PODCAST]
        offset: $offset
      }
    ) {
      edges {
        ... on Podcast {
          length
          timeSpentOnByUsers
          preamble
          image {
            ...Image
          }
          categories {
            ...Category
          }
          participants {
            company
            firstName
            lastName
          }
        }
      }
      meta {
        limit
        total
        offset
      }
    }
  }

  fragment Image on Image {
    uri
    alt
  }

  fragment Category on Category {
    name
  }
`;
