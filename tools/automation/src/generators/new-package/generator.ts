import type {
  Tree,
} from '@nx/devkit'
import type { AutomationGeneratorSchema } from './schema'
import * as path from 'node:path'
import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
} from '@nx/devkit'

export async function automationGenerator(
  tree: Tree,
  options: AutomationGeneratorSchema,
) {
  const projectRoot = `packages/${options.name}`
  addProjectConfiguration(tree, options.name, {
    root: projectRoot,
    projectType: 'library',
    sourceRoot: `${projectRoot}/src`,
    targets: {},
  })
  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options)
  await formatFiles(tree)
}

export default automationGenerator
