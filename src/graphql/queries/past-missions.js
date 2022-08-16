import { gql } from '@apollo/client';

export const NUM_PAGES = 3;
export const ITEMS_LIMIT = 12;

export const GET_PAST_MISSIONS = gql`
  query {
    launchesPast(limit: 12) {
      mission_name
      id
      launch_date_local
      launch_site {
        site_name_long
      }
      links {
        article_link
        flickr_images
      }
      rocket {
        rocket_name
      }
      launch_year
    }
  }
`;
