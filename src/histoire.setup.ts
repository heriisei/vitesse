import { defineSetupVue3 } from '@histoire/plugin-vue'
import {
  VaButton, VaInput, VaSelect,
  createVuesticEssential,
} from 'vuestic-ui'
import 'vuestic-ui/styles/essential.css'
import 'vuestic-ui/styles/typography.css'
import 'uno.css'

export const setupVue3 = defineSetupVue3(({ app }) => {
  app.use(createVuesticEssential({
    components: { VaButton, VaSelect, VaInput },
  }))
})
