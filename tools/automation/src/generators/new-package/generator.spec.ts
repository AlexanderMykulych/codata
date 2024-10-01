import type { Tree } from '@nx/devkit'
import type { AutomationGeneratorSchema } from './schema'
import { readProjectConfiguration } from '@nx/devkit'

import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing'
import { automationGenerator } from './generator'

describe('automation generator', () => {
  let tree: Tree
  const options: AutomationGeneratorSchema = { name: 'test' }

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace()
  })

  it('should run successfully', async () => {
    await automationGenerator(tree, options)
    const config = readProjectConfiguration(tree, 'test')
    expect(config).toBeDefined()
  })
})
