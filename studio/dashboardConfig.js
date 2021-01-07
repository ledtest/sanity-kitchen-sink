export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ff6790773a5b3205a24afa7',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-y6w37xc9',
                  apiId: 'ea708e2e-7c87-4f68-ad80-d3122364e15c'
                },
                {
                  buildHookId: '5ff679079dc171210d64155b',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-js5wh3yq',
                  apiId: '0785e96a-b4e2-4710-afb0-7132b1f5fd7c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ledtest/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-js5wh3yq.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
