import { request, gql } from "graphql-request";
const MASTER_URL =
  "https://api-ap-northeast-1.hygraph.com/v2/cltqxptd80jx107thbtffhujc/master";

export const getCourseList = async (level) => {
  const query =
    gql`
    query CourseList {
        courses(where: {level: ` +
    level +
    `}) {
          id
          name
          price
          level
          tags
          time
          author
          category {
            name
          }
          description {
            markdown
          }
          banner {
            url
          }
          chapters {
            title
            id
            content {
              heading
              description {
                markdown
                html
              }
            }
          }
        }
      }
    `;

  const result = await request(MASTER_URL, query);
  return result;
};

export const enrollCourse = async (courseId, userEmail) => {
  const mutationQuery =
    gql`
  mutation MyMutation {
    createUserEnrolledCourse(
      data: {courseId: "` +
    courseId +
    `", userEmail: "+userEmail+", course: {connect: {id: "` +
    courseId +
    `"}}}
    ) {
      id
    }
    publishManyUserEnrolledCoursesConnection(to: PUBLISHED) {
      edges {
        node {
          id
        }
      }
    }
  }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};

export const getCategories = async () => {
  const query = gql`
    query GetCategory {
      categories {
        id
        name
        icon {
          url
        }
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};

export const getCourseListByCategory = async (category) => {
  const query =
    gql`
    query CourseList {
      courses(where: {category: ` +
    category +
    `}) {
        id
        name
        price
        level
        tags
        time
        author
        category {
          name
        }
        description {
          markdown
        }
        banner {
          url
        }
        chapters {
          title
          id
          content {
            heading
            description {
              markdown
              html
            }
          }
        }
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};
