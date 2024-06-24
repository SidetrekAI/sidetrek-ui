import { $ } from 'bun'

const cwd = process.cwd()

try {
  await $`CUSTOM_ENV=development ../../sidetrek-cli/build/sidetrek start`.cwd(`${cwd}/test_proj`)
} catch (err) {
  console.error(err)
}
