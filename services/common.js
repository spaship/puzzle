const { log } = require('@spaship/common/lib/logging/pino');
const axios = require('axios');

const orchestratorRequest = async (data) => {
  log.info(data);
  const headers = { 'Content-Type': 'application/json' };
  try {
    const response = await axios.post(config.orchestratorBaseUrl, data, { headers });
    log.info(response.data);
    return response.data;
  } catch (error) {
    log.error('Error in sending data to Orchestrator');
    log.error(error);
  }
};

const createOrchestratorPayload = (payload, contextDir, envs) => {
  return {
    repoUrl: payload.repository.html_url || payload.project.web_url,
    gitRef: payload.pull_request.head.ref || payload.object_attributes.source_branch,
    commitId: payload.pull_request.head.sha || payload.object_attributes.last_commit.id,
    mergeId: payload.pull_request.number.toString() || payload.object_attributes.id.toString(),
    contextDir: contextDir,
    envs: envs
  };
};

module.exports = {
  orchestratorRequest,
  createOrchestratorPayload
};
