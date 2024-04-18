import core from '@actions/core'
import github from '@actions/github'

export async function action () {
    const commits = github.context.payload.commits || []

    const messages = []

    commits.forEach((commit) => {
        messages.push('— ' + commit.message)
    })

    const text = messages.join('\n')

    core.setOutput('text', text)
}