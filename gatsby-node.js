// const path = require(`path`)

// exports.createPages = async ({ graphql, actions }) => {
//     const { createPage } = actions

//     const result = await graphql(`
//     {
//       allMdx(sort: {fields: frontmatter___date, order: DESC}) {
//         nodes {
//           frontmatter {
//             slug
//           }
//           id
//         }
//       }
//     }
//   `)
//     const templatePath = path.resolve(`PATH/TO/TEMPLATE.js`)

//     result.data.allMdx.forEach((node) => {
//         createPage({
//             path: NODE_SLUG,
//             component: templatePath,
//             context: {
//                 slug: NODE_SLUG,
//             },
//         })
//     })
// }