---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: '/static/images/avatar/rikka-takanashi.gif',
    name: 'Takanashi',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/' },
      { icon: 'twitter', link: 'https://twitter.com/' }
    ]
  },
    {
    avatar: '/static/images/avatar/rikka-takanashi.gif',
    name: 'Rikka',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/' },
      { icon: 'twitter', link: 'https://twitter.com/' }
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
      A
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>
