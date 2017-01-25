module.exports = {
    prompts: {
        name: {
            'type': 'string',
            'required': 'true',
            'message': 'project name',
            'default': 'vue_mix'
        },
        author: {
            'type':'string',
            'message':'Author',
            'default': 'unknown'
        },
        description: {
            'type': 'string',
            'required': false,
            'message': 'Project description',
            'default': 'Vue-mix project'
        }
    },
    completeMessage: '{{#inPlace}}To get started:\n\n  npm install # Or yarn\n  npm run dev{{else}}To get started:\n\n  cd {{destDirName}}\n  npm install # Or yarn\n  npm run dev{{/inPlace}}'
}