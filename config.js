module.exports.config = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 9191,
  githubAccessToken: process.env.GITHUB_ACCESS_TOKEN,
  gitlabAccessToken: process.env.GITLAB_ACCESS_TOKEN,
  githubWebhookSecret: process.env.GITHUB_WEBHOOK_SECRET,
  gitlabWebhookSecret: process.env.GITLAB_WEBHOOK_SECRET,
  orchestratorBaseUrl: process.env.ORCHESTRATOR_BASE_URL,
  orchestratorSecret: process.env.ORCHESTRATOR_SECRET
};

module.exports.github = {
  PR_OPENED: 'opened',
  PR_CLOSED: 'closed',
  PR_MERGED: 'merged',
  STATE_OPEN: 'open',
  COMMENT_CREATED: 'created'
};

module.exports.gitlab = {
  BASE_URL: process.env.GITLAB_BASE_URL,
  MERGE_REQUEST: 'Merge Request Hook',
  STATE_OPENED: 'opened',
  STATE_MERGED: 'merged',
  STATE_CLOSED: 'closed'
};

module.exports.deployment = {
  SPECIFIER: process.env.DEPLOYMENT_SPECIFIER || 'spaship',
  ENVS_REGEX: new RegExp(/(dev|qa|stage|uat)/g)
};
